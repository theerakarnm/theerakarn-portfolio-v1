import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import mormapImage from '../assets/mormap.png'
import raisebizImage from '../assets/raizebiz.png'
import oneKeepingImage from '../assets/1keeping.png'
import pinusImage from '../assets/pinus.png'
import diabetesImage from '../assets/dr.asarrp.png'
import tamacollectinImage from '../assets/tama-collection.png'
import tamaquotationImage from '../assets/tama-quotation.png'

const projects = [
  {
    title: "Perdclinic",
    description: "A healthcare CRM platform that enables doctors to efficiently manage patient updates and communication online, enhancing care and engagement.",
    image: mormapImage,
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Microservice"],
    github: "https://github.com/Mormap",
    live: "https://perdclinic.com"
  },
  {
    title: "Raisebiz",
    description: "A platform for the hotel industry to connect with clients through tag-based matching, similar to Twitter’s tagging system.",
    image: raisebizImage,
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "https://raisebiz.co"
  },
  {
    title: "1Keeping",
    description: "Intelligent File Management Powered by AI.",
    image: oneKeepingImage,
    tech: ["Remix.js", "TypeScript", "Tailwind", "Rust"],
    github: "#",
    live: "https://1keeping.com"
  },
  {
    title: "Perdclinic",
    description: "A clinic management system for managing open OPD operations, tracking finances, and monitoring inventory.",
    image: pinusImage,
    tech: ["Remix.js", "TypeScript", "Tailwind", "Hono"],
    github: "#",
    live: "#"
  },
  {
    title: "DR.ASA | Tracking Diabetes",
    description: "A website for diabetes patients to track and monitor their health status, providing real-time updates and insights.",
    image: diabetesImage,
    tech: ["Remix.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "TAMA Collection",
    description: "A back-office platform designed for tracking product inflow and outflow, ensuring efficient inventory management and oversight.",
    image: tamacollectinImage,
    tech: ["Next.js", "Trpc", "TypeScript", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "TAMA Quotation",
    description: "A platform for generating custom business quotations and tracking financial performance efficiently.",
    image: tamaquotationImage,
    tech: ["Next.js", "Trpc", "TypeScript", "Tailwind"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black/95 py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/20 rounded-lg overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:bg-purple-900/40 hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 rounded-full text-purple-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {
                    project.github && project.github !== '#' && <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                  }
                  {
                    project.live && project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  }

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}