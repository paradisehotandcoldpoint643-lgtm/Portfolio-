import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="title-brutal break-all sm:break-words max-w-full relative z-10"
        >
          Shivansh <br className="hidden sm:block" />
          <span className="sm:ml-[10vw] text-brand-accent">Gupta</span>
        </motion.h1>

        {/* The Artistic Flair Floating Box */}
        <motion.div 
          initial={{ opacity: 0, y: 100, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-[50%] md:left-[55%] -translate-y-1/2 w-[260px] sm:w-[300px] md:w-[380px] aspect-[4/5] bg-[#1a1a1a] border border-white/10 p-2 md:p-4 shadow-2xl hidden md:block opacity-100 pointer-events-auto"
        >
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="input_file_0.png" 
              alt="Shivansh Gupta" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 md:p-6">
              <p className="text-white text-lg md:text-2xl font-black leading-none uppercase italic">
                AI Architect<br />& Developer
              </p>
            </div>
          </div>
          
          {/* Availability Badge */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-brand-accent flex items-center justify-center rounded-full border-[6px] md:border-[10px] border-brand-bg shadow-xl">
            <p className="text-black text-[8px] md:text-[10px] font-black text-center uppercase tracking-tighter">
              Available for<br />Collaboration
            </p>
          </div>
        </motion.div>
      </div>

      <div className="md:absolute bottom-12 left-6 md:left-12 max-w-[300px] mt-12 md:mt-0">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs md:text-sm leading-relaxed mb-4 font-light text-brand-muted"
        >
          Freelance developer specializing in Python, JavaScript, and Neurate AI. Designing high-performance environments with technical precision.
        </motion.p>
        <div className="flex gap-4">
          <div className="w-8 h-px bg-brand-accent self-center"></div>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll to Explore</p>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 text-right hidden lg:block">
        <div className="mb-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 mb-2">Selected Focus</p>
          <h3 className="text-2xl font-medium tracking-tight uppercase italic underline underline-offset-8 decoration-brand-accent">Interaction Design</h3>
        </div>
        <div className="flex justify-end gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>

      {/* Interactive Badge at top */}
      <div className="absolute top-24 right-[10%] md:right-[40%] px-4 py-1 border border-white/20 rounded-full mix-blend-difference hidden sm:block">
        <p className="text-[8px] md:text-[9px] font-mono tracking-widest uppercase text-brand-muted">Creative Developer Specialist</p>
      </div>
    </section>
  );
}
