import React from 'react';

const leaderProfiles = [
  { 
    name: 'Mayank Doultani', 
    role: 'CEO & Co-Founder',
    desc: 'Driving the vision for Rhodeotech, Mayank combines deep IT consultancy with strategic manpower leadership. His focus is on pioneering industry-specific tech and sourcing.Driving the vision for Rhodeotech, Mayank combines deep IT consultancy with strategic manpower leadership. His focus is on pioneering industry-specific tech and sourcing.Driving the vision for Rhodeotech, Mayank combines deep IT consultancy with strategic manpower leadership. His focus is on pioneering industry-specific tech and sourcing.',
    iconPlaceholder: '👤' // image placeholder placeholder
  },
  { 
    name: 'Vikas Singh', 
    role: 'Technical Director',
    desc: 'Overseeing all software architecture and delivery, Vikas ensures that IT solutions integrate flawlessly with sector requirements. Expert in scalable systems.',
    iconPlaceholder: '⚙️' // image placeholder placeholder
  },
];

const about = () => {
  return (
    <section className="py-24 bg-white px-4 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-[#1C1C1C] mb-5 tracking-tighter">
          The Rhodeotech <span className="text-orange-600">Vanguard</span>
        </h2>
        <p className="text-center text-gray-600 max-w-lg mx-auto mb-20 text-lg leading-relaxed">
          Driven by expertise, our leadership anchors innovative delivery and client success across IT and manpower sectors.
        </p>

        <div className="space-y-16 max-w-5xl mx-auto">
          {leaderProfiles.map((leader, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center bg-gray-50 border border-gray-100 p-12 rounded-[2rem] gap-10 hover:shadow-xl transition-all">
              {/* Leader image placeholder - circular placeholder in center from image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-orange-100 rounded-full"></div>

              <div className="flex-shrink-0 bg-white border border-[#E9ECEF] h-40 w-40 rounded-full flex items-center justify-center text-6xl text-orange-500 shadow-inner overflow-hidden">
                {/* Circular image placeholder lines */}
                {leader.iconPlaceholder}
              </div>
              
              <div className="flex-grow">
                <h4 className="text-3xl font-extrabold text-[#1C1C1C] mb-2 tracking-tight">
                  {leader.name}
                </h4>
                <p className="text-orange-600 font-semibold mb-6 tracking-wide text-sm uppercase">
                  {leader.role}
                </p>
                <p className="text-[#424C5B] text-base leading-relaxed max-w-2xl">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default about;