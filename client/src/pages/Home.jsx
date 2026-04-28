import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Verified Experts', value: '50k+' },
    { label: 'Global Sectors', value: '15+' },
    { label: 'Successful Deployments', value: '12k+' },
    { label: 'Industrial Partners', value: '250+' },
  ];

  const processSteps = [
    { title: 'Global Sourcing', desc: 'Identifying elite talent across international borders.' },
    { title: 'Technical Vetting', desc: 'Multi-layered skill assessment by industry experts.' },
    { title: 'Compliance Check', desc: 'Strict background and document verification.' },
    { title: 'Deployment', desc: 'Seamless onboarding and site mobilization.' },
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - RECRUITMENT FOCUSED */}
      <section className="relative w-full min-h-[95vh] flex items-center bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full h-full">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-10 md:p-24 flex flex-col justify-center relative z-20 bg-white">
            <div className="w-20 h-1.5 bg-orange-600 mb-8"></div>
            <h1 className="text-6xl md:text-[7.5rem] font-black text-gray-950 leading-[0.85] tracking-tighter mb-8">
              WE FIND <br /> THE <span className="text-orange-600 italic">UNFINDABLE.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-lg mb-10 leading-relaxed font-medium border-l-4 border-gray-100 pl-6">
              sclerahunt is the premier bridge between global industrial ambition and specialized manpower excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gray-950 text-white px-12 py-6 rounded-2xl font-black hover:bg-orange-600 transition-all text-lg shadow-2xl shadow-gray-300">
                Hire Manpower
              </Link>
              <button className="bg-white text-gray-950 border-2 border-gray-100 px-12 py-6 rounded-2xl font-black hover:bg-gray-50 transition-all text-lg">
                Our Story
              </button>
            </div>
          </div>

          {/* Right Image Area - High Resolution Industrial Image */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] bg-gray-200">
            {/* Gradient Overlay for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 lg:block hidden"></div>
            
            {/* Main Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale hover:grayscale-0"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
                backgroundPosition: 'center 30%' 
              }}
            >
              {/* Subtle Dark Overlay to pop the '98%' card */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-12 right-12 z-20 bg-white p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] hidden md:block border border-gray-100 animate-bounce-slow">
              <p className="text-6xl font-black text-gray-900 leading-none">98%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mt-3">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECRUITMENT PROCESS (Process Timeline) */}
      <section className="py-32 px-6 w-full bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tighter leading-none">
            Our <span className="text-orange-500 italic">Recruitment</span> Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-24 h-24 bg-white/5 backdrop-blur-xl text-orange-500 rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-gray-500 text-base font-medium leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[70%] w-full h-[2px] bg-gradient-to-r from-orange-600/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRECISION ENGINEERING SECTION */}
      <section className="relative py-44 px-6 md:px-16 bg-white overflow-hidden w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Workforce Excellence</span>
            </div>
            <h2 className="text-6xl md:text-[6rem] font-black text-gray-950 leading-[0.9] tracking-tighter mb-8">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 italic">Engineering.</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-xl mb-12 leading-relaxed font-medium">
              We don't just fill positions; we engineer teams. sclerahunt specializes in sourcing elite technical talent for high-stakes industrial ecosystems.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/careers" className="bg-gray-950 text-white px-10 py-5 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-xl">
                Source Talent
              </Link>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200"></div>
                ))}
                <div className="flex items-center justify-center pl-6 text-sm font-black text-gray-400 uppercase tracking-widest">
                  +12k Experts
                </div>
              </div>
            </div>
          </div>

          {/* Modern Floating Card */}
          <div className="lg:w-5/12 w-full relative">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-orange-50 rounded-[4rem] p-12 shadow-inner flex items-center justify-center border border-gray-100 relative">
              <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
                <p className="text-6xl font-black text-orange-600 leading-none">500+</p>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-3">Projects Delivered</p>
              </div>
              <div className="text-[12rem] opacity-5 grayscale select-none">⚙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTOR SELECTION (TALENT REDEFINED) */}
      <section className="w-full py-32 px-6 md:px-16 bg-white flex flex-col items-center border-t border-gray-50">
        <div className="w-full flex flex-col lg:flex-row gap-12 items-end mb-24">
          <div className="w-full lg:w-2/3">
            <h2 className="text-7xl md:text-[10rem] font-black text-gray-950 tracking-tighter leading-[0.8] uppercase">
              Talent <br /> <span className="text-orange-600">Redefined.</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3 pb-4">
            <p className="text-gray-500 text-xl border-l-8 border-orange-600 pl-8 leading-relaxed font-bold italic">
              Empowering the world's most complex industrial networks with high-fidelity human capital.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Electrical', 'Services', 'Chemical', 'Industries'].map((cat) => (
            <Link key={cat} to={`/${cat.toLowerCase()}`} className="group relative h-96 bg-gray-50 rounded-[3rem] p-10 flex flex-col justify-end border border-gray-100 hover:bg-gray-950 transition-all duration-500 overflow-hidden">
              <div className="absolute top-10 right-10 text-4xl opacity-10 group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-500">
                {cat === 'Electrical' ? '⚡' : cat === 'Services' ? '🛠️' : cat === 'Chemical' ? '⚗️' : '🏭'}
              </div>
              <h3 className="font-black uppercase tracking-tighter text-3xl text-gray-900 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 relative z-10">
                {cat} <br /> <span className="text-sm font-bold tracking-[0.2em] text-orange-600 group-hover:text-orange-400">View Experts</span>
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. STATS SECTION (DARK) */}
      <section className="py-28 bg-gray-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center relative z-10">
          {stats.map((s, i) => (
            <div key={i} className="group">
              <h3 className="text-6xl font-black text-orange-500 mb-4 group-hover:scale-110 transition-transform">{s.value}</h3>
              <div className="h-1 w-12 bg-white/10 mx-auto mb-4 group-hover:w-20 transition-all"></div>
              <p className="text-gray-400 uppercase text-xs font-black tracking-[0.3em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GLOBAL TALENT ENGINEERED (INFO GRID) */}
      <section className="w-full py-44 bg-white px-6 md:px-16 border-b border-gray-50">
        <div className="grid lg:grid-cols-2 gap-32 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-6xl font-black text-gray-950 mb-10 tracking-tighter leading-[0.9]">
              Global Talent <br /> <span className="bg-orange-600 text-white px-6 py-2 inline-block -rotate-2 mt-4">Engineered.</span>
            </h2>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed font-medium">
              We specialize in sourcing highly skilled manpower for complex industrial ecosystems, ensuring your projects are powered by professionals who understand the nuances of global operations.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-t-2 border-gray-50">
              <div>
                <p className="text-5xl font-black text-gray-950">10+</p>
                <p className="text-xs font-black text-orange-600 uppercase tracking-widest mt-2">Years of Excellence</p>
              </div>
              <div>
                <p className="text-5xl font-black text-gray-950">200+</p>
                <p className="text-xs font-black text-orange-600 uppercase tracking-widest mt-2">Industrial Partners</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-[4rem] p-16 border border-gray-100 shadow-2xl relative">
            <div className="absolute -top-10 -left-10 bg-orange-600 text-white p-8 rounded-full font-black text-xl shadow-xl">✓</div>
            <div className="space-y-6">
              {['Elite Services', 'Grid Electrical', 'Petro-Chemical', 'Infrastructure'].map((item) => (
                <div key={item} className="flex justify-between items-center p-6 bg-white rounded-3xl shadow-sm border border-transparent hover:border-orange-500 transition-all group cursor-pointer">
                  <span className="font-black text-gray-800 uppercase tracking-widest text-sm">{item} Specialists</span>
                  <span className="text-orange-600 group-hover:translate-x-3 transition-transform font-black">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOM SOLUTIONS FORM (DARK) */}
      <section className="py-32 bg-gray-950 text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-6xl font-black mb-8 tracking-tighter leading-none">Your Industrial <br /><span className="text-orange-500 italic">Solution Partner</span></h2>
            <p className="text-gray-400 text-xl mb-12 font-medium leading-relaxed">Schedule a call with our experts to discuss your specific manpower needs and find the right talent today.</p>
            <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 max-w-sm">
               <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-orange-600/20">📞</div>
               <div>
                 <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Direct Line</p>
                 <p className="text-2xl font-black text-orange-500">+91 98765 43210</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-12 rounded-[3.5rem] w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-gray-100">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-6 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Work Email</label>
                <input type="email" placeholder="john@company.com" className="w-full p-6 bg-gray-50 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Target Industry</label>
                <select className="w-full p-6 bg-gray-500 rounded-2xl border-none focus:ring-4 focus:ring-orange-100 transition-all font-bold appearance-none">
                  <option>Renewable Energy</option>
                  <option>Medical Electronics</option>
                  <option>Heavy Manufacturing</option>
                  <option>Petrochemicals</option>
                </select>
              </div>
              <button className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-gray-900 transition-all shadow-2xl shadow-orange-200 uppercase tracking-widest">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-[4rem] p-20 text-center text-white shadow-2xl shadow-orange-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none relative z-10">READY TO PROVIDE <br />GLOBAL TALENT?  <br />FOR INDUSTRY</h2>
          <p className="text-2xl text-orange-100 mb-12 max-w-3xl mx-auto font-medium relative z-10 leading-relaxed">Join the league of global leaders who rely on sclerahunt for their most critical workforce challenges.</p>
          <Link to="/contact" className="bg-white text-orange-700 px-16 py-7 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-block relative z-10 uppercase tracking-tighter">
            Get Started Today
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Home;