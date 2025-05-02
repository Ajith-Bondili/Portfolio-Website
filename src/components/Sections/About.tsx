import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Check } from 'lucide-react';
import Image from '../Image';
import SectionTitle from '../SectionTitle';
import WaterlooSeal from '../../assets/images/University_of_Waterloo_seal.svg.png';

const About = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            About <span className="text-gradient">Me</span>
          </SectionTitle>

          {/* Unified About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#151515]/80 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-lg mb-12 glow-container"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Background & Education - 5 columns */}
              <div className="lg:col-span-5">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-md bg-sky-400/20 flex items-center justify-center mr-3">
                    <Code size={16} className="text-sky-400" />
                  </span>
                  Background & Education
                </h3>

                <div className="space-y-6 text-white/70">
                  <p>
                    I'm a passionate developer with a solid foundation in computer science and a knack for building
                    innovative, user-focused web solutions. My journey into tech began with an insatiable curiosity
                    about how technology powers the world around us.
                  </p>

                  <div className="pl-4 border-l-2 border-sky-400/30">
                    <p className="font-medium text-white">
                      I am the class of 2029 studying{" "}
                      <span className="text-sky-400">Computer Science at the University of Waterloo</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="relative overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={WaterlooSeal}
                        alt="University of Waterloo Seal"
                        width={400}
                        height={200}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-sm text-white font-medium">University of Waterloo Seal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Goals - 4 columns */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-md bg-sky-400/20 flex items-center justify-center mr-3">
                    <Database size={16} className="text-sky-400" />
                  </span>
                  Skills & Goals
                </h3>

                <div className="space-y-6 text-white/70">
                  <p>
                    I am proficient in a wide range of technologies and constantly expanding my skill set to stay at
                    the forefront of development.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">Front-end</span>
                        <span className="text-sm font-medium text-sky-400">90%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-sky-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">Back-end</span>
                        <span className="text-sm font-medium text-sky-400">85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-sky-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    I am actively working towards a career in Machine Learning, driven by my fascination with the
                    significant impact these technologies have on people's everyday lives.
                  </p>
                </div>
              </div>

              {/* Frameworks & Technologies - 3 columns */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-md bg-sky-400/20 flex items-center justify-center mr-3">
                    <Cpu size={16} className="text-sky-400" />
                  </span>
                  Tech Stack
                </h3>

                <div className="space-y-6 text-white/70">
                  <div className="space-y-3">
                    <h4 className="text-sky-400 font-medium">Frameworks</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> React
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> React Native
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> Node.js
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> Next.js
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sky-400 font-medium">Technologies</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> Git
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> Firebase
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> Hadoop
                      </li>
                      <li className="flex items-center">
                        <Check size={12} className="mr-2 text-sky-400" /> REST APIs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;