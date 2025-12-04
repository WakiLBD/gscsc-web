import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GridBackground from './components/ui/GridBackground';

// Import Pages (You will create these next)
import Home from './pages/Home';
// import Events from './pages/Events'; // Create these files similarly
// import About from './pages/About';

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
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
