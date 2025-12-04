import React from 'react';
import { motion } from 'framer-motion';

const Executives = ({ isDark }) => {
  const execs = [
    { name: "Ahnaf Tahmid", role: "President", quote: "Leadership is service." },
    { name: "Rafiqul Islam", role: "General Secretary", quote: "Organization is key." },
    { name: "Samiul Haq", role: "VP of Administration", quote: "Efficiency matters." },
    { name: "Nabila Nur", role: "VP of Academics", quote: "Knowledge is power." },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Executive Panel</h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 w-24" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {execs.map((exec, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg border ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-gray-100'}`}
            >
              <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="px-6 pb-6 relative">
                <div className={`w-20 h-20 mx-auto -mt-10 rounded-full border-4 flex items-center justify-center text-2xl font-bold ${isDark ? 'border-slate-900 bg-slate-800 text-white' : 'border-white bg-slate-100 text-slate-800'}`}>
                  {exec.name.charAt(0)}
                </div>
                <div className="text-center mt-4">
                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exec.name}</h4>
                  <p className="text-blue-500 text-sm font-medium mb-2">{exec.role}</p>
                  <p className={`text-xs italic ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>"{exec.quote}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;