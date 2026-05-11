import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-950 min-h-screen pt-32 pb-24 px-6 md:px-16 text-white antialiased">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
                Terms of <span className="text-orange-600 italic">Supply.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-bold uppercase tracking-[0.2em] max-w-2xl">
                Strategic B2B Workforce Solutions for Industrial & Infrastructure Projects
            </p>
            <div className="h-1 w-20 bg-orange-600 mt-8"></div>
        </div>
        
        {/* Intro Paragraph */}
        <p className="text-gray-400 text-lg mb-16 leading-relaxed border-l-2 border-white/10 pl-6 italic">
            These Terms & Conditions govern the supply, deployment, and management of workforce services provided by Workfource (“Service Provider”) to its clients (“Client”). By engaging our services, the Client acknowledges and agrees to the following terms governing workforce deployment, operational responsibilities, and project execution support.
        </p>

        <div className="space-y-20">
          
          {/* 1. Scope of Services */}
          <section className="group">
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-orange-600 font-black text-2xl tracking-tighter">01.</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Scope of Workforce Services</h2>
            </div>
            <div className="text-gray-400 pl-10 space-y-4 text-lg">
                <p>Workfource provides skilled, semi-skilled, and unskilled manpower solutions for industrial, infrastructure, engineering, fabrication, manufacturing, renewable energy, shutdown, maintenance, and large-scale project operations.</p>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        "Workforce mobilization and deployment",
                        "Project-based manpower support",
                        "Industrial and infrastructure solutions",
                        "Shutdown & turnaround services",
                        "Fabrication and engineering support",
                        "Long/Short-term deployment"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-gray-500">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                            {item}
                        </div>
                    ))}
                </div>
                <p className="text-sm italic mt-4 text-gray-500 border-t border-white/5 pt-4">
                    The category, quantity, skill level, and deployment duration shall be mutually finalized prior to project commencement.
                </p>
            </div>
          </section>

          {/* 2. Working Hours */}
          <section>
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-orange-600 font-black text-2xl tracking-tighter">02.</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Working Hours & Overtime Policy</h2>
            </div>
            <div className="text-gray-400 pl-10 space-y-4 text-lg">
                <ul className="list-none space-y-3">
                    <li className="flex gap-4"><span className="text-white">●</span> Standard working hours shall be 8 (eight) hours per day.</li>
                    <li className="flex gap-4"><span className="text-white">●</span> Any work performed beyond standard hours shall be considered overtime.</li>
                    <li className="flex gap-4"><span className="text-white">●</span> Overtime charges apply as per mutually agreed commercial rates.</li>
                    <li className="flex gap-4"><span className="text-white">●</span> Shift schedules and weekly offs managed per project requirements.</li>
                </ul>
            </div>
          </section>

          {/* 3. Accommodation */}
          <section className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10">
            <div className="flex items-baseline gap-4 mb-8">
                <span className="text-orange-600 font-black text-2xl tracking-tighter">03.</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Accommodation & Living</h2>
            </div>
            <div className="text-gray-400 space-y-6 text-lg">
                <p>The Client shall provide suitable and safe accommodation for deployed manpower throughout the project duration, ensuring compliance with health and safety standards.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="text-white text-xs font-black uppercase mb-2">Shelter</h4>
                        <p className="text-sm">Basic sleeping arrangements</p>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-black uppercase mb-2">Utilities</h4>
                        <p className="text-sm">Electricity & Water access</p>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-black uppercase mb-2">Hygiene</h4>
                        <p className="text-sm">Sanitation facilities</p>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-black uppercase mb-2">Space</h4>
                        <p className="text-sm">Adequate cooking area</p>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Utensils & Gas */}
          <section>
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-orange-600 font-black text-2xl tracking-tighter">04.</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Utensils & Cooking Gas</h2>
            </div>
            <div className="text-gray-400 pl-10 text-lg space-y-4">
                <p>The Client shall arrange <span className="text-white font-bold">Cooking Utensils (Bartan)</span> and <span className="text-white font-bold">Cooking Gas</span> for the deployed workforce.</p>
                <p className="text-sm text-gray-500">Where site food facilities are available, arrangements may be mutually discussed.</p>
            </div>
          </section>

          {/* 5. Travel & Deployment */}
          <section className="border-t border-white/10 pt-16">
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-orange-600 font-black text-2xl tracking-tighter">05.</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Travel & Mobilization</h2>
            </div>
            <div className="text-gray-400 pl-10 text-lg space-y-6">
                <p className="p-6 bg-orange-600/10 border-l-4 border-orange-600 text-orange-50">
                    The Client shall bear the one-way travel cost (train fare) for workforce deployment from the source location to the project site.
                </p>
                <p>Any emergency travel, remobilization, demobilization, or additional transportation during the project shall be mutually agreed upon.</p>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
            <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} Workfource Solutions • Strategic Excellence in Manpower
            </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
