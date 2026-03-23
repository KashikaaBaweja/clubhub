"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Settings, 
  Award, 
  Rss, 
  Bell, 
  Share2 
} from "lucide-react";

const features = [
  {
    title: "Event Discovery",
    description: "Find upcoming events happening across all clubs in your college.",
    icon: Calendar,
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  },
  {
    title: "Club Management",
    description: "Club heads can easily create events and track participation.",
    icon: Settings,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Achievements",
    description: "Earn badges for participation and leadership in your community.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Personalized Feed",
    description: "Get updates based on your interests and the clubs you follow.",
    icon: Rss,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Smart Alerts",
    description: "Stay updated with real-time notifications for new events.",
    icon: Bell,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    title: "Student Network",
    description: "Connect with students who share similar interests and goals.",
    icon: Share2,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  }
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-white noise">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#14b8a6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 text-[11px] font-black uppercase tracking-[0.3em] mb-4 border border-teal-500/20 backdrop-blur-md">
              <span>Capabilities</span>
            </div>
            <h2 className="mb-4 text-[#021C1E] tracking-tight">Everything You Need to <br /><span className="text-gradient">Stay Connected</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
              ClubHub brings all campus activities into a single, intuitive interface 
              designed for students and club leaders alike.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-2000">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02, rotateX: 2 }}
              className="group p-6 md:p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-500/20 relative overflow-hidden lighting-top-left"
            >
              {/* Inner Glow Mockup */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]`}>
                <feature.icon size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black mb-2 text-[#021C1E] tracking-tight group-hover:text-teal-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-500 text-base font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


