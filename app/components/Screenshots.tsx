"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Trophy } from "lucide-react";

const previews = [
  {
    title: "Your Dashboard",
    description: "Personalized feed with upcoming events and club updates.",
    icon: <Sparkles size={20} />,
    color: "from-[#008080] to-[#00A896]",
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
    color: "from-emerald-500 to-teal-400",
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
    description: "Find your community and follow your favorite campus clubs.",
    icon: <Users size={20} />,
    color: "from-teal-600 to-teal-800",
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
    description: "Track your progress and earn badges.",
    icon: <Trophy size={20} />,
    color: "from-[#00A896] to-[#02C39A]",
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
      {/* Background Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,128,0.08),transparent_70%)] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)] whitespace-normal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">
               See ClubHub in <span className="text-teal-600">Action</span>
            </h2>
            <p>
               A beautiful, intuitive interface that makes managing campus life feel effortless.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className={`relative w-full aspect-[9/19.5] rounded-[30px] border-[6px] border-zinc-900 bg-zinc-900 shadow-[0_20px_40px_-15px_rgba(0,128,128,0.15)] overflow-hidden transition-transform duration-500 mb-8 ${preview.tilt}`}>
                {preview.ui}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Caption Card */}
              <div className="flex flex-col items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${preview.color} flex items-center justify-center text-white shadow-lg ring-4 ring-teal-50 transform group-hover:scale-110 transition-transform`}>
                  {preview.icon}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-[#021C1E] mb-2">{preview.title}</h3>
                   <p className="text-sm font-medium">
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
