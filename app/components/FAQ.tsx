"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is ClubHub free for all students?",
    answer: "Yes, ClubHub is completely free for students. Our mission is to make campus life more accessible and connected for everyone."
  },
  {
    question: "How can I register my club on ClubHub?",
    answer: "Club presidents can apply for listing through the 'For Club Heads' section. We verify every club to ensure authenticity and safety for all students."
  },
  {
    question: "Do I need a university email to sign up?",
    answer: "Yes, you need a valid university email address to ensure the platform remains a safe and exclusive space for the campus community."
  },
  {
    question: "Can I manage multiple clubs?",
    answer: "Absolutely. If you are a leader of multiple clubs, you can switch between them easily within your centralized admin dashboard."
  },
  {
    question: "Will I get notifications for event changes?",
    answer: "Yes, ClubHub sends real-time push notifications for any updates to events you have registered for or clubs you follow."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative bg-white overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,184,166,0.06),transparent_70%)] blur-[120px] -z-10" />

      <div className="container-custom max-w-4xl">
        <div className="text-center mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-[#14b8a6] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-500/10">
                <span>Support</span>
             </div>
            <h2 className="mb-6 text-[#021C1E] tracking-tight">FAQ&apos;s or <span className="text-gradient">Frequently Asked Questions</span></h2>
            <p className="max-w-2xl mx-auto text-[#021C1E]/60 font-medium leading-relaxed">
              Everything you need to know about the product and how it works.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[1.5rem] bg-white border border-teal-500/5 overflow-hidden shadow-[0_10px_30px_rgba(20,184,166,0.02)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)] transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-8 text-left flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-4">
                   <HelpCircle className={`text-[#14b8a6] opacity-20 group-hover:opacity-40 transition-opacity ${openIndex === index ? "opacity-100" : ""}`} size={20} />
                   <span className="font-bold text-lg text-[#021C1E] tracking-tight">{faq.question}</span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "rotate-180 bg-[#14b8a6] text-white shadow-lg" : "bg-teal-50/50 text-zinc-400 group-hover:bg-[#14b8a6]/10 group-hover:text-[#14b8a6]"}`}>
                   <ChevronDown size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 leading-relaxed text-[#021C1E]/50 font-medium text-lg border-t border-zinc-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
