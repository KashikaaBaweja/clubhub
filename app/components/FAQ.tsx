"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is ClubHub free for all students?",
    answer: "Yes, ClubHub is completely free for students. Our mission is to make campus life more accessible for everyone."
  },
  {
    question: "How can I register my club on ClubHub?",
    answer: "Club presidents can apply for listing through the 'For Club Heads' section. We verify every club to ensure authenticity."
  },
  {
    question: "Do I need a university email to sign up?",
    answer: "Yes, you need a valid university email address to ensure the platform remains a safe and exclusive space for students."
  },
  {
    question: "Can I manage multiple clubs?",
    answer: "Absolutely. If you are a head or manager for multiple clubs, you can switch between them easily within your admin dashboard."
  },
  {
    question: "Will I get notifications for event changes?",
    answer: "Yes, ClubHub sends real-time push notifications for any updates to events you have registered for."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative bg-white overflow-hidden">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-[var(--block-gap)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-100/50">
                <span>FAQ</span>
             </div>
            <h2 className="mb-6 text-[#021C1E]">Common <span className="text-gradient">Questions</span></h2>
            <p className="max-w-2xl mx-auto text-[#6B7280] font-medium">
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
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-[20px] bg-white border border-teal-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg hover:bg-teal-50/30 transition-colors text-[#021C1E]"
              >
                {faq.question}
                <div className={`p-1.5 rounded-full transition-all duration-300 ${openIndex === index ? "rotate-180 bg-[#008080] text-white" : "bg-teal-50 text-teal-600"}`}>
                   <ChevronDown size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 leading-relaxed text-[#6B7280] text-lg border-t border-teal-50/50">
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
