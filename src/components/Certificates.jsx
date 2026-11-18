import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      issuer: 'Microsoft',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Microsoft Excel',
      issuer: 'Certification listed on CV',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'SQL Server',
      issuer: 'DataCamp',
      img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000'
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
