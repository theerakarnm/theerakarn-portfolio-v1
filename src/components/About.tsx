import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black/95 py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-purple-200 leading-relaxed"
        >
          Theerakarn Maiw is an accomplished software engineer and technology leader with over 5 years of expertise in full-stack development, system architecture, DevOps practices, and end-to-end application delivery. His career includes successful engagements with startups and enterprises, consistently delivering robust, secure, and scalable solutions.
        </motion.p>
      </div>
    </div>
  );
}
