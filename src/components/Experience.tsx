import { motion } from 'framer-motion';
import { Building2, Briefcase, Trees, Cpu } from 'lucide-react';

const experiences = [
  {
    company: "PlanthiaTech",
    title: "Founder, CEO",
    period: "Present",
    summary: "As the CEO of PlantyrTech, I guide our vision of cultivating innovative technology solutions that organically scale and evolve with your business needs. I've led our growth, combining a deep commitment to sustainability with cutting-edge technological innovation.",
    icon: Trees
  },
  {
    company: "Eukron Tech",
    title: "Founder, CTO",
    period: "Present",
    summary: "As the Chief Technology Officer at Eukron, I lead our mission to Innovate • Transform • Achieve, harnessing advanced technology and smart solutions to empower businesses worldwide. Since joining Eukron, I’ve steered our technical vision, built high-performing teams, and overseen the delivery of robust platforms that drive growth, efficiency, and digital transformation.",
    icon: Cpu
  },
  {
    company: "Mormap",
    title: "Co-Founder",
    period: "Previous",
    summary: "As the Founder and CTO of MorMap, I was responsible for overseeing all technical aspects of the project, leading the development of a complete end-to-end application and system infrastructure. This involved designing and implementing the entire network, security protocols, and CI/CD pipelines for each service.",
    icon: Building2
  },
  {
    company: "Itone",
    title: "Application Development Analyst",
    period: "Previous",
    summary: "At ITONE.co, I served as a full-stack developer responsible for developing internal back-office systems and delivering tailored solutions to clients. My role involved working extensively across both the frontend and backend, leveraging tools such as AngularJS, Java Spring Boot, and PostgreSQL.",
    icon: Briefcase
  },
  {
    company: "G-Source",
    title: "Part-time Full-stack",
    period: "Previous",
    summary: "At G-Source, I worked as a full-stack developer, where I was responsible for end-to-end application development using TypeScript and Next.js (React). My role encompassed both frontend and backend development, ensuring seamless integration and user experience.",
    icon: Building2
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black/90 py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <exp.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
                  <p className="text-purple-300 mb-2">{exp.title}</p>
                  <p className="text-gray-400">{exp.summary}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}