import React from 'react';
import { FaPlay, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 selection:bg-blue-600 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-blue-600 rounded-xl group-hover:rotate-6 group-hover:scale-105 shadow-lg shadow-blue-600/20">
            <FaPlay className="text-sm text-white ml-1" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Tonton <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">21</span>
          </h1>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full animate-fade-in-up">
          {children}
        </div>
      </main>

      <footer className="py-8 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Tonton 21 Stream. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200">
              <FaGithub size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;