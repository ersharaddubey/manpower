import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-950 min-h-screen pt-32 pb-24 px-6 md:px-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">Terms of <span className="text-orange-600 italic">Service.</span></h1>
        
        <div className="space-y-12 text-gray-400 leading-relaxed font-medium">
          <section className="border-l-4 border-orange-600 pl-8">
            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-4">1. Acceptance of Terms</h2>
            <p>By accessing sclerahunt Solutions, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our industrial recruitment platform.</p>
          </section>

          <section className="border-l-4 border-white/10 pl-8">
            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-4">2. Professional Conduct</h2>
            <p>Users must provide accurate and truthful information regarding their technical skills and company requirements. Fraudulent activity will result in immediate termination of access.</p>
          </section>

          <section className="border-l-4 border-white/10 pl-8">
            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-4">3. Liability</h2>
            <p>sclerahunt Solutions is a facilitator of manpower. While we verify technical standards, final hiring decisions and workplace safety remain the responsibility of the client and candidate.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;