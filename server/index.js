const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

const app = express();

// --- MIDDLEWARE SETUP ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Folder for Images and Resumes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 1. Ensure uploads directory exists physically on your MacBook
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// --- MONGODB CONNECTION LOGIC ---
// --- MONGODB CONNECTION LOGIC ---
const MONGO_URI = process.env.MONGO_URI; 

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined in .env file!");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ SUCCESS: Connected to MongoDB Atlas Cluster");
  })
  .catch((err) => {
    console.log("❌ ERROR: Could not connect to MongoDB");
    console.error(err);
  });
// --- DATABASE SCHEMAS & MODELS ---

const blogSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  date: { type: String, default: () => new Date().toLocaleDateString() }
});

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  loc: { type: String },
  salary: { type: String },
  type: { type: String, default: 'On-site' },
  postedAt: { type: Date, default: Date.now }
});

const inquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  sector: { type: String },
  message: { type: String },
  date: { type: Date, default: Date.now }
});
const Inquiry = mongoose.model('Inquiry', inquirySchema);
const Blog = mongoose.model('Blog', blogSchema);
const Job = mongoose.model('Job', jobSchema);

// A. CLIENT: Submit Inquiry (Contact Form se data save karne ke liye)
app.post('/api/contact', async (req, res) => {
  console.log("New Inquiry Received:", req.body);
  try {
    const newInquiry = new Inquiry({
      fullName: req.body.fullName,
      email: req.body.email,
      company: req.body.company,
      sector: req.body.sector,
      message: req.body.message
    });

    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (err) {
    console.error("Inquiry Error:", err.message);
    res.status(500).json({ message: "Failed to save inquiry", error: err.message });
  }
});

// B. ADMIN: Get All Inquiries (Admin Panel me data dikhane ke liye)
app.get('/api/contact', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ date: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: "Error fetching inquiries" });
  }
});

// C. ADMIN: Delete Inquiry
app.delete('/api/admin/contact/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Inquiry deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// --- FILE UPLOAD SETUP (MULTER) ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } 
});

// --- EMAIL CONFIGURATION ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- API ENDPOINTS ---

// 1. ADMIN: Post a New Blog/Service (Port 5001 Fixed)
app.post('/api/admin/blog', upload.single('image'), async (req, res) => {
  console.log("Received Blog Post Request...");
  try {
    const { category, title, description, date } = req.body;
    
    const newPost = new Blog({
      category,
      title,
      description,
      date: date || new Date().toLocaleDateString(),
      // Fixed: Path should match the static route '/uploads'
      image: req.file ? `/uploads/${req.file.filename}` : null
    });

    const savedPost = await newPost.save();
    console.log("Blog Saved to Atlas:", savedPost._id);
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Post Error:", err.message);
    res.status(500).json({ message: "Failed to publish blog", error: err.message });
  }
});

// 3. ADMIN: Post a New Job
app.post('/api/admin/jobs', async (req, res) => {
  console.log("Received Job Post Request...");
  try {
    const newJob = new Job({
      title: req.body.title,
      loc: req.body.loc,
      salary: req.body.salary,
      type: req.body.type || 'On-site'
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: "Failed to publish job" });
  }
});

// 4. CLIENT: Get All Jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const allJobs = await Job.find().sort({ postedAt: -1 });
    res.json(allJobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs list" });
  }
});

// 5. CLIENT: Apply (Email)
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, jobId } = req.body;
    if (!req.file) return res.status(400).json({ message: "Resume required" });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dubeysharad950@gmail.com',
      subject: `workfource - New Application: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nJob ID: ${jobId}`,
      attachments: [{ filename: req.file.originalname, path: req.file.path }]
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// --- DELETE ENDPOINTS ---

// 1. Delete a Job
app.delete('/api/admin/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "✅ Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Delete a Blog/Service
app.delete('/api/admin/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Agar image hai toh use uploads folder se bhi delete karein
    if (blog.image) {
      const filename = blog.image.split('/').pop();
      const filePath = path.join(__dirname, 'uploads', filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // File system se delete
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Blog and Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Jobs update karne ke liye
app.patch('/api/admin/jobs/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Blog update karne ke liye
// Added upload.single('image') to support file updates via PATCH
app.patch('/api/admin/blog/:id', upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedBlog);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- GLOBAL ERROR HANDLER (Add this before app.listen) ---
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  // If Multer error, provide a clearer message
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: `Upload Error: ${err.message}` });
  }
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// --- SERVER INITIALIZATION (PORT 5001) ---
const PORT = 5001; 
app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`🚀 workfource BACKEND ACTIVE ON PORT: ${PORT}`);
  console.log(`✅ MongoDB Connection Check...`);
  console.log(`-----------------------------------------`);
});