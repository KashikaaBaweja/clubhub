"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const developers = [
  {
    name: "Kashika",
    role: "iOS Developer",
    bio: "Focused on building smooth, intuitive, and high-performance mobile experiences for ClubHub.",
    image: "/images/kashika.jpg",
    gradient: "from-teal-600 to-teal-800",
    linkedin: "#",
    instagram: "#",
    isFounder: true,
  },
  {
    name: "Hardik",
    role: "Full Stack Developer",
    bio: "Works on both frontend and backend to ensure seamless functionality and performance.",
    image: "/images/hardik.jpg",
    gradient: "from-teal-500 to-emerald-600",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Hemant",
    role: "Backend Developer",
    bio: "Designs APIs, manages databases, and ensures scalability of the platform.",
    image: "/images/hemant.jpg",
    gradient: "from-emerald-500 to-teal-400",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Navdeep",
    role: "UI/UX Designer",
    bio: "Creates clean, modern, and user-friendly interfaces for a great user experience.",
    image: "/images/navdeep.jpg",
    gradient: "from-teal-400 to-cyan-500",
    linkedin: "#",
    instagram: "#",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding relative overflow-hidden bg-[#F8FFFE]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-100/50">
               <span>The Team</span>
            </div>
            <h2 className="mb-6 text-[#021C1E]">
              Built by <span className="text-teal-600">Students,</span> for Students
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl bg-white border border-teal-50 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                dev.isFounder ? "border-teal-200 shadow-teal-500/5" : ""
              }`}
            >
              {/* Profile Image */}
              <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {dev.isFounder && (
                   <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-teal-600/90 backdrop-blur-sm text-[8px] font-black text-white uppercase tracking-widest z-10 shadow-sm">
                      Founder
                   </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                 <div>
                    <h4 className="text-lg font-black text-[#021C1E]">{dev.name}</h4>
                    <p className="text-[10px] font-bold text-teal-600/70 uppercase tracking-widest">{dev.role}</p>
                 </div>
                 
                 <div className="flex gap-2">
                   <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#021C1E]/30 hover:text-teal-600 transition-colors bg-teal-50/50 p-2 rounded-lg">
                      <Linkedin size={16} />
                   </a>
                   <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="text-[#021C1E]/30 hover:text-teal-600 transition-colors bg-teal-50/50 p-2 rounded-lg">
                      <Instagram size={16} />
                   </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
