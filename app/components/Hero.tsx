"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-20 relative min-h-[90vh] flex items-center overflow-visible bg-white">
      {/* High-Vibrancy Premium Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
           style={{
             background: `
               radial-gradient(circle at 20% 30%, rgba(2, 195, 154, 0.08), transparent 50%),
               linear-gradient(135deg, #f0fdfc 0%, #ffffff 50%, #f7fefe 100%)
             `
           }}
      />

      <div className="max-w-[1240px] mx-auto px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-11">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-[520px] mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-teal-100/50">
                <Sparkles className="w-3 h-3" />
                <span>ClubHub 1.0</span>
              </div>
              
              <h1 className="text-6xl md:text-[80px] font-black leading-[0.9] tracking-[-0.04em] text-[#021C1E] mb-8">
                Campus Life,<br />
                <span className="text-gradient">Simplified.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#6B7280] font-bold mb-3 leading-tight">
                Everything happening on campus. In one app.
              </p>
              
              <p className="text-sm font-medium text-[#9CA3AF] mb-10">
                 Built for real campus life • Used by 1,000+ students
              </p>

              <div className="flex justify-center lg:justify-start mt-5">
                <button 
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 rounded-[14px] bg-gradient-to-r from-[#008080] to-[#02C39A] text-white font-bold text-xl shadow-[0_10px_25px_rgba(2,195,154,0.3)] hover:scale-[1.05] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-10">
            {/* Specified Phone Glow - integrated atmospheric lighting */}
            <div 
              className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,128,128,0.15),transparent_70%)] filter blur-[50px] -z-10 pointer-events-none" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: 6,
                scale: 0.82,
                x: -30
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              }}
              className="relative"
            >
              {/* Main Phone Mockup */}
              <div className="relative mx-auto w-[280px] md:w-[300px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-950 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden bg-zinc-900 z-10 shrink-0">
                {/* Modern Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                   <div className="w-1 h-1 rounded-full bg-zinc-800 absolute right-4" />
                </div>
                
                <img 
                   src="/images/Dashboard.png" 
                   className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]"
                   alt="App UI"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
