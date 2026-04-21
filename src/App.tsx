import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AIChatMe from "./components/AIChatMe";
import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] text-brand-muted font-mono">
      <span>© 2026 Shivansh Gupta. All Rights Reserved.</span>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-ink transition-colors">Privacy</a>
        <a href="#" className="hover:text-brand-ink transition-colors">Terms</a>
        <a href="#" className="hover:text-brand-ink transition-colors">Cookies</a>
      </div>
      <span>Powered by Neurate AI.</span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-black">
      {/* Background Decor */}
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[15%] md:right-[25%] bottom-0 w-px bg-white/5" />
        <div className="absolute top-0 left-[15%] md:left-[25%] bottom-0 w-px bg-white/5" />
        <div className="absolute top-[20%] md:top-[35%] left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-[80%] md:top-[75%] left-0 right-0 h-px bg-white/5" />
      </div>

      <div className="relative z-10 font-sans">
        <Navigation />
        
        <main>
          <Hero />
          
          {/* About Section - Brutalist & Direct */}
          <section id="about" className="py-24 px-12 border-y border-white/5">
            <div className="max-w-4xl flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-px bg-brand-accent" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-accent">Freelance Identity</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl font-sans font-black uppercase italic leading-[0.8] tracking-tighter"
              >
                Logic & <br /><span className="text-white/20">Creativity.</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-muted leading-relaxed font-light"
              >
                <p>
                  As a freelance Creative Developer, I bridge the gap between complex logic and human-centered design. Mastering both Python and JavaScript allows me to build architecturally sound applications that don't just work—they inspire.
                </p>
                <p>
                  My obsession with AI led to the creation of Neurate AI, an exploration into the future of human-machine interaction. I specialize in pushing the boundaries of what's possible with generative intelligence and neural interfaces.
                </p>
              </motion.div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <AIChatMe />
    </div>
    </div>
  );
}
