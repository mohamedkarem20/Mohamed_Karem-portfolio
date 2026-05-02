import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Body Performance Analytics',
      desc: 'Predictive modeling for human body performance based on physiological metrics using machine learning and real-time biomechanics.',
      tools: ['Python', 'Scikit-Learn', 'Pandas'],
      img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#'
    },
    {
      title: 'Hospital Management System',
      desc: 'Comprehensive data-driven system for managing patient records and hospital resources with 3D anatomy visualization.',
      tools: ['SQL', 'Power BI', 'Excel'],
      img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#'
    },
    {
      title: 'Indian Gifts Company Data Analysis',
      desc: 'Detailed sales and customer behavior analysis for an Indian gift company, identifying growth opportunities and seasonal trends.',
      tools: ['Excel', 'Power BI', 'SQL'],
      img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#'
    },
    {
      title: 'EuroOffice Strategic Sales 2026',
      desc: 'Predictive sales analytics and strategic planning dashboard for EuroOffice, focusing on 2026 market expansion and revenue optimization.',
      tools: ['Power BI', 'Excel', 'Python'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-primary text-navy-dark rounded-full hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white text-navy-dark rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                      {tool}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
