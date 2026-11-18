import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const image = '/about-portrait.png';

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
                  alt="Mohamed Karem"
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
                I am an <span className="text-slate-100 font-semibold">Applied AI and Data Analytics professional</span> with hands-on experience in machine learning, generative AI, RAG, and data analytics. I use Python, SQL, and Power BI to build practical solutions and support data-driven decisions.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Applied AI & Machine Learning
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I work with Python, machine learning, deep learning, computer vision, and NLP to develop and evaluate AI solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Generative AI & RAG
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I build LLM and RAG applications that help users explore documents and spreadsheets through natural-language questions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Analytics & Business Insights
                  </h3>
                  <p className="text-sm md:text-base mt-1">
                    I use SQL, Power BI, Excel, and Tableau to analyze data, track KPIs, and make business performance easier to understand.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
