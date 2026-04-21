import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-24 px-6 md:px-12 bg-white/2">
      <div className="flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-white/5 pb-8">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold tracking-[0.3em] text-brand-accent uppercase italic">Get In Touch</span>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase italic tracking-tighter leading-[0.8]">Transmission <br />Link</h2>
          </div>
          <span className="font-mono text-4xl opacity-10 italic font-black">03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-12">
            <p className="text-2xl font-light leading-relaxed text-brand-muted">
              I'm always interested in hearing about new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
              <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-brand-accent transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">Email Me</span>
                  <a href="mailto:kanuguptastudy@gmail.com" className="text-sm md:text-lg hover:text-brand-accent transition-colors break-all">kanuguptastudy@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-brand-accent transition-colors shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">Location</span>
                  <span className="text-sm md:text-lg leading-snug">
                    House No. 1153, Sector 10, Awas Vikas, <br />
                    Sikandra, Agra, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-8 glass p-8 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted">Name</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted">Email</label>
                <input type="email" className="bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-muted">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-accent transition-colors resize-none" />
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest py-4 border-b border-white/20 hover:border-brand-accent transition-all text-left"
            >
              Send Message
              <ArrowRight size={18} className="text-brand-accent" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
