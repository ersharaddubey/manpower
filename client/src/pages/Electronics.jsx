import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Electronics = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = '/api';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blog/Electronics`);
        setPosts(res.data);
        if (res.data.length > 0) {
          setSelectedPost(res.data[0]);
        }
      } catch (err) {
        console.error("Error fetching electronics posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/1200x600?text=Rhodeotech+Electronics+Update";
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${BASE_URL}${cleanPath}`;
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      {/* 1. HEADER SECTION */}
      <header className="pt-24 pb-12 px-6 md:px-16 border-b border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest">
            <span>Industries</span>
            <span>/</span>
            <span className="text-orange-600 font-bold">Electronics</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-950 leading-[0.9]">
            Sector <span className="text-orange-600 italic">Reports</span>
          </h1>
        </div>
      </header>

      {/* 2. MAIN LAYOUT (CONTENT + SIDEBAR) */}
      <main className="max-w-screen-2xl mx-auto px-6 md:px-16 py-12">
        <div className="flex flex-col xl:flex-row gap-16">
          
          {/* LEFT: CONTENT SIDE */}
          <div className="xl:w-2/3">
            {selectedPost ? (
              <article className="animate-fadeIn">
                <div className="rounded-[2.5rem] overflow-hidden bg-gray-100 mb-10 shadow-2xl">
                  <img 
                    src={getImageUrl(selectedPost.image)} 
                    alt={selectedPost.title}
                    className="w-full h-[500px] object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Image+Unavailable"; }}
                  />
                </div>
                
                <div className="mb-8">
                  <div className="text-orange-600 font-bold text-sm mb-4">
                    {new Date(selectedPost.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                    {selectedPost.title}
                  </h2>
                </div>

                <div className="text-gray-700 text-xl leading-relaxed space-y-6 font-medium text-justify">
                  {selectedPost.description.split('\n').map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
              </article>
            ) : (
              <div className="text-center py-32 text-gray-300">No content selected.</div>
            )}
          </div>

          {/* RIGHT: LIST SIDE */}
          <div className="xl:w-1/3">
            <div className="sticky top-10">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 border-b pb-4">
                Latest Archive
              </h3>
              
              <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                {posts.map((post) => {
                  const isActive = selectedPost?._id === post._id;
                  return (
                    <div 
                      key={post._id}
                      onClick={() => {
                        setSelectedPost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-l-4 ${
                        isActive 
                        ? 'border-orange-500 bg-orange-50 shadow-md translate-x-2' 
                        : 'border-transparent bg-white hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <h4 className={`text-lg font-bold leading-tight ${
                        isActive ? 'text-orange-600' : 'text-gray-800'
                      }`}>
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-2 uppercase font-black tracking-widest">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. CAREER BANNER (Added at the bottom) */}
      <section className="py-24 px-6 md:px-16 w-full bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]"></div>
            
            <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
                Start Your Career <br /> <span className="text-orange-500">With Rhodeotech Today</span>
              </h2>
              <p className="text-gray-400 text-xl mb-10 max-w-xl font-medium mx-auto md:mx-0">
                We are actively looking for certified electricians and grid engineers.
              </p>
              <Link to="/careers">
                <button className="bg-orange-600 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-orange-600 transition-all shadow-xl active:scale-95">
                  Apply Now
                </button>
              </Link>
            </div>
            
            <div className="hidden md:flex md:w-1/3 justify-end relative z-10">
              <div className="h-72 w-72 border-4 border-white/5 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-9xl opacity-20 filter grayscale">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Electronics;