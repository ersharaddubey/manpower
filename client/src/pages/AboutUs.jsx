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
      alt="Workfource Industrial Collaboration"
      className="w-full h-[400px] md:h-[650px] object-cover"
    />
  </div>
  
  {/* Content Area */}
  <div className="w-full">
    <div className="flex items-center justify-center gap-6 mb-10">
       <div className="px-5 py-2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full">
         🌐 About Workfource
       </div>
    </div>

    <h2 className="text-4xl md:text-8xl font-black text-gray-950 mb-16 leading-[1] tracking-tighter text-center uppercase">
      Our Journey & <br className="hidden md:block" /> Workforce Excellence
    </h2>

    {/* Main Text Content */}
    <div className="w-full text-gray-700 text-lg md:text-2xl leading-relaxed space-y-20 font-medium text-justify">
      
      <section>
        <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">Our Journey</h3>
        <p>
          At <strong>Workfource</strong>, we are committed to delivering reliable, scalable, and execution-ready B2B workforce solutions for industrial and infrastructure businesses. Backed by a team of experienced professionals and operational specialists, we support organizations with disciplined manpower deployment tailored to modern project demands. We believe workforce is not just a resource — it is the driving force behind successful project execution.
        </p>
      </section>

      {/* Vision & Mission Grid */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <section>
          <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">🎯 Our Vision</h3>
          <p>
            To become a globally trusted B2B workforce solutions provider recognized for operational excellence and industry-focused services. We envision a future where businesses across industrial, infrastructure, and energy sectors seamlessly access skilled talent that accelerates productivity and strengthens execution.
          </p>
        </section>

        <section>
          <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">🚀 Our Mission</h3>
          <p>
            To bridge the gap between industrial ambition and skilled workforce execution. We are committed to delivering disciplined solutions, maintaining high safety standards, and building long-term partnerships through trust, transparency, and consistent performance.
          </p>
        </section>
      </div>

      <hr className="border-gray-200" />

      {/* Industries Section */}
      <section>
        <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-10 uppercase tracking-tight italic">⚙️ Industries We Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {[
            "Industrial Construction", "Infrastructure Projects", 
            "Engineering & Fabrication", "Shutdown & Maintenance", 
            "Renewable Energy Projects", "Manufacturing & Plant Operations",
            "EPC & Large-Scale Execution"
          ].map((industry) => (
            <div key={industry} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="font-bold uppercase text-sm md:text-lg">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-950 text-white p-8 md:p-16 rounded-[2rem] md:rounded-[4rem]">
        <h3 className="text-2xl md:text-5xl font-black mb-12 uppercase tracking-tight italic text-center">🤝 Why Businesses Choose Workfource</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm">✔️ Skilled & Reliable</h4>
            <p className="text-gray-300 text-lg">Project-ready manpower tailored specifically to your unique operational requirements.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm">✔️ Scalable Deployment</h4>
            <p className="text-gray-300 text-lg">Flexible workforce solutions for both high-impact short-term and long-term projects.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm">✔️ Industry-Focused</h4>
            <p className="text-gray-300 text-lg">Deep understanding of industrial environments, compliance, and execution challenges.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm">✔️ Commitment to Excellence</h4>
            <p className="text-gray-300 text-lg">Driven by professionalism, operational discipline, and total client satisfaction.</p>
          </div>
        </div>
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
