import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// 1. PORTS ko component ke bahar rakha hai taaki dependency warning na aaye
const PORTS = ['/api', 'http://localhost:5000'];

const Industries = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ab ise UI mein render karenge

  // 2. Fetch logic ko useCallback mein wrap kiya hai
  const fetchIndustryPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    let foundData = [];

    for (let baseUrl of PORTS) {
      try {
        // Try lowercase 'industries'
        let res = await axios.get(`${baseUrl}/api/blog/industries`);
        
        // Fallback to Capital 'Industries' if empty
        if (!res.data || res.data.length === 0) {
          res = await axios.get(`${baseUrl}/api/blog/Industries`);
        }

        if (res.data && res.data.length > 0) {
          foundData = res.data;
          // activeBaseUrl ki jagah directly window property set ki warning hatane ke liye
          window.WORKING_BASE_URL = baseUrl; 
          break; 
        }
      } catch (err) {
        console.error(`Attempt failed for ${baseUrl}`);
      }
    }

    if (foundData.length > 0) {
      setPosts(foundData);
      setSelectedPost(foundData[0]);
    } else {
      setError("Industry database connection failed. Please check your server.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchIndustryPosts();
  }, [fetchIndustryPosts]);

  const getImageUrl = (imagePath) => {
    const base = window.WORKING_BASE_URL || '/api';
    if (!imagePath) return "https://via.placeholder.com/1200x600?text=Rhodeotech+Industries+Insights";
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${base}${cleanPath}`;
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-bold tracking-widest uppercase text-[10px]">Accessing Industry Database...</p>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <header className="pt-24 pb-12 px-6 md:px-16 border-b border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-[0.3em]">
            <span>Global Operations</span>
            <span className="text-orange-500">/</span>
            <span className="text-gray-900 font-black">Industries</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-950 leading-[0.85]">
            Sector <span className="text-orange-600 italic">Spotlight</span>
          </h1>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16">
        
        {/* 3. Error UI added to resolve 'error is assigned a value but never used' */}
        {error && (
          <div className="mb-10 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-2xl flex justify-between items-center">
            <p className="text-orange-800 font-medium">{error}</p>
            <button onClick={fetchIndustryPosts} className="text-xs font-black uppercase text-orange-600 hover:underline">Retry</button>
          </div>
        )}

        <div className="flex flex-col xl:flex-row gap-16">
          <div className="xl:w-2/3">
            {selectedPost ? (
              <article className="animate-fadeIn">
                <div className="rounded-[3rem] overflow-hidden bg-gray-100 mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                  <img 
                    src={getImageUrl(selectedPost.image)} 
                    alt={selectedPost.title}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[3s]"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Industry+Image+Unavailable"; }}
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                   <div className="px-4 py-1.5 bg-gray-950 text-white text-[10px] font-black uppercase tracking-widest rounded-md">
                     Market Intelligence
                   </div>
                   <div className="text-gray-400 font-bold text-sm italic">
                     Update: {new Date(selectedPost.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                   </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 leading-[1.1] tracking-tighter">
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
                <div className="text-6xl mb-6 opacity-20 grayscale">🏢</div>
                <h3 className="text-2xl font-black text-gray-300 uppercase tracking-widest">Data Not Found</h3>
              </div>
            )}
          </div>

          <div className="xl:w-1/3">
            <div className="sticky top-12 space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Industry Archive</h3>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{posts.length} Reports</span>
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
                      className={`group p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border-2 ${
                        isActive 
                        ? 'border-orange-500 bg-orange-50 shadow-xl translate-x-3' 
                        : 'border-transparent bg-white hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <h4 className={`text-xl font-extrabold leading-tight tracking-tight ${
                        isActive ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'
                      }`}>
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-4 uppercase font-black tracking-widest">
                        Ref No: {post._id.slice(-6).toUpperCase()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER BANNER */}
      <section className="py-24 px-6 md:px-16 w-full bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full bg-gradient-to-br from-[#111] to-gray-900 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
            <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
                Fuel Your <br /> <span className="text-orange-500 italic">Success.</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-xl font-medium mx-auto md:mx-0 leading-relaxed">
                Rhodeotech provides the world-class professionals your project demands.
              </p>
              <Link to="/careers">
                <button className="bg-orange-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-gray-950 transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95 uppercase tracking-widest">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.7s ease-out forwards; }
      `}} />
    </div>
  );
};

export default Industries;