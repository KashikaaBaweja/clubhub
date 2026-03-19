"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="relative px-10 py-15 rounded-[28px] overflow-hidden shadow-2xl"
             style={{
               background: `
                 radial-gradient(circle at 30% 20%, rgba(2, 195, 154, 0.15), transparent 40%),
                 linear-gradient(135deg, #012f2f 0%, #014d4d 50%, #012f2f 100%)
               `
             }}>
          
          {/* Subtle Atmospheric Glow - Game Changer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[radial-gradient(circle,rgba(2,195,154,0.2),transparent_70%)] filter blur-[60px] pointer-events-none" />
          
          <div className="max-w-[600px] mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter leading-[1.05]">
                Your Campus,<br />
                One Tap Away.
              </h2>
              <p className="text-white/60 mb-10 text-xl font-medium leading-relaxed">
                Download ClubHub today and dive into the most vibrant university experience of your life.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button className="px-10 py-5 rounded-xl bg-gradient-to-r from-[#00a884] to-[#02c39a] text-white font-bold text-xl shadow-[0_10px_25px_rgba(2,195,154,0.3)] hover:scale-[1.05] active:scale-[0.98] transition-all w-full sm:w-auto">
                    Download App
                 </button>
                 <button className="px-10 py-5 rounded-xl border border-white/20 bg-transparent text-white font-bold text-xl hover:bg-white/5 transition-all w-full sm:w-auto">
                    View FAQ
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
