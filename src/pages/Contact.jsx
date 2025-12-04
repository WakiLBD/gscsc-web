import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = ({ isDark }) => (
  <section className="py-24 min-h-[60vh] flex items-center">
    <div className="max-w-4xl mx-auto px-4 w-full">
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get in Touch</h2>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 w-24" />
      </div>
      
      <div className={`rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>gscsc.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} />
                <span>Tejgaon, Dhaka</span>
              </div>
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
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea rows="4" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`}></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;