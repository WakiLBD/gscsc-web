import React, { useState } from 'react';
import { Atom, Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg shadow-lg">
              <Atom className="text-white w-6 h-6 animate-spin-slow" />
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
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-slate-700'}`}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${isDark ? 'text-yellow-400' : 'text-slate-700'}`}>
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={isDark ? 'text-white' : 'text-black'}>
              {isOpen ? <X /> : <Menu />}
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
            className={`md:hidden overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'} border-b border-gray-200`}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
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

export default Navbar;