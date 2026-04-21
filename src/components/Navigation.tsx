import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-12 py-4 md:py-12 pointer-events-none"
    >
      <div className="flex flex-col gap-1 pointer-events-auto">
        <h2 className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-brand-accent uppercase">Portfolio Index</h2>
        <p className="text-[8px] md:text-[10px] opacity-50 font-mono tracking-tighter">v.26.04</p>
      </div>
      
      <div className="flex gap-4 md:gap-8 pointer-events-auto">
        <a href="#projects" className="text-[9px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-brand-accent transition-colors">Work</a>
        <a href="#skills" className="text-[9px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-brand-accent transition-colors">Studio</a>
        <a href="#contact" className="text-[9px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-brand-accent transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
}
