import React from 'react';

const Terms = () => {
  const sections = [
    {
      id: "01",
      title: "Scope of Workforce Services",
      content: "Workfource provides skilled, semi-skilled, and unskilled manpower solutions for industrial, infrastructure, engineering, fabrication, manufacturing, renewable energy, shutdown, maintenance, and large-scale project operations.",
      list: ["Workforce mobilization & deployment", "Project-based manpower support", "Industrial & infrastructure solutions", "Shutdown & turnaround services", "Fabrication & engineering support", "Long & short-term deployment"],
      footer: "The category, quantity, skill level, and deployment duration shall be mutually finalized prior to project commencement."
    },
    {
      id: "02",
      title: "Working Hours & Overtime",
      list: ["Standard hours: 8 hours per day", "Work beyond standard hours is considered overtime", "Overtime charges apply as per agreed commercial rates", "Shift schedules & weekly offs managed per project requirements"]
    },
    {
      id: "03",
      title: "Accommodation & Facilities",
      content: "The Client shall provide suitable and safe accommodation. The environment must comply with basic health, safety, and welfare standards.",
      list: ["Basic shelter & sleeping arrangements", "Access to electricity and water", "Sanitation and hygiene facilities", "Adequate space for cooking"]
    },
    {
      id: "04",
      title: "Utensils & Cooking Gas",
      content: "The Client shall arrange cooking utensils (bartan), cooking gas, and related arrangements. Site-provided food facilities may be mutually discussed."
    },
    {
      id: "05",
      title: "Travel & Mobilization",
      list: ["Client bears one-way travel cost (train fare) from source to site", "Emergency/additional travel costs to be mutually agreed", "Local site transportation discussed separately based on conditions"]
    },
    {
      id: "06",
      title: "Commercial Terms",
      content: "Charges vary based on location, skill category, nature of activity, and site conditions. Final rates must be agreed upon in writing prior to deployment."
    },
    {
      id: "07",
      title: "Advance Payment Terms",
      list: ["Advance payment equivalent to 15 days of charges required upon deployment", "Timely payments are mandatory for operational continuity", "Workfource reserves the right to suspend services for pending payments"]
    },
    {
      id: "08",
      title: "Billing & Payment Terms",
      content: "Billing is conducted bi-weekly or monthly. Delays may result in:",
      list: ["Suspension of workforce deployment", "Delay in replacement mobilization", "Temporary withdrawal of manpower support", "Termination of services for repeated delays"]
    }
  ];

  const legalClauses = [
    { id: "09", title: "Client Responsibilities", text: "Provide safe work environment, ensure site readiness, arrange PPE, and comply with labor/safety regulations. Personnel must not be assigned hazardous tasks beyond scope." },
    { id: "10", title: "Workforce Conduct", text: "Deployed staff must follow safety protocols, maintain professional conduct, and adhere to site reporting structures." },
    { id: "11", title: "Replacement Policy", text: "Reasonable efforts will be made to provide replacements for absenteeism or mismatch within practical timelines." },
    { id: "12", title: "Health & Safety", text: "Client ensures site compliance, medical support access, and safety induction. Workfource supports coordination." },
    { id: "13", title: "Limitation of Liability", text: "Not liable for indirect losses, production delays, or damages from unsafe site environments. Liability capped at service value." },
    { id: "14", title: "Indemnity", text: "Client indemnifies Workfource against unsafe site conditions, 3rd party liabilities, and site accidents." },
    { id: "15", title: "Force Majeure", text: "Neither party responsible for delays due to natural disasters, government restrictions, strikes, or pandemics." },
    { id: "16", title: "Suspension & Termination", text: "7 to 15 days notice required. Immediate suspension for non-payment or safety violations." },
    { id: "17", title: "Confidentiality", text: "Both parties must protect commercial terms, project data, and workforce records from 3rd party disclosure." },
    { id: "18", title: "Governing Law", text: "Governed by the laws of India. Disputes subject to jurisdiction of competent courts in [Your City / State]." }
  ];

  return (
    <div className="bg-gray-950 min-h-screen pt-32 pb-24 px-6 md:px-16 text-white antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Header */}
        <div className="mb-24 border-b border-white/10 pb-16">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">
            Legal <br /><span className="text-orange-600 italic">Framework.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-gray-400 text-lg md:text-xl font-bold uppercase tracking-[0.2em] max-w-xl">
              Workforce Supply Services for Industrial & Infrastructure Projects
            </p>
            <div className="px-6 py-3 border border-orange-600/50 rounded-full text-orange-500 font-black text-xs uppercase tracking-widest">
              B2B Standard Terms v2026
            </div>
          </div>
        </div>

        {/* Introductory Clause */}
        <div className="bg-orange-600 text-white p-8 md:p-12 rounded-[2rem] mb-24 shadow-2xl shadow-orange-900/20">
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
            "By engaging our services, the Client acknowledges and agrees to the following terms governing workforce deployment, operational responsibilities, commercial arrangements, and project execution support."
          </p>
        </div>

        {/* Primary Operational Sections */}
        <div className="space-y-32 mb-32">
          {sections.map((section) => (
            <section key={section.id} className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="text-orange-600 font-black text-6xl block mb-2 opacity-50">{section.id}</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">{section.title}</h2>
              </div>
              <div className="md:col-span-8 text-gray-400 text-lg space-y-6 border-l border-white/10 pl-8 md:pl-12">
                {section.content && <p>{section.content}</p>}
                {section.list && (
                  <ul className="grid md:grid-cols-2 gap-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-bold uppercase tracking-tight text-gray-300">
                        <span className="text-orange-600">/</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && <p className="text-xs uppercase tracking-widest text-gray-500 pt-4 border-t border-white/5">{section.footer}</p>}
              </div>
            </section>
          ))}
        </div>

        {/* Grid for Legal Clauses 09 - 18 */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 border-t border-white/10 pt-24">
          {legalClauses.map((clause) => (
            <div key={clause.id} className="group hover:bg-white/5 p-8 rounded-3xl transition-colors duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-white/10 text-white text-xs font-black w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-orange-600 transition-colors">
                  {clause.id}
                </span>
                <h3 className="text-xl font-black uppercase tracking-widest group-hover:text-orange-500 transition-colors">{clause.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">
                {clause.text}
              </p>
            </div>
          ))}
        </div>

        {/* Global Footer Stamp */}
        <div className="mt-32 py-20 bg-white text-gray-950 rounded-[3rem] text-center px-6">
          <span className="text-4xl mb-6 block">🤝</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Commitment to Excellence</h2>
          <p className="max-w-2xl mx-auto text-lg font-medium text-gray-600 mb-8">
            At Workfource, we support industrial growth through disciplined deployment, operational reliability, and long-term business partnerships.
          </p>
          <div className="h-[1px] w-24 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            © {new Date().getFullYear()} Workfource Solutions
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terms;
