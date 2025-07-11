import React from 'react';
import { motion } from 'motion/react';
import {
  SiMysql,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiRacket,
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
  SiPostgresql,
  SiMongodb,
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
  const languageSkills: SkillItem[] = [
    { id: 1, name: "JavaScript", icon: <SiJavascript size={28} /> },
    { id: 2, name: "Python", icon: <SiPython size={28} /> },
    { id: 3, name: "TypeScript", icon: <SiTypescript size={28} /> },
    { id: 4, name: "Racket", icon: <SiRacket size={28} /> },
    { id: 7, name: "Java", icon: <FaJava size={28} /> },
    { id: 8, name: "C", icon: <SiC size={28} /> },
    { id: 9, name: "C++", icon: <SiCplusplus size={28} /> },
  ];

  const frontendSkills: SkillItem[] = [
    { id: 10, name: "React", icon: <SiReact size={28} /> },
    { id: 11, name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { id: 12, name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  ];

  const backendSkills: SkillItem[] = [
    { id: 13, name: "Node.js", icon: <SiNodedotjs size={28} /> },
    { id: 14, name: "Flask", icon: <SiFlask size={28} /> },
    { id: 15, name: "Django", icon: <SiDjango size={28} /> },
    { id: 16, name: "FastAPI", icon: <SiFastapi size={28} /> },
    { id: 17, name: "Spring", icon: <SiSpring size={28} /> },
  ];

  const databaseSkills: SkillItem[] = [
    { id: 18, name: "MySQL", icon: <SiMysql size={28} /> },
    { id: 19, name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
    { id: 20, name: "MongoDB", icon: <SiMongodb size={28} /> },
  ];

  const renderSkills = (title: string, skills: SkillItem[]) => (
    <div className="mb-10">
      <h3 className="text-white/50 text-2xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
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
    </div>
  );

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            Technical <span className="text-gradient">Skills</span>
          </SectionTitle>

          <div className="max-w-5xl mx-auto">
            {renderSkills("Languages", languageSkills)}
            {renderSkills("Frontend", frontendSkills)}
            {renderSkills("Backend", backendSkills)}
            {renderSkills("Databases", databaseSkills)}
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