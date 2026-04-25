import React from 'react';

const Help = () => {
  const faqs = [
    { q: "How do I apply for technical roles?", a: "Navigate to the Careers section, select your sector, and upload your resume via the application portal." },
    { q: "What sectors do you cover?", a: "We specialize in Electronics, Electrical, Chemical, and General Industrial manpower solutions." },
    { q: "How long does it take to process an inquiry?", a: "Our technical team usually responds to industrial requests within 24-48 business hours." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black tracking-tighter text-gray-950">Help <span className="text-orange-600 italic">Center.</span></h1>
          <p className="text-gray-500 font-bold mt-4 uppercase tracking-[0.3em]">Support for Global Industrial Talent</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-black mb-8 tracking-tight">Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-black text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-950 p-12 rounded-[3rem] text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-4">Still need assistance?</h2>
              <p className="text-gray-400 mb-10">Our global support team is ready to help you with specific technical or corporate queries.</p>
            </div>
            <button className="bg-orange-600 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all">
              CONTACT SUPPORT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;