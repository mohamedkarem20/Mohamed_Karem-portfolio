import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: 'Foundations: Data, Data, Everywhere',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Ask Questions to Make Data-Driven Decisions',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Prepare Data for Exploration',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Process Data from Dirty to Clean',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Analyze Data to Answer Questions',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Share Data Through the Art of Visualization',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Introduction to Data Analysis Using Python',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Google Data Analytics Capstone',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Accelerate Your Job Search with AI',
      issuer: 'Coursera / Google',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'PL-300: Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Certificates <span className="text-primary">& Honors</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-4 rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-navy-dark p-2 rounded-full shadow-lg">
                  <Award size={16} />
                </div>
              </div>

              <h3 className="text-lg font-bold mb-1 text-slate-100">{cert.title}</h3>
              <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <CheckCircle size={14} className="text-green-500" />
                <span>Verified • {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
