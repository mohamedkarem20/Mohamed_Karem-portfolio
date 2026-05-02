import React, { useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Download, Camera } from 'lucide-react';

const Hero = () => {
  const [image, setImage] = useState(localStorage.getItem('heroImage') || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        localStorage.setItem('heroImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-slate-100">
            a{' '}
            <span className="text-primary border-r-2 border-primary">
              <Typewriter
                words={['Data Analyst', 'AI Enthusiast', 'Financial Accountant']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            I turn data into insights and build intelligent solutions to solve real-world problems.
            Bridging the gap between financial expertise and advanced analytics.
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
            <a href="https://www.linkedin.com/in/mohamed-karem-mahmoud" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/mohamedkarem20/portfolio" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="mailto:mohamed.karim@example.com" className="p-3 glass rounded-full hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail size={20} />
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

              {/* Change Image Overlay */}
              <div
                onClick={() => fileInputRef.current.click()}
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Camera size={40} className="text-white mb-2" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">Change Photo</span>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
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
