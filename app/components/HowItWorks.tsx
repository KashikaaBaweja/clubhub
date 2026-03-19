"use client";

import { motion } from "framer-motion";
import { Users, Ticket, Smartphone, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    label: "Start",
    title: "Quick Setup",
    description: "Download and create your profile in seconds.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-teal-600 to-teal-800"
  },
  {
    number: "2",
    label: "Discover",
    title: "Find Your Tribe",
    description: "Browse 100+ clubs matching your interests.",
    icon: <Users className="w-8 h-8" />,
    color: "from-teal-500 to-emerald-600",
    isFeatured: true
  },
  {
    number: "3",
    label: "Join",
    title: "Register Early",
    description: "Register for events with just one tap.",
    icon: <Ticket className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400",
    isFeatured: true
  },
  {
    number: "4",
    label: "Grow",
    title: "Get Rewarded",
    description: "Earn badges and climb the leaderboard.",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-teal-400 to-cyan-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-[#F8FFFE]/50">
      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-100/50">
               <span>Journey</span>
            </div>
            <h2 className="mb-6 text-[#021C1E]">
              A Student's <span className="text-gradient">Journey</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#6B7280] font-medium">
              Simple, intuitive, and designed to make your campus life effortless.
            </p>
          </motion.div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Visual Connectors (Desktop only) */}
          <div className="hidden lg:block absolute top-[40%] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`relative group h-full ${step.isFeatured ? "lg:scale-105 z-10" : ""}`}
            >
              <div className="p-8 rounded-3xl bg-white border border-teal-50 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 h-full relative overflow-hidden">
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-black text-[10px] shadow-sm">
                  {step.number}
                </div>

                {/* Journey Label */}
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600/40 mb-8 mt-4">
                   {step.label}
                </div>
                
                {/* Icon with Glow */}
                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg`}
                >
                   {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#021C1E]">{step.title}</h3>
                <p className="text-sm font-medium text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile/Tablet Arrow icon for flow */}
                <div className="lg:hidden mt-6 text-teal-200">
                  <ArrowRight className="mx-auto rotate-90 md:rotate-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
