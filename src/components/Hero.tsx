import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold text-white mb-4">Theerakarn Maiwong</h1>
        <p className="text-xl text-purple-200 mb-8">Full Stack Developer & Tech Enthusiast</p>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/theerakarnm" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/theerakarnm/" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:contact@theerakarnm.dev" className="text-white hover:text-purple-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}