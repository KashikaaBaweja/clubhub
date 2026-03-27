"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "President, Entrepreneurship Club",
    avatar: "/hardik_v2.png",
    quote: "ClubHub made event management effortless. Attendance doubled within weeks. A must-have for every student leader."
  },
  {
    name: "Priya Patel",
    role: "Computer Science Junior",
    avatar: "/kashika_v2.png",
    quote: "I found my best friends through clubs on ClubHub. It truly simplifies the social side of campus life."
  },
  {
    name: "Aditya Verma",
    role: "Secretary, Sports Committee",
    avatar: "/hemant_v2.png",
    quote: "No more manual logs — attendance tracking is seamless. The real-time updates are a game changer."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden noise">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle,rgba(20,184,166,0.08),transparent_70%)] blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 text-[11px] font-black uppercase tracking-[0.3em] mb-10 border border-teal-500/20 backdrop-blur-md">
               <span>Testimonials</span>
            </div>
            <h2 className="mb-8 text-[#021C1E] tracking-tight">
               What Students <span className="text-gradient">Are Saying</span>
            </h2>
            <div className="flex items-center justify-center gap-1.5 mb-8 text-[#14b8a6]">
               {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
               <span className="ml-3 text-sm font-black text-slate-400 uppercase tracking-widest leading-none">4.9 Rating • 2k+ Users</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-2000">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -15, scale: 1.03, rotateY: 2 }}
              className={`p-10 rounded-[3rem] bg-white border border-teal-500/5 shadow-[0_20px_50px_rgba(20,184,166,0.05)] flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-500/20 group relative lighting-top-left ${
                index === 1 ? "md:scale-105 z-10 ring-1 ring-teal-500/10" : ""
              }`}
            >
              {/* Floating Quote Icon */}
              <div className="mb-10 w-14 h-14 rounded-2xl bg-teal-50/50 flex items-center justify-center text-[#14b8a6] group-hover:scale-110 group-hover:-rotate-12 transition-transform shadow-inner">
                 <Quote size={24} fill="currentColor" opacity={0.2} />
              </div>
              
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 tracking-tight italic">
                "{test.quote}"
              </p>
              
              <div className="mt-auto pt-8 border-t border-slate-50 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
                   <img src={test.avatar} className="w-full h-full object-cover" alt={test.name} />
                </div>
                <div className="text-left">
                   <h4 className="text-base font-black text-[#021C1E] tracking-tight">{test.name}</h4>
                   <p className="text-[11px] text-[#14b8a6] font-black uppercase tracking-[0.2em]">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
