import React, { useState } from 'react';
import axios from 'axios'; // Axios import zaroori hai

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    sector: 'Electrical Manpower',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // YE LINE DATA BACKEND KO BHEJEGI
      const res = await axios.post('/api/contact', formData);
      
      if (res.status === 201 || res.status === 200) {
        alert("Inquiry Sent Successfully! Admin Panel check karein.");
        // Form clear karne ke liye
        setFormData({
          fullName: '',
          company: '',
          email: '',
          sector: 'Electrical Manpower',
          message: ''
        });
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Something went wrong. Backend check karein!");
    }
  };

  const contactMethods = [
    { icon: "📍", title: "Office Address", detail: "A-219 trans yamuna colony agra pin code 282006" },
    { icon: "📞", title: "Direct Line", detail: "+91 9557435571", desc: "Mon-Fri, 9am - 6pm." },
    { icon: "📧", title: "Email Support", detail: "workforceinfo@gmail.com", desc: "Manpower inquiries." }
  ];

  return (
    <div className="bg-white min-h-screen antialiased text-gray-900">
      <header className="pt-32 pb-16 px-6 md:px-16 border-b border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-gray-950 leading-[0.85]">
            Let’s Engineer <br /> Your <span className="text-orange-600 italic">Team.</span>
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase">Our <span className="text-orange-600">Offices</span></h2>
              <div className="space-y-10">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{method.title}</h4>
                      <p className="text-xl font-black text-gray-900">{method.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-10 md:p-14 rounded-[4rem] shadow-2xl border border-gray-50">
              <h3 className="text-3xl font-black mb-10 tracking-tighter text-center">Submit a <span className="text-orange-600">Request</span></h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <input name="fullName" value={formData.fullName} onChange={handleChange} required type="text" placeholder="Sharad Dubey" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Company</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Enterprise Ltd" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Business Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="sharad@example.com" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 font-bold" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Target Sector</label>
                  <select name="sector" value={formData.sector} onChange={handleChange} className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 font-bold">
                    <option value="Services">Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your requirements..." className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 font-bold resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-gray-900 transition-all shadow-2xl shadow-orange-200 uppercase tracking-tighter">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
