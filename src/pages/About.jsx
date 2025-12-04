import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Zap } from 'lucide-react';

const About = ({ isDark }) => {
  const stats = [
    { label: "Festivals", value: "15+" },
    { label: "Workshops", value: "200+" },
    { label: "Members", value: "1.5k+" },
    { label: "Awards", value: "50+" },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            About Us
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 w-24" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} shadow-2xl`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Our Mission</h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              The Government Science College Science Club is dedicated to fostering a spirit of inquiry and innovation among students. We bridge the gap between textbook knowledge and real-world application.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center border ${isDark ? 'bg-slate-800/50 border-white/10' : 'bg-white border-gray-100'} shadow-lg`}
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="mt-24">
           <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Wings</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Administration', icon: <Users />, desc: 'The brain behind the operations.' },
                { title: 'Academics', icon: <BookOpen />, desc: 'Nurturing the intellectual core.' },
                { title: 'IT & Graphics', icon: <Zap />, desc: 'Digitalizing the future.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={`p-6 rounded-xl border cursor-pointer ${isDark ? 'bg-slate-900/40 border-white/10 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;