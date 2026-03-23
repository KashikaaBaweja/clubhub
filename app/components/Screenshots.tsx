"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Trophy } from "lucide-react";

const previews = [
  {
    title: "Your Dashboard",
    description: "Personalized feed with upcoming events and club updates.",
    icon: <Sparkles size={20} />,
    color: "from-[#14b8a6] to-[#10b981]",
    tilt: "rotate-[-4deg] translate-y-4",
    z: "z-10",
    ui: (
      <img 
        src="/images/Dashboard.png" 
        alt="Home Dashboard" 
        className="w-full h-full object-cover"
      />
    )
  },
  {
    title: "Discover Events",
    description: "Browse all campus events in one place.",
    icon: <Calendar size={20} />,
    color: "from-[#10b981] to-[#34d399]",
    tilt: "rotate-[2deg] -translate-y-4",
    z: "z-20",
    ui: (
      <img 
        src="/images/Events.png" 
        alt="Events List" 
        className="w-full h-full object-cover"
      />
    )
  },
  {
    title: "Join Clubs",
    description: "Find your community and follow your favorite clubs.",
    icon: <Users size={20} />,
    color: "from-[#0d9488] to-[#14b8a6]",
    tilt: "rotate-[-2deg] translate-y-2",
    z: "z-10",
    ui: (
      <img 
        src="/images/clubs.png" 
        alt="Clubs Directory" 
        className="w-full h-full object-cover"
      />
    )
  },
  {
    title: "Track Progress",
    description: "Track your progress and earn achievement badges.",
    icon: <Trophy size={20} />,
    color: "from-[#00A896] to-[#01BAEF]",
    tilt: "rotate-[4deg] translate-y-6",
    z: "z-0",
    ui: (
      <img 
        src="/images/badges.png" 
        alt="Achievement Badges" 
        className="w-full h-full object-cover"
      />
    )
  }
];

export default function AppPreview() {
  return (
    <section id="screenshots" className="section-padding relative overflow-hidden bg-white">
      {/* Background Section Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(1,186,239,0.04),transparent_70%)] blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,184,166,0.06),transparent_70%)] blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)] whitespace-normal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-[#14b8a6] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-500/10">
               <span>Interface</span>
            </div>
            <h2 className="mb-6 text-[#021C1E] tracking-tight">
               Built for <span className="text-gradient">Engagement</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#021C1E]/60 font-medium leading-relaxed">
               A beautiful, intuitive interface that makes managing campus life feel effortless.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {previews.map((preview, index) => (
            <motion.div
              key={preview.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Phone Mockup Frame */}
              <div className={`relative w-full aspect-[9/19.5] rounded-[2.5rem] border-[8px] border-zinc-950 bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-500 mb-10 ${preview.tilt}`}>
                {preview.ui}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Caption Card */}
              <div className="flex flex-col items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${preview.color} flex items-center justify-center text-white shadow-lg ring-8 ring-teal-500/5 transform group-hover:scale-110 transition-transform`}>
                  {preview.icon}
                </div>
                <div>
                   <h3 className="text-xl font-black text-[#021C1E] mb-2 tracking-tight">{preview.title}</h3>
                   <p className="text-sm font-medium text-[#021C1E]/50 leading-relaxed px-4">
                      {preview.description}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
