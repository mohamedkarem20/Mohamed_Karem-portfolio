import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Education = () => {
  const items = [
    {
      type: 'work',
      title: 'Automation Specialist Intern',
      institution: 'Ministry of Communications and Information Technology (MCIT)',
      date: 'Sep 2026 - Nov 2026',
      desc: 'Trained in automation and workflow optimization; developed solutions to streamline repetitive processes and improve operational efficiency.'
    },
    {
      type: 'edu',
      title: 'AI, Machine Learning & Data Analytics Track',
      institution: 'Digilians',
      date: 'Dec 2025 - Sep 2026',
      desc: 'Training in AI, machine and deep learning applications, plus analytics and visualization with Power BI, Python, and SQL.'
    },
    {
      type: 'work',
      title: 'Applied AI',
      institution: 'Hyperone',
      date: 'Aug 2025 - Dec 2025',
      desc: 'Applied AI and machine learning techniques using Python, including data preparation, model development, evaluation, and performance analysis.'
    },
    {
      type: 'work',
      title: 'Financial Analyst',
      institution: 'Hyperone',
      date: 'May 2025 - Aug 2025',
      desc: 'Analyzed financial and operational data, prepared reports, and reviewed trends and variances to support business decisions.'
    },
    {
      type: 'work',
      title: 'Data Analyst',
      institution: 'Hyperone',
      date: 'Jan 2025 - Apr 2025',
      desc: 'Collected, cleaned, and analyzed data; created Excel, SQL, and Power BI reports and dashboards to monitor KPIs.'
    },
    {
      type: 'edu',
      title: 'Bachelor of Commerce (English Section)',
      institution: 'Focus: Accounting, Statistics & Business Analysis',
      date: 'Sep 2019 - Aug 2023',
      desc: 'Built an analytical and business foundation for data-driven decision-making.'
    }
  ];

  // Container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="education" className="section-padding bg-navy relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education <span className="text-primary">&</span> Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[19px] md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-amber-600 to-primary opacity-50 transform md:-translate-x-1/2"
          ></motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-navy border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-500"></div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="w-full md:w-[45%] glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 relative overflow-hidden pl-12 md:pl-8 ml-4 md:ml-0"
                  >
                    {/* Hover Glow inside card */}
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 skew-x-12"></div>

                    <div className="flex flex-col gap-4 relative z-10">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-navy transition-colors duration-300 shadow-inner"
                          >
                            {item.type === 'edu' ? <GraduationCap size={28} /> : <Briefcase size={28} />}
                          </motion.div>
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-primary/80 bg-primary/5 w-fit px-3 py-1.5 rounded-lg border border-primary/20">
                        <Calendar size={16} />
                        <span className="text-sm font-bold tracking-wider">{item.date}</span>
                      </div>

                      <div>
                        <h4 className="text-lg text-slate-200 font-semibold mb-2">{item.institution}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
