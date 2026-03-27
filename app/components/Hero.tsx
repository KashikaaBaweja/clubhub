"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for the phone group
  const groupRotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const groupRotateY = useTransform(smoothX, [-500, 500], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const phones = [
    { 
      image: "/images/Dashboard.png", 
      rotate: -15, 
      x: -480, 
      z: 10, 
      scale: 0.8,
      delay: 0.2,
      opacity: 1
    },
    { 
      image: "/images/Events.png", 
      rotate: -5, 
      x: -160, 
      z: 30, 
      scale: 0.95,
      delay: 0,
      opacity: 1
    },
    { 
      image: "/images/clubs.png", 
      rotate: 5, 
      x: 160, 
      z: 30, 
      scale: 0.95,
      delay: 0.4,
      opacity: 1
    },
    { 
      image: "/images/badges.png", 
      rotate: 15, 
      x: 480, 
      z: 10, 
      scale: 0.8,
      delay: 0.6,
      opacity: 1
    }
  ];

  return (
    <section id="home" className="pt-24 pb-0 md:pt-32 md:pb-0 relative min-h-screen flex flex-col items-center overflow-hidden bg-white perspective-2000" ref={containerRef}>
      
      {/* Refined Background System */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Subtle Dot Grid */}
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(#14b8a6 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />
        
        {/* Animated Atmospheric Glows - Replaced greyish subtle glow with vibrant teal-green gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_-10%,rgba(20,184,166,0.2),rgba(52,211,153,0.1),transparent_70%)]" />
        <div className="absolute top-[20%] left-0 w-full h-full bg-[radial-gradient(circle_at_0%_30%,rgba(20,184,166,0.05),transparent_50%)]" />
        <div className="absolute top-[20%] right-0 w-full h-full bg-[radial-gradient(circle_at_100%_30%,rgba(52,211,153,0.05),transparent_50%)]" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mb-8"
        >
          <h1 className="mb-8 text-5xl md:text-8xl font-black text-[#021C1E] tracking-[-0.04em] leading-[0.95] outline-none">
            Campus Life,<br />
            <span className="text-gradient">Simplified.</span>
          </h1>
          
          <p className="text-xl md:text-[26px] font-bold mb-5 text-slate-500 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Discover events, join clubs, and build your campus journey — all in one spatial place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <button 
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-premium bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 text-white min-w-[220px] group shadow-[0_20px_40px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_50px_rgba(20,184,166,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
               <span className="relative z-10 flex items-center justify-center gap-3">
                 Launch App
                 <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
               </span>
               <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
             <button 
               onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
               className="px-10 py-4 rounded-full font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-300 border border-teal-500/10 backdrop-blur-sm"
             >
               Explore Features
             </button>
          </div>
        </motion.div>

        {/* 3-Phone Interactive Composition */}
        <motion.div
          style={{ 
            rotateX: groupRotateX, 
            rotateY: groupRotateY,
          }}
          className="relative w-full max-w-[1400px] h-[500px] md:h-[550px] flex justify-center items-end mt-24 md:mt-32 px-4 pb-0 z-0"
        >
          {phones.map((phone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: phone.rotate, x: phone.x * 0.5 }}
              animate={{ opacity: phone.opacity, y: 0, rotate: phone.rotate, x: phone.x }}
              transition={{ 
                duration: 0.8, 
                delay: phone.delay * 0.5,
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ 
                zIndex: phone.z,
                scale: phone.scale,
              }}
              className="absolute group"
            >
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.5
                }}
                className="relative"
              >
                <div className="relative w-[240px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] md:rounded-[3.5rem] border-[10px] md:border-[12px] border-zinc-950 bg-zinc-900 overflow-hidden ring-1 ring-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Glass Shine */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20" />
                  
                  {/* Dynamic Island Pill */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-30 flex items-center justify-center border border-white/10 shadow-sm">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-zinc-800 rounded-full mr-2" />
                    <div className="w-6 md:w-8 h-1 rounded-full bg-zinc-800" />
                  </div>
                  
                  <Image 
                    src={phone.image} 
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                    alt={`App Screen ${idx + 1}`}
                    width={400}
                    height={860}
                    priority={idx < 4}
                  />
                </div>
                
                {/* Subtle Teal Reflection/Glow below each phone */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-teal-500/20 blur-3xl rounded-full -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



