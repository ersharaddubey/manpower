import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Base URL ko bahar rakhne se useEffect ki dependency warning nahi aati
const BASE_URL = '/api';

const Electrical = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ab ise UI mein show karenge

  // fetch function ko useCallback mein wrap kiya taaki dependency warning fix ho jaye
  const fetchElectricalPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Step 1: Small 'electrical' try karein
      let res = await axios.get(`${BASE_URL}/api/blog/electrical`);
      
      if (res.data && res.data.length > 0) {
        setPosts(res.data);
        setSelectedPost(res.data[0]);
      } else {
        // Step 2: Agar nahi mila toh Capital 'Electrical' try karein
        const resCapital = await axios.get(`${BASE_URL}/api/blog/Electrical`);
        setPosts(resCapital.data);
        if (resCapital.data.length > 0) setSelectedPost(resCapital.data[0]);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Grid connectivity issue. Please check your server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchElectricalPosts();
  }, [fetchElectricalPosts]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/1200x600?text=Rhodeotech+Electrical+Insight";
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${BASE_URL}${cleanPath}`;
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-bold tracking-widest animate-pulse uppercase text-xs">Connecting to Grid...</p>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      <header className="pt-24 pb-12 px-6 md:px-16 border-b border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-[0.3em]">
            <span>Rhodeotech Industries</span>
            <span className="text-orange-500">/</span>
            <span className="text-gray-900">Electrical Division</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-950 leading-[0.85]">
            Powering <br /><span className="text-orange-600 italic">Tomorrow</span>
          </h1>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16">
        {/* Error State Display (Handling 'error' is assigned a value but never used) */}
        {error && (
          <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-2xl">
            <p className="text-red-700 font-bold">{error}</p>
            <button onClick={fetchElectricalPosts} className="mt-2 text-sm underline font-black text-red-500 uppercase">Retry Connection</button>
          </div>
        )}

        <div className="flex flex-col xl:flex-row gap-16">
          <div className="xl:w-2/3">
            {selectedPost ? (
              <article className="animate-fadeIn transition-all duration-500">
                <div className="rounded-[3rem] overflow-hidden bg-gray-100 mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                  <img 
                    src={getImageUrl(selectedPost.image)} 
                    alt={selectedPost.title}
                    className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=No+Image+Found+on+Server"; }}
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                   <div className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                     Industrial Update
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
                <div className="text-6xl mb-6 opacity-20">🔌</div>
                <h3 className="text-2xl font-black text-gray-300 uppercase tracking-widest">No Posts Found</h3>
                <p className="text-gray-400 mt-2">Database mein 'electrical' category ke posts nahi mile.</p>
              </div>
            )}
          </div>

          <div className="xl:w-1/3">
            <div className="sticky top-12 space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Reports Archive</h3>
                <span className="h-2 w-2 bg-orange-500 rounded-full animate-ping"></span>
              </div>
              
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                {posts.map((post) => {
                  const isActive = selectedPost?._id === post._id;
                  return (
                    <div 
                      key={post._id}
                      onClick={() => {
                        setSelectedPost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`group p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border-2 ${
                        isActive 
                        ? 'border-orange-500 bg-orange-50 shadow-xl translate-x-3' 
                        : 'border-transparent bg-white hover:bg-gray-50'
                      }`}
                    >
                      <h4 className={`text-xl font-extrabold leading-tight tracking-tight ${
                        isActive ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'
                      }`}>
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-4">
                        <div className={`h-1 w-8 rounded-full ${isActive ? 'bg-orange-500' : 'bg-gray-200 group-hover:bg-orange-200'} transition-all duration-500`}></div>
                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
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
          <div className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden border border-white/5">
            <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
                Fuel the Grid <br /> <span className="text-orange-500">Join Rhodeotech.</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-xl font-medium mx-auto md:mx-0">
                We are actively looking for certified electricians and grid engineers to lead our next industrial project.
              </p>
              <Link to="/careers">
                <button className="bg-orange-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-orange-600 transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95 uppercase tracking-widest">
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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}} />
    </div>
  );
};

export default Electrical;