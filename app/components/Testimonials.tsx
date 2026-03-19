"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "President, Entrepreneurship Club",
    avatar: "/images/hardik.jpg",
    quote: "ClubHub made event management effortless. Attendance doubled within weeks."
  },
  {
    name: "Priya Patel",
    role: "Computer Science Junior",
    avatar: "/images/kashika.jpg",
    quote: "I found my best friends through clubs on ClubHub."
  },
  {
    name: "Aditya Verma",
    role: "Secretary, Sports Committee",
    avatar: "/images/hemant.jpg",
    quote: "No more manual logs — attendance tracking is seamless."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center md:max-w-3xl mx-auto mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-6 border border-teal-100/50">
              <span className="text-xl">⭐</span> 4.8 rating from 1,000+ students
            </div>
            <h2 className="mb-6 text-[#021C1E]">What Students <span className="text-gradient">Are Saying</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl bg-white border border-teal-50 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 ${
                index === 1 ? "md:scale-105 z-10 border-teal-100 shadow-teal-500/5 shadow-22xl" : ""
              }`}
            >
              <div className="mb-6 p-2 rounded-full bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
                 <Quote size={20} />
              </div>
              <p className="font-semibold mb-8 italic text-[#021C1E]/80 leading-relaxed text-center">
                "{test.quote}"
              </p>
              <div className="mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden mb-4 mx-auto border-2 border-teal-100 shadow-sm">
                   <img src={test.avatar} className="w-full h-full object-cover" alt={test.name} />
                </div>
                <h4 className="text-lg font-black text-[#021C1E]">{test.name}</h4>
                <p className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
