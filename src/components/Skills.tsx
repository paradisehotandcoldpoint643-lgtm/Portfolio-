import { motion } from "motion/react";

const SKILL_CATEGORIES = [
  {
    name: "AI & Innovation",
    skills: ["Neurate AI Architecture", "Python (LLM Scripting)", "Gemini API", "Neural Interaction", "Prompt War Engineering"]
  },
  {
    name: "Development Stack",
    skills: ["JavaScript (ES6+)", "React Ecosystem", "Tailwind CSS", "Node.js Backend", "Vercel Deployment"]
  },
  {
    name: "Design Philosophy",
    skills: ["Brutalist Minimalism", "Visual Rhythm", "Technical Precision", "UX for AI", "Digital Storytelling"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="pt-32 pb-24 px-6 md:px-12">
      <div className="flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-white/5 pb-8">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold tracking-[0.3em] text-brand-accent uppercase italic">Capabilities</span>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase italic tracking-tighter leading-[0.8]">Technical <br />Core</h2>
          </div>
          <span className="font-mono text-4xl opacity-10 italic font-black">02</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-sm h-full"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-8 italic">
                // {cat.name}
              </h3>
              
              <ul className="flex flex-col gap-6">
                {cat.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center justify-between group">
                    <span className="text-lg font-light group-hover:text-brand-accent transition-colors">
                      {skill}
                    </span>
                    <span className="h-[1px] flex-1 mx-4 bg-white/10 group-hover:bg-brand-accent/30 transition-colors" />
                    <span className="font-mono text-[10px] opacity-40">0{sIndex + 1}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
