import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Neurate AI",
    category: "AI Production Tool",
    image: "https://picsum.photos/seed/techai/1200/800",
    url: "https://neurate-hyper-os-94m3.vercel.app/",
    description: "The core of the Neurate ecosystem, focusing on next-gen AI interactions and Hyper OS integration."
  },
  {
    title: "Eco Restaurant",
    category: "Web Application",
    image: "https://picsum.photos/seed/restaurant/1200/800",
    url: "https://v0-restaurant-web-app-ashen.vercel.app",
    description: "A modern, high-performance restaurant management and ordering platform built for speed."
  },
  {
    title: "Webli",
    category: "Communication Platform",
    image: "https://picsum.photos/seed/webli/1200/800",
    url: "https://v0-webli.vercel.app/",
    description: "Streamlined web communication tool designed for modern creative teams."
  },
  {
    title: "Paradise Point",
    category: "Service Platform",
    image: "https://picsum.photos/seed/paradise/1200/800",
    url: "https://paradisehotandcoldpoint.netlify.app",
    description: "A specialized service application for temperature-controlled logistics and customer touchpoints."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-32 pb-24 px-6 md:px-12 bg-white/2">
      <div className="flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-white/5 pb-8">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold tracking-[0.3em] text-brand-accent uppercase italic">Selected Works</span>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase italic tracking-tighter leading-[0.8]">Industrial <br />Archive</h2>
          </div>
          <span className="font-mono text-4xl opacity-10 italic font-black">01</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="glass p-4 rounded-full">
                    <ExternalLink className="text-brand-ink" />
                  </span>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">{project.category}</span>
                  <h3 className="text-2xl font-display font-semibold group-hover:text-brand-accent transition-colors">{project.title}</h3>
                </div>
                <p className="max-w-[200px] text-[10px] text-brand-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
