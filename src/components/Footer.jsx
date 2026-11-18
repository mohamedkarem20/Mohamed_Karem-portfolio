import React from 'react';
import { Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="text-2xl font-bold font-poppins text-primary">
            MK<span className="text-white">.</span>
          </a>
          <p className="text-sm text-slate-500 mt-2">© 2026 Mohamed Karem. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/m-karem" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/mohamedkarem20" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 glass rounded-full hover:bg-primary hover:text-navy-dark transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
