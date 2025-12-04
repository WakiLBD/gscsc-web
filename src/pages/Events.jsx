import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Events</h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 w-24" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer min-h-[300px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-90 transition-opacity group-hover:opacity-100`} />
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                     {event.type}
                   </span>
                   <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${event.status === 'Upcoming' ? 'bg-white text-green-700' : 'bg-black/30 text-white'}`}>
                     {event.status}
                   </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-white/80 gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-md">
                    Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;