import React from 'react';
import { FaShieldAlt, FaBolt, FaGlobeAsia, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mt-8 md:mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-8 border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Secure Link Gateway v2.0
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          The Professional Standard for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Link Verification</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tonton 21 provides a secure, fast, and reliable environment for your digital content. 
          We ensure every link is verified before reaching its destination.
        </p>

        <div className="flex items-center justify-center">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            Contact Support <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <FaShieldAlt className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Secure Encryption</h3>
          <p className="text-slate-500 leading-relaxed">
            Every link processed through our system is protected with enterprise-grade encryption protocols.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
            <FaBolt className="text-2xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Lightning Fast</h3>
          <p className="text-slate-500 leading-relaxed">
            Optimized routing ensures users reach their destination content with minimal latency.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
            <FaGlobeAsia className="text-2xl text-teal-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Global Access</h3>
          <p className="text-slate-500 leading-relaxed">
            Our content delivery network ensures verifying links works seamlessly from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Bottom Status Section */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <FaCheckCircle className="text-5xl text-green-500 mb-6" />
          <h2 className="text-3xl font-bold mb-4">All Systems Operational</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Our verification servers are running at 100% capacity. Safe browsing is active for all users.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Server Status: Online
          </div>
        </div>
      </section>
    </div>
  );
};