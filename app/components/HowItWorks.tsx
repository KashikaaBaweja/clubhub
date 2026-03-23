"use client";

import { motion } from "framer-motion";
import { Search, PenTool, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "Browse curated events and clubs that match your campus interests.",
    icon: Search,
    color: "from-teal-400 to-teal-500"
  },
  {
    title: "Register",
    description: "Secure your spot with one-tap registration and instant QR tickets.",
    icon: PenTool,
    color: "from-emerald-400 to-emerald-500"
  },
  {
    title: "Attend",
    description: "Scan in, enjoy the event, and automatically track your achievements.",
    icon: CheckCircle,
    color: "from-teal-500 to-emerald-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#f8fafc] relative overflow-hidden noise perspective-2000">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-teal-600 text-[11px] font-black uppercase tracking-[0.3em] mb-8 border border-white shadow-sm ring-1 ring-teal-500/5">
               <span>Process</span>
            </div>
            <h2 className="mb-8 text-[#021C1E] tracking-tight">
              A Seamless <span className="text-gradient">Experience</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 font-medium text-lg leading-relaxed">
              Join the community in three simple steps. Designed to stay out of your way and keep you focused on the fun.
            </p>
          </motion.div>
        </div>

        <div className="relative h-full">
          {/* Advanced Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-slate-200/50 -z-10 overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              viewport={{ once: true }}
              className="w-full h-full bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* 3D Icon Container */}
                <div className="relative mb-12">
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-gradient-to-br ${step.color} p-[3px] shadow-2xl shadow-teal-500/20 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 hover:shadow-shadow-3d`}>
                    <div className="w-full h-full bg-white rounded-[2.35rem] flex items-center justify-center text-teal-600 shadow-inner lighting-top-left">
                      <step.icon size={40} strokeWidth={2.5} />
                    </div>
                  </div>
                  {/* Visual Step Number Overlay */}
                  <div className="absolute -top-4 -right-4 w-11 h-11 rounded-3xl bg-[#021C1E] text-white text-[12px] font-black flex items-center justify-center ring-[6px] ring-[#f8fafc] shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-[#021C1E] tracking-tight group-hover:text-teal-600 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-base font-medium leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

                {/* Arrow (Mobile) */}
                {index < 2 && (
                  <div className="md:hidden mt-8 text-slate-200">
                    <ArrowRight className="rotate-90 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


