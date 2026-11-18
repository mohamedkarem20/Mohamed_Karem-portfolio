import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              Connect with me through LinkedIn or explore my work on GitHub.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-slate-500">El Mohandessin, Giza, Egypt</p>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/m-karem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors">
                <span className="p-3 bg-primary/10 text-primary rounded-lg"><Linkedin size={24} /></span>
                <span className="font-bold">LinkedIn profile</span>
              </a>
              <a href="https://github.com/mohamedkarem20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors">
                <span className="p-3 bg-primary/10 text-primary rounded-lg"><Github size={24} /></span>
                <span className="font-bold">GitHub profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Let’s connect</h3>
            <p className="text-slate-400 leading-relaxed">
              For professional inquiries, please reach out through LinkedIn. You can also find project repositories on GitHub.
            </p>
            <a href="https://www.linkedin.com/in/m-karem" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 text-center">
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
