import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Atom, Calendar, BookOpen, Users, Mail, Menu, X, Moon, Sun, 
  ChevronRight, ExternalLink, Award, Zap, Beaker, Microscope, Globe, 
  Facebook, Instagram, Youtube, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- UI COMPONENTS ---

const GridBackground = ({ isDark }) => (
  <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${isDark ? 'bg-[#0a0a12]' : 'bg-slate-50'}`}>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: isDark 
          ? `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`
          : `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`} />
    <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`} />
  </div>
);

const SectionHeader = ({ title, subtitle, isDark }) => (
  <div className="text-center mb-16 relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
    />
    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>
  </div>
);

// --- LAYOUT COMPONENTS ---

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Executives', path: '/executives' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-[#0a0a12]/80 border-b border-white/10' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg shadow-lg">
              <Atom className="text-white w-6 h-6 group-hover:animate-spin" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>GSCSC</span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Science Club</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${isActive(link.path) ? 'text-blue-500' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black')}`}
              >
                {link.name}
                {isActive(link.path) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full" />}
              </Link>
            ))}
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-slate-700'}`}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-slate-700'}`}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-gray-100'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-[#0a0a12] border-b border-white/10' : 'bg-white border-b border-gray-200'}`}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? (isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600') : (isDark ? 'text-gray-300' : 'text-gray-700')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ isDark }) => (
  <footer className={`py-12 border-t relative z-10 ${isDark ? 'bg-[#050508] border-white/5 text-gray-400' : 'bg-slate-50 border-gray-200 text-gray-600'}`}>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <Atom size={24} className="text-blue-500" />
          <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>GSCSC</span>
        </div>
        <p className="text-sm">Government Science College Science Club.<br/>Igniting minds since 1974.</p>
      </div>
      <div>
        <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/events" className="hover:text-blue-500 transition-colors">Events</Link></li>
          <li><Link to="/executives" className="hover:text-blue-500 transition-colors">Executive Panel</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <Facebook className="hover:text-blue-500 cursor-pointer transition-colors" />
          <Instagram className="hover:text-pink-500 cursor-pointer transition-colors" />
          <Youtube className="hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs">
      © 2025 GSCSC. Built for Science.
    </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const Home = ({ isDark }) => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border ${isDark ? 'bg-blue-900/30 border-blue-500/30 text-blue-300' : 'bg-blue-100 border-blue-200 text-blue-700'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Est. 1974 | Government Science College
          </div>
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Unraveling the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Mysteries</span> of Science
          </h1>
          <p className={`text-lg md:text-xl mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome to the Government Science College Science Club. A hub for innovators, thinkers, and the future leaders of scientific exploration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/events">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/25 flex items-center gap-2">
                Join Activities <ChevronRight size={18} />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-8 py-4 rounded-lg font-bold border transition-all ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}>
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative hidden lg:flex items-center justify-center">
          <div className={`relative w-[400px] h-[400px] rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'} backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center`}>
            <div className="absolute top-4 left-4 text-xs font-mono opacity-50">E = mc²</div>
            <div className="absolute bottom-4 right-4 text-xs font-mono opacity-50">F = ma</div>
            <Beaker className="w-32 h-32 text-blue-500 mb-4 animate-bounce-slow" />
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Innovation Hub</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Where theory meets experimentation.</p>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`absolute -right-12 top-20 p-4 rounded-xl shadow-xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <Award className="text-yellow-400 w-8 h-8" />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className={`absolute -left-12 bottom-20 p-4 rounded-xl shadow-xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <Microscope className="text-purple-400 w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

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
        <SectionHeader title="About Us" subtitle="Pioneering scientific excellence since inception." isDark={isDark} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className={`p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} shadow-2xl`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Our Mission</h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              The Government Science College Science Club is dedicated to fostering a spirit of inquiry and innovation among students. We bridge the gap between textbook knowledge and real-world application.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`p-6 rounded-xl text-center border ${isDark ? 'bg-slate-800/50 border-white/10' : 'bg-white border-gray-100'} shadow-lg`}>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 mb-2">{stat.value}</div>
                <div className={`text-sm font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-24">
           <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Wings</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Administration', icon: <Users />, desc: 'The brain behind the operations.' },
                { title: 'Academics', icon: <BookOpen />, desc: 'Nurturing the intellectual core.' },
                { title: 'IT & Graphics', icon: <Zap />, desc: 'Digitalizing the future.' }
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ y: -10 }} className={`p-6 rounded-xl border cursor-pointer ${isDark ? 'bg-slate-900/40 border-white/10 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>{item.icon}</div>
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

const Events = ({ isDark }) => {
  const events = [
    { title: "National Science Fair 2025", date: "Oct 25, 2025", status: "Upcoming", color: "from-green-500 to-emerald-700", type: "Fair" },
    { title: "Intra-College Olympiad", date: "Sept 12, 2025", status: "Ended", color: "from-purple-500 to-indigo-700", type: "Competition" },
    { title: "Space Workshop v3.0", date: "Aug 05, 2025", status: "Ended", color: "from-blue-500 to-cyan-700", type: "Workshop" },
    { title: "Robotics Bootcamp", date: "July 20, 2025", status: "Ended", color: "from-orange-500 to-red-700", type: "Bootcamp" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Events" subtitle="Mark your calendars for the biggest science spectacles." isDark={isDark} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.02 }} viewport={{ once: true }} className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer min-h-[300px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-90 transition-opacity group-hover:opacity-100`} />
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">{event.type}</span>
                   <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${event.status === 'Upcoming' ? 'bg-white text-green-700' : 'bg-black/30 text-white'}`}>{event.status}</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-white/80 gap-2"><Calendar size={16} /><span>{event.date}</span></div>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-md">Details <ExternalLink size={14} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
        <SectionHeader title="Executive Panel" subtitle="The minds leading the revolution." isDark={isDark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {execs.map((exec, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className={`rounded-xl overflow-hidden shadow-lg border ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-gray-100'}`}>
              <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="px-6 pb-6 relative">
                <div className={`w-20 h-20 mx-auto -mt-10 rounded-full border-4 flex items-center justify-center text-2xl font-bold ${isDark ? 'border-slate-900 bg-slate-800 text-white' : 'border-white bg-slate-100 text-slate-800'}`}>{exec.name.charAt(0)}</div>
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

const Contact = ({ isDark }) => (
  <section className="py-24 min-h-[60vh] flex items-center">
    <div className="max-w-4xl mx-auto px-4 w-full">
      <SectionHeader title="Get in Touch" subtitle="Have questions? Reach out to us." isDark={isDark} />
      <div className={`rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Mail size={20} /><span>gscsc.official@gmail.com</span></div>
              <div className="flex items-center gap-3"><Globe size={20} /><span>Tejgaon, Dhaka</span></div>
            </div>
            <div className="mt-12">
              <p className="opacity-80 text-sm">Follow our social handles for daily updates.</p>
              <div className="flex gap-4 mt-4">
                 <Facebook className="cursor-pointer hover:text-blue-200" />
                 <Instagram className="cursor-pointer hover:text-pink-200" />
                 <Youtube className="cursor-pointer hover:text-red-200" />
              </div>
            </div>
          </div>
          <div className="p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div><label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label><input type="text" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`} /></div>
              <div><label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label><input type="email" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`} /></div>
              <div><label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label><textarea rows="4" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`}></textarea></div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP ---

function App() {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDark(saved === 'dark');
  }, []);

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-[#0a0a12]' : 'bg-slate-50'}`}>
        <GridBackground isDark={isDark} />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home isDark={isDark} />} />
              <Route path="/about" element={<About isDark={isDark} />} />
              <Route path="/events" element={<Events isDark={isDark} />} />
              <Route path="/executives" element={<Executives isDark={isDark} />} />
              <Route path="/contact" element={<Contact isDark={isDark} />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;