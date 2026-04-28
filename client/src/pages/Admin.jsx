import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('create'); 
  const [postType, setPostType] = useState('blog'); 
  const [category, setCategory] = useState('Services');
  const [formData, setFormData] = useState({ title: '', description: '', loc: '', salary: '', type: 'On-site' });
  const [file, setFile] = useState(null);
  const [items, setItems] = useState([]); 
  const [inquiries, setInquiries] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchItems = useCallback(async () => {
    try {
      const url = postType === 'job' 
        ? `${BASE_URL}/api/jobs` 
        : `${BASE_URL}/api/blog/${category}`;
      const res = await axios.get(url);
      setItems(Array.isArray(res.data) ? res.data : []);
    } catch (err) { 
      console.error(err); 
      setItems([]); 
    }
  }, [postType, category]);

  const fetchInquiries = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/contact`);
      const data = Array.isArray(res.data) ? res.data : (res.data.inquiries || []);
      setInquiries(data);
    } catch (err) { 
      console.error(err); 
      setInquiries([]); 
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'manage') fetchItems();
    if (activeTab === 'inquiries') fetchInquiries();
  }, [activeTab, fetchItems, fetchInquiries]);

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditId(item._id);
    setActiveTab('create');
    setFormData({
      title: item.title || '',
      description: item.description || '',
      loc: item.loc || '',
      salary: item.salary || '',
      type: item.type || 'On-site'
    });
    if (item.category) setCategory(item.category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Blog posts use FormData for images, Jobs use standard JSON
      let payload;
      const isBlog = postType === 'blog';

      if (isBlog) {
        payload = new FormData();
        payload.append('category', category);
        payload.append('title', formData.title);
        payload.append('description', formData.description);
        if (file) payload.append('image', file); 
      } else {
        payload = formData;
      }

      if (isEditing) {
        const endpoint = isBlog ? `blog/${editId}` : `jobs/${editId}`;
        await axios.patch(`${BASE_URL}/api/admin/${endpoint}`, payload);
        alert("Updated Successfully!");
      } else {
        const endpoint = isBlog ? 'blog' : 'jobs';
        await axios.post(`${BASE_URL}/api/admin/${endpoint}`, payload);
        alert("Published Successfully!");
      }

      // Reset state after success
      setFormData({ title: '', description: '', loc: '', salary: '', type: 'On-site' });
      setFile(null);
      setIsEditing(false);
      setEditId(null);
      if (activeTab === 'manage') fetchItems();
    } catch (err) { 
      console.error("Submission Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Action Failed. Check console for details."); 
    }
  };

  const handleDelete = async (id, type) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        const endpoint = type === 'inquiry' ? 'contact' : (postType === 'job' ? 'jobs' : 'blog');
        await axios.delete(`${BASE_URL}/api/admin/${endpoint}/${id}`);
        type === 'inquiry' ? fetchInquiries() : fetchItems();
        alert("Deleted Successfully!");
      } catch (err) { 
        alert("Delete Failed"); 
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 pt-10 font-sans">
      {/* SIDEBAR */}
      <div className="w-80 bg-black text-white p-8 fixed h-full shadow-2xl overflow-y-auto z-50">
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-black text-orange-500 tracking-tighter leading-none">
            Workfource <br /> <span className="text-white text-4xl">ADMIN</span>
          </h2>
        </div>
        
        <div className="space-y-2">
          <button onClick={() => { setActiveTab('create'); setIsEditing(false); }} className={`w-full text-left p-4 rounded-2xl font-bold transition-all ${activeTab === 'create' ? 'bg-orange-600' : 'text-gray-400 hover:text-white'}`}>➕ Create New</button>
          <button onClick={() => setActiveTab('manage')} className={`w-full text-left p-4 rounded-2xl font-bold transition-all ${activeTab === 'manage' ? 'bg-orange-600' : 'text-gray-400 hover:text-white'}`}>⚙️ Manage All</button>
          <button onClick={() => setActiveTab('inquiries')} className={`w-full text-left p-4 rounded-2xl font-bold transition-all ${activeTab === 'inquiries' ? 'bg-orange-600' : 'text-gray-400 hover:text-white'}`}>📩 Inquiries</button>
        </div>
        
        {(activeTab !== 'inquiries') && (
          <div className="mt-10 border-t border-gray-800 pt-6 space-y-6">
             <div className="flex bg-gray-900 p-1.5 rounded-xl border border-gray-800">
               <button onClick={() => setPostType('job')} className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase transition-all ${postType === 'job' ? 'bg-white text-black' : 'text-gray-500'}`}>Jobs</button>
               <button onClick={() => setPostType('blog')} className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase transition-all ${postType === 'blog' ? 'bg-white text-black' : 'text-gray-500'}`}>Blogs</button>
             </div>
             {postType === 'blog' && (
               <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-gray-900 text-white p-4 rounded-xl text-sm border border-gray-800 outline-none">
                 <option value="Services">Services</option>
                 <option value="General">General</option>
               </select>
             )}
          </div>
        )}
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-80 p-12">
        {activeTab === 'create' && (
          <div className="max-w-3xl bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 mx-auto">
            <h1 className="text-5xl font-black italic tracking-tighter text-gray-900 mb-10">
              {isEditing ? 'Update Content' : 'Add Content'}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
              <input required className="w-full p-5 bg-gray-50 rounded-2xl font-bold outline-none border focus:border-orange-500" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              
              {postType === 'blog' ? (
                <>
                  <textarea required rows="6" className="w-full p-5 bg-gray-50 rounded-2xl font-bold outline-none border focus:border-orange-500" placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                  
                  {/* Fixed: Image input now appears during Editing too */}
                  <div className="border-2 border-dashed border-gray-200 p-8 rounded-3xl text-center">
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-4">
                       {isEditing ? "Change Banner Image (Optional)" : "Upload Banner Image"}
                    </p>
                    <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="text-xs mx-auto" />
                    {isEditing && <p className="text-[9px] text-orange-500 mt-2">Leave empty to keep existing image</p>}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  <input className="w-full p-5 bg-gray-50 rounded-2xl font-bold border focus:border-orange-500 outline-none" placeholder="Location" value={formData.loc} onChange={e => setFormData({...formData, loc: e.target.value})} />
                  <input className="w-full p-5 bg-gray-50 rounded-2xl font-bold border focus:border-orange-500 outline-none" placeholder="Salary" value={formData.salary} onChange={e => setFormData({...formData, salary: e.target.value})} />
                </div>
              )}
              
              <button type="submit" className={`w-full py-6 rounded-[2rem] font-black text-xl transition-all uppercase ${isEditing ? 'bg-orange-600 text-white shadow-lg' : 'bg-black text-white hover:bg-orange-600'}`}>
                {isEditing ? 'Save Changes' : 'Publish Now'}
              </button>
              {isEditing && (
                <button type="button" onClick={() => {setIsEditing(false); setFormData({title:'', description:''});}} className="w-full text-gray-400 font-bold text-xs uppercase tracking-widest mt-4">Cancel Edit</button>
              )}
            </form>
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="max-w-4xl bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 mx-auto">
            <h1 className="text-4xl font-black italic text-gray-900 mb-10 tracking-tighter">Active Repository</h1>
            <div className="space-y-4">
              {items.length > 0 ? items.map(item => (
                <div key={item._id} className="flex items-center justify-between p-7 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <div>
                    <h3 className="font-black text-xl">{item.title || "Untitled"}</h3>
                    <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">{item.loc || item.category || "N/A"}</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleEdit(item)} className="bg-gray-200 text-black px-6 py-2 rounded-xl font-black text-[10px] hover:bg-black hover:text-white transition-all">EDIT</button>
                    <button onClick={() => handleDelete(item._id, 'item')} className="bg-red-50 text-red-500 px-6 py-2 rounded-xl font-black text-[10px] hover:bg-red-500 hover:text-white transition-all">DELETE</button>
                  </div>
                </div>
              )) : <p className="text-center py-10 text-gray-400 font-bold">No active data found.</p>}
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="max-w-5xl bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 mx-auto">
            <h1 className="text-5xl font-black italic tracking-tighter text-gray-900 mb-10">Contact Inquiries</h1>
            <div className="grid gap-6">
              {inquiries.length > 0 ? inquiries.map((iq) => (
                <div key={iq._id} className="p-8 bg-gray-100 rounded-[2.5rem] border border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">{iq.fullName || iq.name || "Unknown User"}</h3>
                      <p className="text-orange-600 font-bold text-sm tracking-tight">{iq.email}</p>
                    </div>
                    <span className="bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase border border-gray-300">
                      {iq.sector || iq.subject || 'General'}
                    </span>
                  </div>
                  <div className="bg-white/50 p-7 rounded-3xl border border-gray-100 mb-5">
                    <p className="text-gray-600 font-medium leading-relaxed italic">"{iq.message}"</p>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company: <span className="text-gray-900">{iq.company || 'N/A'}</span></p>
                    <button onClick={() => handleDelete(iq._id, 'inquiry')} className="text-red-500 font-black text-[10px] uppercase hover:underline">Delete Record</button>
                  </div>
                </div>
              )) : (
                <div className="text-center py-32">
                  <p className="text-gray-300 font-black text-3xl uppercase italic tracking-widest">Inquiry list is empty</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;