import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// BASE_URL Strategy: Vercel par empty (relative) aur local par port 5000
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001';

const Services = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServicesPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    let foundData = [];

    // Dono variations check karenge
    const categories = ['services', 'Services'];

    try {
      for (let cat of categories) {
        // Correct Path: /api/blog/category (Vercel rewrite handle karega)
        const res = await axios.get(`${BASE_URL}/api/blog/${cat}`);
        
        if (res.data && res.data.length > 0) {
          foundData = res.data;
          break; 
        }
      }

      if (foundData.length > 0) {
        setPosts(foundData);
        setSelectedPost(foundData[0]);
      } else {
        setError("Services database records not found. Verify category in Admin.");
      }
    } catch (err) {
      console.error("Fetch Error:", err.message);
      setError("Connectivity issue with the services database.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServicesPosts();
  }, [fetchServicesPosts]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/1200x600?text=sclerahunt+Services+Update";
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${BASE_URL}${cleanPath}`;
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-black tracking-widest animate-pulse uppercase text-[10px]">Loading Services...</p>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <header className="pt-24 pb-12 px-6 md:px-16 border-b border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-black uppercase tracking-[0.3em]">
            <span>Industries</span>
            <span className="text-orange-500">/</span>
            <span className="text-gray-950">Services Division</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-950 leading-[0.85]">
            Sector <br /><span className="text-orange-600 italic">Reports</span>
          </h1>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16">
        {error && (
          <div className="mb-10 p-8 bg-orange-50 border-l-4 border-orange-500 rounded-3xl flex justify-between items-center">
            <div>
              <p className="text-orange-900 font-black uppercase text-xs tracking-widest mb-1">Status Alert</p>
              <p className="text-orange-700 font-medium">{error}</p>
            </div>
            <button onClick={fetchServicesPosts} className="px-6 py-2 bg-orange-600 text-white font-black text-[10px] uppercase rounded-full">Re-Scan</button>
          </div>
        )}

        <div className="flex flex-col xl:flex-row gap-16">
          <div className="xl:w-2/3">
            {selectedPost ? (
              <article className="animate-fadeIn transition-all duration-700">
                <div className="rounded-[3rem] overflow-hidden bg-gray-100 mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group border border-gray-100">
                  <img 
                    src={getImageUrl(selectedPost.image)} 
                    alt={selectedPost.title}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[3s]"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Module+Data+Missing"; }}
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                   <div className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                     Technical Insight
                   </div>
                   <div className="text-gray-400 font-bold text-sm">
                     {new Date(selectedPost.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                   </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-gray-950 mb-10 leading-[1.1] tracking-tighter">
                  {selectedPost.title}
                </h2>

                <div className="text-gray-700 text-xl leading-relaxed space-y-8 font-medium text-justify">
                  {selectedPost.description.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ) : (
              <div className="py-40 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                <div className="text-6xl mb-6 grayscale opacity-20">📟</div>
                <h3 className="text-2xl font-black text-gray-300 uppercase tracking-widest">Archive Empty</h3>
                <p className="text-gray-400 mt-2 max-w-xs mx-auto">Please ensure the category is set to 'services' in the admin dashboard.</p>
              </div>
            )}
          </div>

          <div className="xl:w-1/3">
            <div className="sticky top-12 space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Latest Feed</h3>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{posts.length} Units</span>
              </div>
              
              <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
                {posts.map((post) => {
                  const isActive = selectedPost?._id === post._id;
                  return (
                    <div 
                      key={post._id}
                      onClick={() => {
                        setSelectedPost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`group p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border-2 ${
                        isActive 
                        ? 'border-orange-500 bg-orange-50/50 shadow-xl translate-x-3' 
                        : 'border-transparent bg-white hover:bg-gray-50'
                      }`}
                    >
                      <h4 className={`text-xl font-extrabold leading-tight tracking-tight ${
                        isActive ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                      }`}>
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-4 uppercase font-black tracking-widest">
                        ID: {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-24 px-6 md:px-16 w-full bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full bg-gradient-to-br from-gray-950 to-black rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden border border-white/5">
            <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
                Innovate <br /> <span className="text-orange-500">With Us.</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-xl font-medium mx-auto md:mx-0">
                Join our hardware labs and contribute to groundbreaking electronics projects across the globe.
              </p>
              <Link to="/careers">
                <button className="bg-orange-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-orange-600 transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-widest">
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="hidden md:flex md:w-1/3 justify-end relative z-10">
              <div className="h-80 w-80 border-[12px] border-white/5 rounded-full flex items-center justify-center relative">
                <span className="text-[10rem] opacity-10 filter grayscale select-none">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
      `}} />
    </div>
  );
};

export default Services;