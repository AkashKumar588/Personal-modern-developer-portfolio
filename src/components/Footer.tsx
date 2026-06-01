import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#060912] border-t border-gray-900/80 pt-12 pb-8 relative z-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          
          {/* Brand & info */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gray-900 border border-gray-800">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wide block text-sm">
                AKASH KUMAR
              </span>
              <span className="text-[10px] text-gray-500 font-mono">
                IES University CSE Fresher
              </span>
            </div>
          </div>

          {/* Prompt explicit requirement tag */}
          <div className="text-center sm:text-left">
            <p className="text-xs text-gray-300 font-medium flex items-center justify-center gap-1.5">
              <span>Designed & Developed by</span>
              <strong className="text-white">Akash Kumar</strong>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-cyan-400 transition-colors border border-gray-850"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors border border-gray-850"
              aria-label="GitHub"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:akash.kumar@example.com"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-cyan-400 transition-colors border border-gray-850"
              aria-label="Email"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 border border-cyan-500/30 transition-all hover:scale-105 ml-2 group cursor-pointer"
              title="Smooth Scroll to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Extra notice row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} Akash Kumar. Optimized for SEO & lightning client speed.</p>
          <p className="mt-1 sm:mt-0">Tech Stack: React 19 • Tailwind CSS • Framer Motion • Vite</p>
        </div>

      </div>
    </footer>
  );
};
