"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const developers = [
  {
    name: "Kashika",
    bio: "Focused on building smooth, intuitive, and high-performance mobile experiences for ClubHub.",
    image: "/images/kashika.png",
    linkedin: "https://www.linkedin.com/in/kashika-baweja-8ba593282",
    instagram: "https://www.instagram.com/kashikabaweja?igsh=MXR1d3NsMXY3bDVpYg%3D%3D&utm_source=qr",
  },
  {
    name: "Hardik",
    bio: "Works on both frontend and backend to ensure seamless functionality and performance.",
    image: "/images/hardik.png",
    linkedin: "https://www.linkedin.com/in/hardik6301/",
    instagram: "https://www.instagram.com/hardik__6301?igsh=d2RoNW54YnB0c3Nk",
  },
  {
    name: "Hemant",
    bio: "Designs APIs, manages databases, and ensures scalability of the platform.",
    image: "/images/hemant.png",
    linkedin: "https://www.linkedin.com/in/hemant-sardana-9b8352263/",
    instagram: "https://www.instagram.com/hemant.2416?igsh=MWtlYnZ0ZDh5MjRxZA==",
  },
  {
    name: "Navdeep",
    bio: "Creates clean, modern, and user-friendly interfaces for a great user experience.",
    image: "/images/navdeep.png",
    linkedin: "https://www.linkedin.com/in/navdeep-singh-47a538244/",
    instagram: "https://www.instagram.com/navdeepsinhmar_?igsh=MXcycjhpM2ozOGJ5cA==",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding relative overflow-hidden bg-white">
      {/* Premium Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(20,184,166,0.04),transparent_70%)] blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-[#14b8a6] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-500/10">
               <span>The Team</span>
            </div>
            <h2 className="mb-6 text-[#021C1E] tracking-tight">
              Built by <span className="text-gradient">Students,</span> for Students
            </h2>
            <p className="max-w-2xl mx-auto text-[#021C1E]/60 font-medium leading-relaxed">
              We're a group of student developers passionate about improving campus life through technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-[2.5rem] bg-white border border-teal-500/5 shadow-[0_15px_30px_rgba(20,184,166,0.04)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(20,184,166,0.12)] hover:border-teal-500/20 group"
            >
              {/* Profile Image */}
              <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-[1.8rem] bg-zinc-50 border border-zinc-200/50">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-2 mb-2">
                 <div>
                    <h4 className="text-3xl font-black text-[#021C1E] tracking-tight">{dev.name}</h4>
                 </div>
                 
                 <div className="flex gap-2">
                   <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-[#14b8a6] transition-colors p-2 rounded-xl bg-zinc-50 hover:bg-[#14b8a6]/5">
                      <Linkedin size={18} />
                   </a>
                   <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-[#14b8a6] transition-colors p-2 rounded-xl bg-zinc-50 hover:bg-[#14b8a6]/5">
                      <Instagram size={18} />
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
