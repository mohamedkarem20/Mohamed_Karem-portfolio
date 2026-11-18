import React from 'react';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Github, Download } from 'lucide-react';

const jobTitles = [
  'Financial Data Analyst',
  'Applied AI Specialist',
  'Automation Specialist',
  'Machine Learning Specialist',
];

const Hero = () => {
  const image = '/mohamed-about.png';
  const prefersReducedMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState(jobTitles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    if (displayedTitle !== jobTitles[titleIndex]) {
      setDisplayedTitle(jobTitles[titleIndex]);
    }
    if (isDeleting) {
      setIsDeleting(false);
    }
  }, [displayedTitle, isDeleting, prefersReducedMotion, titleIndex]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    const intervalId = setInterval(() => {
      setTitleIndex((currentIndex) => (currentIndex + 1) % jobTitles.length);
    }, 3200);

    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentTitle = jobTitles[titleIndex];
    let timeoutId;

    if (isDeleting) {
      if (displayedTitle.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedTitle(displayedTitle.slice(0, -1));
        }, 35);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((currentIndex) => (currentIndex + 1) % jobTitles.length);
        }, 250);
      }
    } else if (displayedTitle.length < currentTitle.length) {
      timeoutId = setTimeout(() => {
        setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
      }, 55);
    } else {
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedTitle, isDeleting, prefersReducedMotion, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-primary font-medium mb-4 tracking-wider">WELCOME TO MY WORLD</h5>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Mohamed Karem</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 leading-tight text-slate-100">
            <span className="block">a</span>
            <span className="block min-h-[2.4em] max-w-full">
              <span className="hero-title-cursor inline-block max-w-full text-primary" aria-live="off">
                {displayedTitle}
              </span>
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            I build practical AI and analytics solutions with Python, SQL, and Power BI,
            turning data into insights that support better decisions.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a 
              href="./Mohamed Karem CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline flex items-center gap-2"
            >
              <Download size={18} /> View CV
            </a>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/m-karem" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/mohamedkarem20" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/m-karem" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary opacity-20 blur-[60px] rounded-full animate-pulse"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-primary border-opacity-50 shadow-[0_0_40px_rgba(59,130,246,0.3)] bg-navy-dark">
              <img
                src={image}
                alt="Mohamed Karem"
                className="w-full h-full object-cover object-top grayscale brightness-90 contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-60"></div>


            </div>

            {/* Animated Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-xl z-20"
            >
              <span className="text-primary font-bold">SQL</span> Specialist
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-xl z-20"
            >
              <span className="text-primary font-bold">Python</span> Dev
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
