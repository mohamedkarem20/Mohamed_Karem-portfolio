import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
  const items = [
    {
      type: 'edu',
      title: 'Bachelor of Commerce (English Section)',
      institution: 'South Valley University',
      date: '2019 - 2023',
      desc: 'Specialized in Accounting. Developed strong foundational knowledge in financial management, auditing, and corporate accounting.'
    },
    {
      type: 'work',
      title: 'Financial Accountant',
      institution: 'Commercial Trading Co.',
      date: '2023 - 2024',
      desc: 'Managed financial records, prepared balance sheets, and handled daily accounting operations for a busy trading company.'
    },
    {
      type: 'edu',
      title: 'Data Analytics & Applied AI',
      institution: 'Self-Directed / Intensive Training',
      date: '2024 - Present',
      desc: 'Intensive focus on Python for Data Science, SQL optimization, and building Machine Learning models for business intelligence.'
    }
  ];

  return (
    <section id="education" className="section-padding bg-navy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Education & <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-navy-light ml-4 md:ml-0">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#3B82F6]"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-xl group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-navy transition-colors duration-300">
                      {item.type === 'edu' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <span className="px-4 py-1 bg-navy-light text-primary text-xs font-bold rounded-full border border-primary/20 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                <h4 className="text-lg text-slate-300 font-semibold mb-3 ml-1">{item.institution}</h4>
                <p className="text-slate-400 leading-relaxed text-base ml-1">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
