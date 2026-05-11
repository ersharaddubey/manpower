import React from 'react';

const TermsAndConditions = () => {
  // Updated Hero Image for a more professional/industrial feel
  const HERO_IMAGE = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="bg-[#fcfcfd] min-h-screen antialiased text-slate-900">
      
      <main className="w-full mx-auto px-6 md:px-20 py-16">
        
        <article className="w-full animate-fadeIn transition-all duration-700">
          
          {/* Banner Image */}
          <div className="w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-100 mb-16 shadow-2xl border border-gray-100">
            <img 
              src={HERO_IMAGE} 
              alt="Workfource Industrial Site"
              className="w-full h-[300px] md:h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Header Section */}
          <div className="w-full mb-20">
            <div className="flex items-center justify-center gap-6 mb-10">
               <div className="px-5 py-2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full">
                 Legal Framework
               </div>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 leading-[1] tracking-tighter text-center uppercase">
              Terms & Conditions
            </h2>
            <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-sm md:text-lg">
              Workforce Supply Services for Industrial & Infrastructure Projects
            </p>
          </div>

          {/* Terms Content */}
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction Box */}
            <div className="bg-gray-950 text-white p-8 md:p-12 rounded-[2rem] mb-16">
                <p className="text-lg md:text-xl leading-relaxed font-light italic">
                    "These Terms & Conditions govern the supply, deployment, and management of workforce services provided by <strong>Workfource</strong> (“Service Provider”) to its clients (“Client”). By engaging our services, the Client acknowledges and agrees to the following terms governing workforce deployment, operational responsibilities, and project execution support."
                </p>
            </div>

            {/* Structured Terms Grid */}
            <div className="grid grid-cols-1 gap-16 text-gray-700">
              
              {/* 01. Scope */}
              <section className="border-t border-gray-200 pt-10">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <span className="text-orange-600 font-black text-5xl opacity-30">01</span>
                        <h3 className="text-2xl font-black uppercase mt-2">Scope of Services</h3>
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed space-y-4">
                        <p>Workfource provides skilled, semi-skilled, and unskilled manpower solutions across industrial construction, engineering, renewable energy, and maintenance operations.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-bold uppercase text-gray-500">
                            <li>• Workforce mobilization</li>
                            <li>• Project-based support</li>
                            <li>• Shutdown & Turnaround</li>
                            <li>• Fabrication support</li>
                        </ul>
                    </div>
                </div>
              </section>

              {/* 02 & 03. Operations & Facilities */}
              <section className="border-t border-gray-200 pt-10">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <span className="text-orange-600 font-black text-5xl opacity-30">02-04</span>
                        <h3 className="text-2xl font-black uppercase mt-2">Operational Standards</h3>
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed space-y-6">
                        <div>
                            <h4 className="font-black text-gray-950 uppercase mb-2 text-sm tracking-widest">Working Hours</h4>
                            <p>Standard hours are 8 per day. Overtime applies as per agreed commercial rates.</p>
                        </div>
                        <div>
                            <h4 className="font-black text-gray-950 uppercase mb-2 text-sm tracking-widest">Accommodation & Facilities</h4>
                            <p>Client shall provide safe accommodation including electricity, water, sanitation, and cooking space. Client is also responsible for cooking utensils (bartan) and gas.</p>
                        </div>
                    </div>
                </div>
              </section>

              {/* 05-08. Commercials */}
              <section className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
                <h3 className="text-3xl font-black uppercase mb-8">Commercial & Payment Terms</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h4 className="text-orange-600 font-black uppercase text-xs tracking-[0.2em]">Travel & Mobilization</h4>
                        <p className="text-base">Client bears one-way train fare for deployment. Local site transportation is discussed per project.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-orange-600 font-black uppercase text-xs tracking-[0.2em]">Advance & Billing</h4>
                        <p className="text-base">A 15-day advance is mandatory upon deployment. Billing is bi-weekly/monthly. Delays may result in service suspension.</p>
                    </div>
                </div>
              </section>

              {/* 09-12. Responsibilities & Compliance */}
              <section className="border-t border-gray-200 pt-10">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center text-xs rounded-full">09</span>
                            Client Responsibility
                        </h3>
                        <p className="text-base leading-relaxed text-gray-600">Ensure a safe work environment, provide necessary PPE, and handle site access permissions. Hazards must be mitigated prior to workforce entry.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center text-xs rounded-full">10</span>
                            Workforce Conduct
                        </h3>
                        <p className="text-base leading-relaxed text-gray-600">Personnel must follow site safety protocols and professional conduct. Replacement for absenteeism is managed by Workfource within practical timelines.</p>
                    </div>
                </div>
              </section>

              {/* 13-18. Legalities */}
              <section className="space-y-8 bg-white shadow-sm p-8 md:p-12 rounded-[2rem] border border-gray-100">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-black uppercase text-sm mb-3">Liability & Indemnity</h4>
                        <p className="text-xs leading-relaxed text-gray-500">Workfource is not liable for indirect losses or production delays. Client indemnifies Workfource against unsafe site conditions.</p>
                    </div>
                    <div>
                        <h4 className="font-black uppercase text-sm mb-3">Force Majeure</h4>
                        <p className="text-xs leading-relaxed text-gray-500">Obligations are suspended during natural disasters, government restrictions, or pandemics without liability.</p>
                    </div>
                    <div>
                        <h4 className="font-black uppercase text-sm mb-3">Termination</h4>
                        <p className="text-xs leading-relaxed text-gray-500">Requires 7-15 days written notice. Immediate suspension applies for non-payment or safety violations.</p>
                    </div>
                </div>
              </section>

              {/* Footer Stamp */}
              <section className="text-center py-20 border-t border-gray-200">
                 <h3 className="text-2xl font-black uppercase mb-4">Governing Law</h3>
                 <p className="text-gray-500 max-w-2xl mx-auto italic mb-10">
                    These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in your registered city/state.
                 </p>
                 <div className="inline-block px-10 py-4 border-2 border-gray-900 rounded-full font-black uppercase tracking-widest text-sm">
                    🤝 Commitment to Excellence
                 </div>
              </section>

            </div>
          </div>
        </article>
      </main>

      {/* Styles */}
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

export default TermsAndConditions;
