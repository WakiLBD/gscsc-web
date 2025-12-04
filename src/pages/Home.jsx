import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Beaker, Award, Microscope, ArrowRight } from 'lucide-react';
import { Link, HashRouter } from 'react-router-dom';

// Added default prop for isDark to prevent errors when viewing standalone
const Home = ({ isDark = true }) => {
  return (
    /* Wrapped in HashRouter to provide context for <Link> components during standalone preview. 
       In your main App.jsx, you can remove this HashRouter wrapper if it's already provided at the root. */
    <HashRouter>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border ${isDark ? 'bg-blue-900/30 border-blue-500/30 text-blue-300' : 'bg-blue-100 border-blue-200 text-blue-700'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Est. 1974 | Government Science College
              </div>
              
              <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Unraveling the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Mysteries</span> of Science
              </h1>
              
              <p className={`text-lg md:text-xl mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Welcome to the Government Science College Science Club. A hub for innovators, thinkers, and the future leaders of scientific exploration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/events">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/25 flex items-center gap-2"
                  >
                    Join Activities <ChevronRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-lg font-bold border transition-all ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Animation Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className={`relative w-[400px] h-[400px] rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'} backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center`}>
                <div className="absolute top-4 left-4 text-xs font-mono opacity-50">E = mc²</div>
                <div className="absolute bottom-4 right-4 text-xs font-mono opacity-50">F = ma</div>
                <div className="absolute top-10 right-10 text-2xl opacity-20">⚛</div>
                
                <Beaker className="w-32 h-32 text-blue-500 mb-4 animate-bounce-slow" />
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Innovation Hub</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Where theory meets experimentation.</p>
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -right-12 top-20 p-4 rounded-xl shadow-xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}
                >
                  <Award className="text-yellow-400 w-8 h-8" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className={`absolute -left-12 bottom-20 p-4 rounded-xl shadow-xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}
                >
                  <Microscope className="text-purple-400 w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </HashRouter>
  );
};

export default Home;