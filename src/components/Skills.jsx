import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, FileSpreadsheet, BarChart3,
  Brain, Bot, Sigma, Search, BookOpen,
  Cpu, Globe, Terminal, Briefcase
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Excel (Advanced)', icon: <FileSpreadsheet size={20} />, color: 'bg-green-500/10 text-green-500 border-green-500/20' },
    { name: 'Python', icon: <Terminal size={20} />, color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    { name: 'SQL', icon: <Database size={20} />, color: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' },
    { name: 'Power BI', icon: <BarChart3 size={20} />, color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
    { name: 'Tableau', icon: <Globe size={20} />, color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
    { name: 'DeepLearning.AI', icon: <Cpu size={20} />, color: 'bg-red-500/10 text-red-500 border-red-500/20' },
    { name: 'AI Tools', icon: <Brain size={20} />, color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
    { name: 'Agentic AI', icon: <Bot size={20} />, color: 'bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/20' },
    { name: 'Statistics', icon: <Sigma size={20} />, color: 'bg-teal-500/10 text-teal-500 border-teal-500/20' },
    { name: 'Data Mining', icon: <Search size={20} />, color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
    { name: 'Foundations: Data', icon: <BookOpen size={20} />, color: 'bg-sky-500/10 text-sky-500 border-sky-500/20' },
    { name: 'Accounting', icon: <Briefcase size={20} />, color: 'bg-slate-500/10 text-slate-500 border-slate-500/20' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Expertise <span className="text-primary">& Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{
                y: -10,
                scale: 1.1,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border glass transition-all duration-300 ${skill.color} hover:bg-opacity-30 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] cursor-default group`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-bold text-sm md:text-base uppercase tracking-widest">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
