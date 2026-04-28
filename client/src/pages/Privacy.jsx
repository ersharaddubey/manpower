import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">Privacy <span className="text-orange-600 italic">Policy.</span></h1>
        
        <div className="space-y-12 text-gray-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-4">1. Data Collection</h2>
            <p>At workfource Solutions, we collect personal information such as names, email addresses, and professional backgrounds solely for the purpose of technical recruitment and industrial manpower sourcing. This data is handled with the highest level of encryption.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-4">2. Use of Information</h2>
            <p>Your information is used to match candidates with global industrial opportunities. We do not sell or lease your personal data to third-party marketing agencies.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-4">3. Security Standards</h2>
            <p>We implement industry-standard security protocols to protect your data from unauthorized access or disclosure. Our servers are monitored 24/7 for potential vulnerabilities.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;