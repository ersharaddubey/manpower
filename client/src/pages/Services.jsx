import React from 'react';

const Services = () => {
  // Unsplash Direct Source URL for the photo ID: nFLmPAf9dVc
  const HERO_IMAGE = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <main className="w-full mx-auto px-6 md:px-20 py-16">
        
        <article className="w-full animate-fadeIn transition-all duration-700">
          
          {/* Banner Image - Full 100% Width */}
          <div className="w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-100 mb-16 shadow-2xl border border-gray-100">
            <img 
              src={HERO_IMAGE} 
              alt="Workfource Services"
              className="w-full h-[400px] md:h-[650px] object-cover"
            />
          </div>
          
          {/* Content Area */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-6 mb-10">
               <div className="px-5 py-2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full">
                 Our Specialized Expertise
               </div>
            </div>

            {/* Hardcoded Title */}
            <h2 className="text-4xl md:text-8xl font-black text-gray-950 mb-16 leading-[1] tracking-tighter text-center uppercase">
              Recruitment Excellence
            </h2>

            {/* Hardcoded Content - Full Width & Justified */}
            <div className="w-full text-gray-700 text-lg md:text-2xl leading-relaxed space-y-12 font-medium text-justify">
              
              <section>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Professional Recruitment Services</h3>
                <p>
                  At Workfource, we don't just fill vacancies; we build enduring partnerships. Our recruitment strategy is rooted in deep market research and precise talent mapping. From corporate giants to fast-growing startups, we provide the "Right Fit" candidates tailored specifically to your company culture and technical demands. We understand that a single wrong hire can cost a company significant time and capital, which is why our screening process is rigorous and multi-layered. While skills are essential, we believe that the right mindset and professional ethics are the true drivers of long-term success.
                </p>
              </section>

              <section>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Executive Search & Talent Acquisition</h3>
                <p>
                  Leadership roles require more than just a resume—they require a vision. Workfource’s specialized Executive Search team excels in identifying and engaging passive talent for top-tier leadership positions. Our network extends to the industry’s most accomplished professionals, ensuring you have access to elite leaders. We act as your dedicated confidante, helping you realize the true power of strategic options. As the saying goes, "Genius is splendid, but the right contacts are more valuable"—and we bring those invaluable contacts to your table. Our success is inextricably intertwined with the growth and stability of your leadership.
                </p>
              </section>

              <section>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Strategic Manpower Solutions</h3>
                <p>
                  Navigating today’s competitive talent bazaar can be overwhelming. Workfource provides end-to-end manpower solutions designed to support your business scalability. Whether you require high-volume bulk hiring or niche specialized roles, our team applies the Jeffersonian philosophy: the harder we work, the more "luck" and exceptional results we deliver for you. We move beyond the impersonal nature of standard online portals where many feel disillusioned. We establish a personal connection with every candidate and client, ensuring that excellence is not just a goal, but a standard that connects growth with excellence.
                </p>
              </section>

            </div>
          </div>
        </article>
      </main>

      {/* Global CSS for Justification and Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        p {
          text-justify: inter-word;
          hyphens: auto;
        }
      `}} />
    </div>
  );
};

export default Services;