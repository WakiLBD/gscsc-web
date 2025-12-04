import React from 'react';

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

export default GridBackground;