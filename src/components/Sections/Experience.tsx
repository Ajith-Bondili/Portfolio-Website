import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';

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
      company: "Friedmann.AI",
      period: "May 2025 - Present",
      description:
        "Building an AI-powered chat platform in collaboration with IBM engineers, with a focus on agentic reasoning, document ingestion, and conversational search. Contributing to backend API development, integrating LLM guardrails, and experimenting with advanced tools for web-based agent workflows.",
      skills: ["Next.js", "Node.js", "React", "Supabase", "Serverless Functions", "MongoDB", "Docker", "Postman", "AI Agents", "RAG"],
    },
    {
      title: "Machine Learning Engineer",
      company: "Wat.ai",
      period: "March 2025 - Present",
      description:
        "Developing MindMirror, an AI-powered journaling app that summarizes user reflections and identifies emotional patterns. Collaborating with a cross-functional team to build emotion classification models, support mental wellness insights, and create a seamless journaling experience.",
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

  return (
    <section id="experience" ref={ref} className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            <span className="text-gradient">Experience</span>
          </SectionTitle>

          <div className="relative glow-container-intense">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sky-400/30"></div>

            {/* Timeline items */}
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  experience={experience}
                  isActive={activeExperience === index}
                  isLeft={index % 2 === 0}
                  ref={(el) => (experienceRefs.current[index] = el)}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

interface TimelineItemProps {
  experience: ExperienceItem;
  isActive: boolean;
  isLeft: boolean;
  delay: number;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ experience, isActive, isLeft, delay }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`relative experience-timeline-item ${isActive ? "active" : ""}`}
      >
        <div className={`timeline-node ${isActive ? "active" : ""}`}></div>
        <div className="flex flex-col md:flex-row items-center">
          {isLeft ? (
            <>
              <div className="md:w-1/2 md:text-right md:pr-12">
                <TimelineContent experience={experience} isActive={isActive} alignment="right" />
              </div>
              <div className="md:w-1/2"></div> {/* Empty space on right */}
            </>
          ) : (
            <>
              <div className="md:w-1/2"></div> {/* Empty space on left */}
              <div className="md:w-1/2 md:pl-12">
                <TimelineContent experience={experience} isActive={isActive} alignment="left" />
              </div>
            </>
          )}
        </div>
      </motion.div>
    );
  }
);

interface TimelineContentProps {
  experience: ExperienceItem;
  isActive: boolean;
  alignment: 'left' | 'right';
}

const TimelineContent: React.FC<TimelineContentProps> = ({ experience, isActive, alignment }) => {
  return (
    <div className={`timeline-content ${isActive ? "active" : ""}`}>
      <h4 className="text-xl font-bold text-sky-400">{experience.title}</h4>
      <p className="text-white font-medium mt-1">{experience.company}</p>
      <p className="text-white/60 text-sm mt-1">{experience.period}</p>
      <p className="text-white/70 mt-3">{experience.description}</p>
      <div className={`flex flex-wrap gap-2 mt-3 ${alignment === 'right' ? 'md:justify-end' : ''}`}>
        {experience.skills.map((skill, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-sky-400/10 rounded-md text-sky-400">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

Experience.displayName = 'Experience';
TimelineItem.displayName = 'TimelineItem';

export default Experience;