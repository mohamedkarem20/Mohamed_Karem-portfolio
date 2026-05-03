import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const image = './Gemini_Generated_Image_km275wkm275wkm27.png';

  return (
    <section id="about" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src={image}
                  alt="Mohamed Karim Mahmoud"
                  className="w-full h-full object-cover object-top grayscale brightness-90 contrast-125 hover:grayscale-0 transition-all duration-700"
                />


              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Who <span className="text-primary">Am I</span></h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p className="text-lg">
                I am an <span className="text-slate-100 font-semibold">Applied AI and Data Analysis enthusiast</span> with a strong interest in turning data into meaningful insights.
                I enjoy working with data, exploring patterns, and building intelligent solutions using modern tools and techniques.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    I Can Analyze and Solve Problems
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I have experience working with data analysis tools and techniques such as Python, Excel, and data visualization.
                    I focus on understanding data and using it to support decision-making.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    I Can Work with AI Technologies
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I am continuously learning and applying concepts in machine learning and artificial intelligence.
                    I aim to build smart systems that can automate tasks and provide accurate predictions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    I Follow Modern Tech Trends
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I stay updated with the latest trends in AI, data science, and technology.
                    I am always eager to learn new skills and improve my knowledge in this fast-growing field.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-4 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Years Exp.</p>
              </div>
              <div className="glass p-4 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold text-primary">25+</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Projects Done</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
