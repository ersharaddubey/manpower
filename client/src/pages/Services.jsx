import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001';

const Services = () => {
  // Removed 'posts' to fix the ESLint build error
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServicesPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    const categories = ['services', 'Services'];

    try {
      let found = false;
      for (let cat of categories) {
        const res = await axios.get(`${BASE_URL}/api/blog/${cat}`);
        if (res.data && res.data.length > 0) {
          setSelectedPost(res.data[0]); // Set the first available service
          found = true;
          break; 
        }
      }
      if (!found) {
        setError("Services database records not found.");
      }
    } catch (err) {
      setError("Connectivity issue with the services database.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServicesPosts();
  }, [fetchServicesPosts]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/1600x800?text=Workfource+Services";
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${BASE_URL}${cleanPath}`;
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-black tracking-widest animate-pulse uppercase text-[10px]">Loading Experience...</p>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <main className="w-full mx-auto px-6 md:px-20 py-16">
        {error && (
          <div className="max-w-4xl mx-auto mb-10 p-8 bg-orange-50 border-l-4 border-orange-500 rounded-2xl flex justify-between items-center">
            <p className="text-orange-700 font-medium">{error}</p>
            <button onClick={fetchServicesPosts} className="px-6 py-2 bg-orange-600 text-white font-black text-[10px] uppercase rounded-full">Refresh</button>
          </div>
        )}

        {selectedPost ? (
          <article className="w-full animate-fadeIn transition-all duration-700">
            
            {/* Banner Image - Full 100% Container Width */}
            <div className="w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-100 mb-16 shadow-2xl border border-gray-100">
              <img 
                src={getImageUrl(selectedPost.image)} 
                alt={selectedPost.title}
                className="w-full h-[400px] md:h-[650px] object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/1600x800?text=Service+Image+Coming+Soon"; }}
              />
            </div>
            
            {/* Content Area - 100% Width with Text Justify */}
            <div className="w-full">
              <h2 className="text-4xl md:text-8xl font-black text-gray-950 mb-16 leading-[1] tracking-tighter text-center">
                {selectedPost.title}
              </h2>
              {/* Text 100% width aur Justified */}
              <div className="w-full text-gray-700 text-lg md:text-2xl leading-relaxed space-y-10 font-medium text-justify">
                {selectedPost.description.split('\n').map((para, i) => (
                  <p key={i} className="w-full">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ) : (
          <div className="py-40 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-black text-gray-300 uppercase tracking-widest">No Content Found</h3>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        p {
          text-justify: inter-word;
          word-spacing: -1px;
        }
      `}} />
    </div>
  );
};

export default Services;