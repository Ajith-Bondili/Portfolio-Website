import React from 'react';
import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import { Timeline } from '../ui/timeline';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExperienceProps {
  activeExperience: number;
  experienceRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Experience = React.forwardRef<HTMLElement, ExperienceProps>(({ activeExperience, experienceRefs }, ref) => {
  // Experience data
  const experiences: ExperienceItem[] = [
    {
      title: "AI Software Engineer",
      company: "IBM - FriedmannAI",
      period: "May 2025 - Present",
      description:
        "Building an AI-powered financial advisor platform with IBM. Developing AI Agents and RAG infrastructure.",
      skills: ["Next.js", "Node.js", "React", "Supabase", "Serverless Functions", "PostgreSQL", "Docker", "AI Agents", "RAG", "LangChain", "Python"],
    },
    {
      title: "Machine Learning Engineer",
      company: "Wat.ai",
      period: "March 2025 - Present",
      description:
        "Developing MindMirror, an AI-powered journaling app that summarizes user reflections and identifies emotional patterns. Building emotion classification models to support mental wellness insights and create a seamless journaling experience.",
      skills: ["Python", "PyTorch", "Transformers", "Emotion Classification", "AWS Lambda", "Google Cloud Functions", "Swift", "Hugging Face"],
    },
    {
      title: "Software Engineer",
      company: "Cita Marketplace",
      period: "June 2024 - August 2024",
      description:
      "Contributed to the backend by designing APIs, devloped unit tests, optimized SQL queries, and utiliized OOP principles.",
      skills: ["Python", "Flask", "SQL", "REST APIs", "OOP"],
    },
  ];

  // Transform experience data for Timeline component
  const timelineData = experiences.map((experience, index) => ({
    title: experience.period,
    content: (
      <div 
        ref={(el) => (experienceRefs.current[index] = el)}
        className={`timeline-content bg-gradient-to-br from-[#151515]/80 to-[#0a0a0a]/80 backdrop-blur-lg border rounded-lg p-6 transition-all duration-500 ${
          activeExperience === index 
            ? 'border-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.3)] scale-105' 
            : 'border-white/10 shadow-lg'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-sky-400 mb-2">
            {experience.title}
          </h4>
          <p className="text-white font-semibold text-lg mb-1">
            {experience.company}
          </p>
          <p className="text-white/60 text-sm mb-4 font-medium">
            {experience.period}
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span 
                key={i} 
                className="text-xs px-3 py-1.5 bg-sky-400/10 border border-sky-400/20 rounded-full text-sky-400 font-medium hover:bg-sky-400/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  }));

  return (
    <section id="experience" ref={ref} className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>
              <span className="text-gradient">Experience</span>
            </SectionTitle>
          </motion.div>

          <div className="relative glow-container-intense">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;