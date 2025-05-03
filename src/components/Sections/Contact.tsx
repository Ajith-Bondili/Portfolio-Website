import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Layers, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from '../Navigation';
import SectionTitle from '../SectionTitle';

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            Get In <span className="text-gradient">Touch</span>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-white/70 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-md bg-sky-400/20 flex items-center justify-center mr-4 mt-1">
                    <Mail size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <Link
                      href="mailto:ajithbon05@gmail.com"
                      className="text-white/70 hover:text-sky-400 transition-colors"
                    >
                      ajithbondili05@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-md bg-sky-400/20 flex items-center justify-center mr-4 mt-1">
                    <Layers size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-white/70">Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/Ajith-Bondili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white/60 hover:bg-sky-400/20 hover:text-sky-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/ajith-bondili/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white/60 hover:bg-sky-400/20 hover:text-sky-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1hvUQIGjs61z0sRBf1TBWU2Fn1zwvBO11/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white/60 hover:bg-sky-400/20 hover:text-sky-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Resume"
                >
                  <FileText size={18} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative glow-container"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-lg blur-xl opacity-20"></div>
              <div className="relative bg-[#151515]/80 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent text-white"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent text-white resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-4 py-3 bg-sky-400 text-black font-medium rounded-md hover:bg-sky-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;