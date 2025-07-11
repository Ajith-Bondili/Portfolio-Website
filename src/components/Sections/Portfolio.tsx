import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from '../Navigation';
import Image from '../Image';
import SectionTitle from '../SectionTitle';
import { HoverEffect } from '../ui/card-hover-effect';
import StroopImg from '../../assets/images/Stroop.png';
import ErgoTypeImg from '../../assets/images/ergotype.png';
import UnfollowerImg from '../../assets/images/unfollower.png';
import AutoAlertImg from '../../assets/images/autoAlert.png';
import PortfolioImg from '../../assets/images/portfolioimage2.png';
import PreppalImg from '../../assets/images/PrepalCover.png';
import CarPredictor from '../../assets/images/carpredictor.png';
import SecureChatbot from '../../assets/images/SecureChatbot.png'

interface Project {
  title: string;
  desc: string;
  devstack: string;
  link?: string;
  git?: string;
  type: string;
  image: string; // now refers to imported asset
}

const Portfolio = React.forwardRef<HTMLElement>((props, ref) => {
  // Projects data
  const projects: Project[] = [
    {
      title: "Used Car Price Predictor",
      desc: `Built a linear regression model in Azure to predict used car prices. Handled data preparation, model training, and deployment as a real-time endpoint using Azure Container Instances.`,
      devstack: "Azure ML Studio, Azure Container Instances, Python, Azure ML SDK",
      type: "ML Cloud",
      image: CarPredictor
    },
    {
      title: "SecureChatbot",
      desc: `Privacy-first AI chatbot for Sun Life Financial company, aimed to answers questions from structured financial PDFs using a Retrieval-Augmented Generation (RAG) pipeline.`,
      devstack: "Python, LangChain, ChromaDB, FastAPI, InstructorEmbeddings, LlamaCpp",
      git: "https://github.com/Ajith-Bondili/SecureChatbot",
      type: "Backend",
      image: SecureChatbot
    },
    {
      title: "PrepPal",
      desc: "PrepPal is an AI-powered interview preparation bot that helps students practice behavioral interviews by generating personalized, industry-specific questions based on their resumes. It evaluates video responses, tracks progress using a database, and features real-time video analysis to provide tailored feedback using Gen AI.",
      devstack: "React, Javascript, Tailwind CSS, Flask, Python, OpenAI, GCP, Cohere, Open CV, SQLite, SQLAlchemy",
      link: "https://www.youtube.com/watch?v=0uulnpFgpyc&ab_channel=Yes",
      git: "https://github.com/Ajith-Bondili/ai-interviewer",
      type: "Fullstack",
      image: PreppalImg
    },
    {
      title: "ErgoType",
      desc: "A typing test game which uses Javascript, HTML and CSS to track ones WPM by typing the words on the screen in the set amount of time.",
      devstack: "Javascript, HTML, CSS",
      link: "https://ajith-bondili.github.io/TypingTest/",
      git: "https://github.com/Ajith-Bondili/TypingTest",
      type: "Frontend",
      image: ErgoTypeImg
    },
    {
      title: "Instagram Unfollower",
      desc: "Bot that unfollows accounts that do not follow the user back",
      devstack: "Python, Selenium",
      git: "https://github.com/Ajith-Bondili/Instagram-Unfollower",
      type: "Backend",
      image: UnfollowerImg
    },
    {
      title: "Auto Alert",
      desc: "Hackathon Project: Developed with 3 others, a real-time vehicle security application that detects potential car thefts and sends immediate alerts to owners and police.",
      devstack: "React Native, Typescript, Python, Javascript, OpenCV, Twilio, Roboflow",
      git: "https://github.com/Ajith-Bondili/Auto-Alert",
      type: "Fullstack",
      image: AutoAlertImg
    },
    {
      title: "Stroop Effect Game",
      desc: "A brain challenge game based on the Stroop Effect, a psychological test where players must process conflicting information between text and color.",
      devstack: "React, Javascript, React Router, Framer Motion, Tailwind CSS",
      link: "https://stroop-effect-game.vercel.app/",
      git: "https://github.com/Ajith-Bondili/Stroop-Effect-Game",
      type: "Frontend",
      image: StroopImg
    },
    {
      title: "Portfolio Website",
      desc: "The portfolio website you are currently interacting with!",
      devstack: "React, Typescript, Framer Motion, Tailwind CSS, Vite",
      git: "https://github.com/Ajith-Bondili/Portfolio-Website",
      type: "Frontend",
      image: PortfolioImg
    },
  ];

  // Convert projects to hover effect items
  const projectCards = projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-item"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
        <div className={`${index % 2 === 0 ? "order-1" : "order-1 md:order-2"}`}>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#151515]/80 backdrop-blur-sm">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-contain"
            />
          </div>
        </div>

        <div className={`${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 mr-3">
                {project.type}
              </span>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>

            <p className="text-white/70">{project.desc}</p>

            <div className="pt-2">
              <h4 className="text-sm font-medium text-sky-400 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.devstack.split(", ").map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {project.link && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-sky-400/10 text-sky-400 rounded-md hover:bg-sky-400/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </Link>
                </motion.div>
              )}

              {project.git && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white/70 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Github size={16} />
                  View Code
                </Link>
              </motion.div>
            )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section id="portfolio" ref={ref} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <SectionTitle>
            Featured <span className="text-gradient">Projects</span>
          </SectionTitle>

          <HoverEffect items={projectCards} />
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;