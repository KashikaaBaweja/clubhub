"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-white noise">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-6xl mx-auto rounded-[4rem] p-16 md:p-24 overflow-hidden text-center text-white shadow-[0_60px_100px_-20px_rgba(20,184,166,0.4)]"
          style={{
            background: `
              radial-gradient(circle at 10% 10%, rgba(20, 184, 166, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
              #01191a
            `
          }}
        >
          {/* Glass Overlay for depth */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tighter text-white drop-shadow-2xl">
                Your Campus Life,<br />
                <span className="text-[#34d399] italic">Reimagined.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 font-medium mb-16 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                Join 2,000+ students already building their future on ClubHub.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link 
                  href="/#features"
                  className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-600 hover:from-teal-300 hover:to-emerald-500 text-white font-black text-2xl shadow-[0_20px_50px_rgba(20,184,166,0.4)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/20 active:scale-95 flex items-center justify-center"
                >
                  Download App
                </Link>
                <Link 
                  href="/#faq"
                  className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-white/5 hover:bg-white/10 text-white font-black text-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  View FAQ
                </Link>
              </div>
              
              <div className="mt-16 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-white/30">
                 <div className="w-12 h-px bg-white/10" />
                 Available on iOS & Android
                 <div className="w-12 h-px bg-white/10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
    </section>
  );
}

