import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  // FIXED: Inhe ab niche modal logic mein use kiya hai
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('/api/api/jobs');
        setJobs(res.data);
        setFilteredJobs(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const results = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.loc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(results);
  }, [searchTerm, jobs]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-orange-100 selection:text-orange-600">
      
      {/* --- HEADER --- */}
      <section className="pt-40 pb-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-8xl font-black text-gray-950 tracking-tighter leading-[0.9]">
              Career <br /> <span className="text-orange-600 italic">Opportunities</span>
            </h1>
          </div>

          <div className="relative group w-full lg:w-[400px]">
            <input 
              type="text"
              placeholder="Filter by role..."
              className="w-full pl-0 pr-12 py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-orange-600 transition-all text-xl font-medium placeholder:text-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-0 bottom-4 text-2xl">✨</div>
          </div>
        </div>
      </section>

      {/* --- JOB BOARD --- */}
      <section className="px-8 max-w-7xl mx-auto pb-40">
        <div className="hidden md:flex items-center px-4 mb-8">
          <div className="w-[45%] text-[11px] font-bold uppercase tracking-[0.4em] text-gray-300">Position</div>
          <div className="w-[20%] text-[11px] font-bold uppercase tracking-[0.4em] text-gray-300">Location</div>
          <div className="w-[20%] text-[11px] font-bold uppercase tracking-[0.4em] text-gray-300">Salary</div>
          <div className="w-[15%]"></div>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="h-40 flex items-center justify-center text-gray-300 font-black italic text-2xl uppercase italic">Synchronizing...</div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job._id} 
                className="group relative flex flex-col md:flex-row md:items-center px-8 py-4 bg-white rounded-[2.5rem] border border-transparent hover:border-orange-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="w-full md:w-[45%] mb-6 md:mb-0">
                  <h3 className="text-3xl text-gray-800 font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {job.title}
                  </h3>
                </div>

                <div className="w-full md:w-[20%] mb-4 md:mb-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Office</span>
                    <p className="text-gray-500 font-semibold text-sm">{job.loc}</p>
                  </div>
                </div>

                <div className="w-full md:w-[20%] mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Package</span>
                    <p className="text-gray-400 font-medium text-sm italic">{job.salary}</p>
                  </div>
                </div>

                <div className="w-full md:w-[15%] text-left md:text-right">
                  <button 
                    onClick={() => { setSelectedJob(job); setIsFormOpen(true); }}
                    className="group/btn relative overflow-hidden bg-gray-950 text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all"
                  >
                    <span className="relative z-10">Apply</span>
                    <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium tracking-tight text-xl">Nayi opportunities jald hi aayengi.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- APPLICATION MODAL (Warnings fix logic) --- */}
      {isFormOpen && selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[3rem] p-10 relative overflow-hidden">
             <h2 className="text-3xl font-black mb-2">Apply for {selectedJob.title}</h2>
             <p className="text-gray-400 text-sm mb-8 font-bold uppercase tracking-widest">{selectedJob.loc} • {selectedJob.salary}</p>
             
             {/* Simple Form Placeholder */}
             <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 rounded-2xl outline-none border border-transparent focus:border-orange-500 font-bold" />
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest mt-4"
                >
                  Submit Application
                </button>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="w-full text-gray-400 font-bold text-xs uppercase"
                >
                  Cancel
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;