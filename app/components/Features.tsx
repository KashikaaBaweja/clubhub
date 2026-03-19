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
    description: "Find upcoming events happening across all clubs in your college. Never miss important workshops, competitions, or meetups.",
    icon: Calendar,
    color: "from-teal-600 to-emerald-500"
  },
  {
    title: "Club Management",
    description: "Club heads can easily create and manage events, track participation, and communicate with members.",
    icon: Settings,
    color: "from-teal-700 to-teal-500"
  },
  {
    title: "Achievements & Badges",
    description: "Earn badges for participation, leadership, and contributions to your campus community.",
    icon: Award,
    color: "from-teal-500 to-emerald-400"
  },
  {
    title: "Personalized Feed",
    description: "Get updates and recommendations based on your interests and the clubs you follow.",
    icon: Rss,
    color: "from-emerald-600 to-teal-500"
  },
  {
    title: "Notifications",
    description: "Stay updated with real-time notifications for new events, registrations, and announcements.",
    icon: Bell,
    color: "from-teal-400 to-emerald-300"
  },
  {
    title: "Student Networking",
    description: "Connect with students who share similar interests and build your campus network.",
    icon: Share2,
    color: "from-teal-800 to-teal-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-100/50">
              <span>Features</span>
            </div>
            <h2 className="mb-6 text-[#021C1E]">Everything You Need to <span className="text-gradient">Stay Connected</span></h2>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              ClubHub brings all campus activities into a single, intuitive interface 
              designed for students and club leaders alike.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-teal-50 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#021C1E]">{feature.title}</h3>
              <p className="text-[#6B7280] font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
