"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar, Ticket, Award } from "lucide-react";
import Link from "next/link";

export default function AppStoreExport() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 overflow-visible" style={{
      background: "linear-gradient(180deg, #F8FFFE 0%, #EAFDFC 100%)"
    }}>
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10" style={{
        background: "radial-gradient(circle at 50% 50%, rgba(0,168,150,0.1), transparent 60%)"
      }} />

      <div className="container mx-auto px-6 max-w-7xl pt-20 overflow-visible">
        <div className="flex flex-col items-center text-center gap-16 overflow-visible">
          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-8xl md:text-[10rem] font-black mb-8 leading-[0.9] tracking-tighter text-[#021C1E]">
              Campus Life.<br />
              <span className="text-teal-600">Simplified.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-zinc-500/80 mb-12 font-semibold max-w-2xl mx-auto">
              Discover events, join clubs, and track your journey — all in one place.
            </p>

            <Link 
              href="/"
              className="inline-flex px-12 py-6 rounded-[2rem] bg-gradient-to-r from-[#008080] to-[#00A896] text-white font-black text-2xl shadow-[0_25px_50px_-12px_rgba(0,128,128,0.4)] hover:scale-[1.05] transition-all items-center gap-4"
            >
              Explore Features
              <ArrowRight size={28} />
            </Link>
          </motion.div>

          {/* Centered Phone Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative translate-y-10"
          >
             {/* Phone Shadow Depth */}
             <div className="absolute inset-0 bg-black/20 blur-[100px] rounded-[4.5rem] translate-y-20 -z-10" />

             {/* iPhone 17 Pro Style Frame */}
             <div className="relative w-[340px] md:w-[450px] aspect-[9/19.5] rounded-[4.5rem] border-[12px] border-zinc-900 shadow-[0_40px_80px_rgba(0,0,0,0.25),0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden bg-white transition-transform duration-1000">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-8 bg-zinc-900 flex justify-center z-20">
                  <div className="w-28 h-4 bg-zinc-950 rounded-full mt-2" />
                </div>
                
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none z-20" />

                {/* Dashboard Screenshot */}
                <img 
                  src="/images/Dashboard.png" 
                  className="w-full h-full object-cover" 
                  alt="ClubHub Dashboard" 
                />
             </div>

             {/* Minimal Product Pop (Clean Icon Pills) */}
             <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-16 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-teal-50 shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-30 flex items-center gap-3"
              >
                <div className="flex items-center justify-center text-teal-600">
                   <Calendar size={22} />
                </div>
                <span className="text-lg font-black text-[#021C1E]">Next</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/4 -left-16 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-teal-50 shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-30 flex items-center gap-3"
              >
                <div className="flex items-center justify-center text-teal-600">
                   <Ticket size={22} />
                </div>
                <span className="text-lg font-black text-[#021C1E]">Join</span>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
