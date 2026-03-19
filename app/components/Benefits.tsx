"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Users, Shield, Globe } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Boost Your Profile", text: "Showcase your campus activity on your digital resume automatically." },
  { icon: Zap, title: "Instant Notifications", text: "Never miss a deadline or an event registration opening again." },
  { icon: Users, title: "Professional Network", text: "Connect with like-minded students and potential employers." },
  { icon: Shield, title: "Verified Attendance", text: "Get official attendance proof directly within the app." },
  { icon: Globe, title: "Campus-wide Access", text: "Find clubs beyond your department and broaden your horizons." },
  { icon: CheckCircle2, title: "Easy Registration", text: "One-tap registration for any event across campus." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center md:max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">ClubHub</span>?</h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              We've built a platform that solves the common frustrations of 
              campus life, making engagement seamless and rewarding.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <benefit.icon className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground/50 leading-relaxed text-sm">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
