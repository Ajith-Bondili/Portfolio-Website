import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from '../Navigation';
import Image from '../Image';
import { Boxes } from '../ui/background-boxes';
//import waterl from '../../assets/images/University_of_Waterloo_seal.svg.png';
import HeroIcon from '../../assets/images/heroicon.png';



const Hero = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      {/* Background boxes effect */}
      <Boxes />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="hero-layout items-center">
          {/* Left side - Profile */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl blur-xl opacity-10 animate-pulse-slow"></div>
              <div className="hero-image-container relative bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden w-full max-w-md mx-auto aspect-square">
                <Image
                  src={HeroIcon}
                  alt="Ajith Bondili"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="hero-image-glow"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex gap-4 justify-center"
            >
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
                href="mailto:ajithbon05@gmail.com"
                className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white/60 hover:bg-sky-400/20 hover:text-sky-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Main content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <motion.div
                  className="px-4 py-1 border border-sky-400/30 rounded-full text-sky-400 text-sm font-medium bg-sky-400/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="mr-2">✦</span> Full-Stack Developer
                </motion.div>
              </div>

              <div className="hero-text-container">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <div className="hero-text-line">
                    {"Coding Ideas".split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.1,
                          ease: "easeInOut",
                        }}
                        className="mr-3 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <div className="hero-text-line">
                    {"Into a".split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.1,
                          ease: "easeInOut",
                        }}
                        className="mr-3 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.8,
                        ease: "easeInOut",
                      }}
                      className="text-gradient inline-block"
                    >
                      Reality
                    </motion.span>
                  </div>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="text-xl text-white/60 max-w-lg"
              >
                I'm <span className="text-sky-400 font-medium">Ajith Bondili</span>, a full-stack developer
                passionate about creating innovative solutions that provide users with exceptional experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-md hover:border-sky-400 hover:text-sky-400 transition-colors"
                  >
                    See My Work
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center"
        >
          <span className="text-white/40 text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-1 bg-white/60 rounded-full mt-1"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;