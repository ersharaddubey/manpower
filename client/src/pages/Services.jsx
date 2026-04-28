import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

const Services = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServicesPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    let foundData = [];
    const categories = ['services', 'Services'];

    try {
      for (let cat of categories) {
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
        setError("Services records not found.");
      }
    } catch (err) {
      setError("Connectivity issue with the database.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServicesPosts();
  }, [fetchServicesPosts]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/1200x600?text=Workfource+Services";
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
      
      {/* Hero Section / Error State */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {error && (
          <div className="mb-10 p-8 bg-orange-50 border-l-4 border-orange-500 rounded-3xl flex justify-between items-center">
            <p className="text-orange-700 font-medium">{error}</p>
            <button onClick={fetchServicesPosts} className="px-6 py-2 bg-orange-600 text-white font-black text-[10px] uppercase rounded-full">Retry</button>
          </div>
        )}

        {selectedPost ? (
          <div className="flex flex-col items-center">
            {/* 100% Width Article Container */}
            <article className="w-full max-w-5xl animate-fadeIn transition-all duration-700">
              
              {/* Main Image - Full Width */}
              <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-gray-100 mb-12 shadow-2xl group border border-gray-100">
                <img 
                  src={getImageUrl(selectedPost.image)} 
                  alt={selectedPost.title}
                  className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-[3s]"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Workfource+Update"; }}
                />
              </div>
              
              {/* Content Box */}
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-6 mb-8">
                   <div className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                     Our Expertise
                   </div>
                   <div className="text-gray-400 font-bold text-sm">
                     Updated: {new Date(selectedPost.createdAt).toLocaleDateString('en-GB')}
                   </div>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-gray-950 mb-10 leading-tight tracking-tighter">
                  {selectedPost.title}
                </h2>

                <div className="text-gray-700 text-lg md:text-2xl leading-relaxed space-y-8 font-medium text-justify">
                  {selectedPost.description.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </article>

            {/* Other Services Selection - Horizontal Grid */}
            <div className="w-full mt-32 border-t border-gray-100 pt-16">
              <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-12">Explore More Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div 
                    key={post._id}
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border-2 text-center ${
                      selectedPost?._id === post._id 
                      ? 'border-orange-500 bg-orange-50 shadow-lg' 
                      : 'border-transparent bg-white hover:border-gray-200 shadow-sm'
                    }`}
                  >
                    <h4 className="text-lg font-extrabold text-gray-900 mb-2">{post.title}</h4>
                    <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">View Module</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-40 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-black text-gray-300 uppercase tracking-widest">No Services Available</h3>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      `}} />
    </div>
  );
};

export default Services;