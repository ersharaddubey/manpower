import React from 'react';

const AboutUs = () => {
  // The specific Unsplash image you requested (ID: 5fNmWej4tAA)
  const HERO_IMAGE = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <main className="w-full mx-auto px-6 md:px-20 py-16">
        
        <article className="w-full animate-fadeIn transition-all duration-700">
          
          {/* Banner Image - Full 100% Container Width */}
          <div className="w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-100 mb-16 shadow-2xl border border-gray-100">
            <img 
              src={HERO_IMAGE} 
              alt="We Work Collaboration"
              className="w-full h-[400px] md:h-[650px] object-cover"
            />
          </div>
          
          {/* Content Area - Same Design as Services */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-6 mb-10">
               <div className="px-5 py-2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full">
                 About We Work
               </div>
            </div>

            <h2 className="text-4xl md:text-8xl font-black text-gray-950 mb-16 leading-[1] tracking-tighter text-center uppercase">
              Our Journey & Excellence
            </h2>

            {/* Text 100% width and Justified */}
            <div className="w-full text-gray-700 text-lg md:text-2xl leading-relaxed space-y-12 font-medium text-justify">
              
              <section>
                <p>
                  We are a team of dedicated and diverse personalities solely focused on achieving excellence by delivering supreme HR solutions to our partners. At <strong>We Work</strong>, we believe in ourselves to bring out the best in our clients by always giving them our best. Our clients' trust is our most prized asset, with the power to propel us to greater heights. We believe that <strong>We Work</strong> is the perfect riposte when it comes to the staffing needs of the modern workforce.
                </p>
              </section>

              <section>
                <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">Our Vision</h3>
                <p>
                  To be one of the world's leading professional recruitment and talent management solutions providers by adopting the most stringent and confidential procedures to select the perfect candidates for you. Our goal is to participate in your success by empowering you with people whom you can trust to be your agents for delivery and change. We envision a corporate world where the right talent is seamlessly integrated into the right culture.
                </p>
              </section>

              <section>
                <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">Our Mission</h3>
                <p>
                  We believe that only highly motivated, capable, and determined people can consistently deliver success. Finding and identifying such people amongst the ocean of available talent is an enduring challenge and not everyone is up to it. This is exactly what we aim to step up to! Our mission is to bridge the gap between human potential and corporate achievement, ensuring that every placement we make contributes to a legacy of success.
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
          word-spacing: -1px;
        }
        strong {
          color: #000;
          font-weight: 900;
        }
      `}} />
    </div>
  );
};

export default AboutUs;