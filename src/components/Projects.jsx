import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ADPilot - Multi-Agent Marketing AI Platform',
      desc: 'Built a multi-agent AI platform that coordinates specialized agents to support and automate marketing workflows.',
      tools: ['Multi-Agent AI', 'Marketing Automation'],
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'RAGify - Generative AI / RAG Platform',
      desc: 'Built a platform for asking natural-language questions about uploaded documents and spreadsheets, turning unstructured information into useful answers and analytics.',
      tools: ['Generative AI', 'RAG', 'NLP'],
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mohamedkarem20/RAGify'
    },
    {
      title: 'Keeper-AI - Customer Churn Prediction',
      desc: 'Developed a machine learning platform to identify customers at risk of leaving and provide predictive insights to support retention decisions.',
      tools: ['Machine Learning', 'Predictive Analytics'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mohamedkarem20/Keeper-AI'
    },
    {
      title: 'Body Performance ML & Data Analytics',
      desc: 'Developed a data-driven solution to analyze physical performance, predict athletic performance from fitness data, and identify related patterns.',
      tools: ['Machine Learning', 'Data Analytics'],
      img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mohamedkarem20/body-performance-ml-data-analytics'
    },
    {
      title: 'Hospital Management System',
      desc: 'Built a relational database with integrity constraints, performed exploratory analysis, and created dashboards for patient, appointment, revenue, and business metrics.',
      tools: ['SQL', 'Relational Modeling', 'Dashboards'],
      img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mohamedkarem20/hospital-management-data-mining'
    },
    {
      title: 'Bank Loan Performance Analysis',
      desc: 'Designed a SQL Server database and built an interactive Power BI dashboard to visualize KPIs, loan quality, and funding performance.',
      tools: ['SQL Server', 'Power BI'],
      img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
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
                {project.github && (
                  <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="p-3 bg-primary text-navy-dark rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                )}
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
