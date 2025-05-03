import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMysql,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiRacket,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiFlask,
  SiSpring,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiOpencv,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';

interface SkillItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const Skills = React.forwardRef<HTMLElement>((props, ref) => {
  // Skills data
  const skillsItems: SkillItem[] = [
    { id: 1, name: "MySQL", icon: <SiMysql size={32} /> },
    { id: 2, name: "JavaScript", icon: <SiJavascript size={32} /> },
    { id: 3, name: "Python", icon: <SiPython size={32} /> },
    { id: 4, name: "TypeScript", icon: <SiTypescript size={32} /> },
    { id: 5, name: "Racket", icon: <SiRacket size={32} /> },
    { id: 6, name: "HTML5", icon: <SiHtml5 size={32} /> },
    { id: 7, name: "CSS3", icon: <SiCss3 size={32} /> },
    { id: 8, name: "Java", icon: <FaJava size={32} /> },
    { id: 9, name: "C", icon: <SiC size={32} /> },
    { id: 10, name: "C++", icon: <SiCplusplus size={32} /> },
    { id: 11, name: "React", icon: <SiReact size={32} /> },
    { id: 12, name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { id: 13, name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { id: 14, name: "Node.js", icon: <SiNodedotjs size={32} /> },
    { id: 15, name: "Flask", icon: <SiFlask size={32} /> },
    { id: 16, name: "Django", icon: <SiDjango size={32} /> },
    { id: 17, name: "FastAPI", icon: <SiFastapi size={32} /> },
    { id: 18, name: "Spring", icon: <SiSpring size={32} /> },
    { id: 19, name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
    { id: 20, name: "MongoDB", icon: <SiMongodb size={32} /> },
  ];

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            Technical <span className="text-gradient">Skills</span>
          </SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skillsItems.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="skill-card rounded-lg p-4 flex flex-col items-center justify-center"
              >
                <div className="skill-icon text-white/40 mb-4">{skill.icon}</div>
                <p className="skill-name text-white/70 text-center">{skill.name}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sky-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 max-w-2xl mx-auto">
              My technical skills span across front-end and back-end development, with a focus on creating responsive,
              user-friendly applications using modern technologies and frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;