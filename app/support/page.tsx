"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  ChevronDown, 
  Mail, 
  Calendar, 
  Award,
  Send,
  Users
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  {
    id: "login-account",
    icon: <Lock size={32} />,
    title: "Login & Account",
    description: "Manage your profile, password, and account security.",
    buttonText: "View FAQs",
  },
  {
    id: "events",
    icon: <Calendar size={32} />,
    title: "Events",
    description: "Learn how to discover, join, and check into events.",
    buttonText: "View FAQs",
  },
  {
    id: "badges-duty",
    icon: <Award size={32} />,
    title: "Badges & Duty Leave",
    description: "Understand achievements and the automated duty leave process.",
    buttonText: "View FAQs",
  },
];

const faqs = {
  "login-account": [
    {
      question: "Forgot your password?",
      answer: "Tap Forgot Password on the login screen and enter your registered email. A reset link will be sent instantly."
    },
    {
      question: "Can I update my email address?",
      answer: "Email changes aren’t self-service yet. Contact support and we’ll update it for you."
    }
  ],
  "events": [
    {
      question: "How do I join an event?",
      answer: "Go to the Events tab → select an event → tap Register. It will appear in your registered events."
    },
    {
      question: "How does QR check-in work?",
      answer: "Your personal QR code is available in your Profile. Show it at the event — organizers will scan it to mark your attendance."
    },
    {
      question: "My event isn’t showing up — what should I do?",
      answer: "Pull to refresh first. If it still doesn’t appear, restart the app to sync properly."
    }
  ],
  "badges-duty": [
    {
      question: "How can I earn badges?",
      answer: "Attend events in a category. After completing 20 check-ins, you unlock that category badge automatically."
    },
    {
      question: "Why is my progress not updating?",
      answer: "Only QR check-ins count toward badges — not registrations. Make sure your QR was scanned."
    },
    {
      question: "Is Duty Leave automatic?",
      answer: "Yes. Once your QR is scanned at an event, a Duty Leave request is generated and sent for approval."
    }
  ]
};

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (stateKey: string) => {
    setOpenFaq(openFaq === stateKey ? null : stateKey);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-teal-100 dark:bg-[#021C1E] dark:text-[#E6FFFA]">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white dark:from-[#021C1E] dark:to-[#021C1E]">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
              Support <span className="text-teal-600 dark:text-teal-400">Center</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-zinc-500 dark:text-teal-400/60 mb-8 max-w-2xl mx-auto">
              Welcome to the ClubHub Help Center. Browse common questions below or reach out to us anytime.
            </p>

            {/* App Details Glass Card */}
            <div className="inline-flex gap-8 p-6 glass rounded-[2.5rem] border border-teal-100/20 shadow-sm items-center">
               <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-black text-teal-600 dark:text-teal-400 mb-1">App Name</p>
                  <p className="font-bold">ClubHub</p>
               </div>
               <div className="w-px h-10 bg-teal-100/20" />
               <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-black text-teal-600 dark:text-teal-400 mb-1">Version</p>
                  <p className="font-bold">1.0</p>
               </div>
               <div className="w-px h-10 bg-teal-100/20" />
               <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-black text-teal-600 dark:text-teal-400 mb-1">Compatibility</p>
                  <p className="font-bold">iOS 17+ (iPhone)</p>
               </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.1),transparent_70%)] -z-10" />
      </section>

      {/* Category Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl shadow-zinc-200/10 group hover:border-teal-500/30 transition-all text-center flex flex-col items-center dark:bg-teal-950/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-zinc-500 dark:text-teal-100/60 mb-8 leading-relaxed">
                {cat.description}
              </p>
              <button 
                onClick={() => {
                  setActiveCategory(cat.id);
                  scrollToSection("faqs-container");
                }}
                className="mt-auto px-6 py-3 rounded-full bg-teal-600 dark:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-500/20 hover:scale-105 transition-transform"
              >
                {cat.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs-container" className="py-24 px-6 bg-zinc-50/50 dark:bg-black/10">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                 {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id ? "bg-teal-600 text-white" : "bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-teal-100/60 hover:border-teal-500/30"}`}
                    >
                      {cat.title}
                    </button>
                 ))}
                 <button 
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === null ? "bg-teal-600 text-white" : "bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-teal-100/60 hover:border-teal-500/30"}`}
                 >
                    Show All
                 </button>
              </div>
           </div>

           <div className="space-y-4">
              {Object.entries(faqs).map(([catId, items]) => (
                 (activeCategory === null || activeCategory === catId) && (
                   <div key={catId} className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 mb-6 mt-12 pl-4">
                        {categories.find(c => c.id === catId)?.title}
                      </h4>
                      {items.map((faq, idx) => {
                         const stateKey = `${catId}-${idx}`;
                         return (
                           <motion.div
                               key={stateKey}
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               className="rounded-3xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 shadow-sm overflow-hidden"
                           >
                              <button
                                onClick={() => toggleFaq(stateKey)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg hover:bg-zinc-50/50 dark:hover:bg-white/5 transition-colors"
                              >
                                {faq.question}
                                <div className={`p-1 rounded-full transition-transform ${openFaq === stateKey ? "rotate-180 bg-teal-600 text-white" : "bg-zinc-100 dark:bg-white/10 text-zinc-400 dark:text-teal-400/60"}`}>
                                   <ChevronDown size={20} />
                                </div>
                              </button>
                              <AnimatePresence>
                                {openFaq === stateKey && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-6 pt-0 text-zinc-500 dark:text-teal-100/60 leading-relaxed text-lg border-t border-zinc-50 dark:border-white/5">
                                      {faq.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                           </motion.div>
                         );
                      })}
                   </div>
                 )
              ))}
           </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="container mx-auto max-w-6xl">
           <div className="relative rounded-[3.5rem] p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row gap-20 items-center border border-[#008080]/20 shadow-2xl shadow-teal-500/5 bg-[rgba(0,128,128,0.05)] backdrop-blur-2xl">
              {/* Decorative Glows */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-100/30 rounded-full blur-[80px] -z-10" />
              
              <div className="flex-1 text-center lg:text-left">
                 <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-teal-500/10 flex items-center justify-center text-teal-600 shadow-inner">
                       <Users size={32} />
                    </div>
                 </div>
                 
                 <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#021C1E] tracking-tight">
                    Still need <span className="text-teal-600">help?</span>
                 </h2>
                 <p className="text-zinc-500 text-xl mb-12 max-w-sm mx-auto lg:mx-0 leading-relaxed">
                    Our team is here to support your campus journey. Reach out anytime.
                 </p>
                 
                 <div className="space-y-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 group">
                       <div className="w-14 h-14 rounded-2xl bg-white border border-teal-100 flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-110 transition-transform">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Direct Support</p>
                          <a href="mailto:clubhub@gmail.com" className="text-2xl font-black text-[#021C1E] hover:text-teal-600 transition-colors">
                             clubhub@gmail.com
                          </a>
                       </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-teal-50 text-zinc-500 text-sm font-bold shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       Response Time: 24–48 hours
                    </div>
                 </div>
              </div>

              <div className="w-full max-w-xl">
                 <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-teal-100 shadow-xl shadow-teal-900/5">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-2">Full Name</label>
                             <input 
                                type="text" 
                                placeholder="e.g. John Doe" 
                                className="w-full bg-slate-50 border border-teal-100 rounded-2xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none"
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-2">Email Address</label>
                             <input 
                                type="email" 
                                placeholder="john@university.edu" 
                                className="w-full bg-slate-50 border border-teal-100 rounded-2xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none"
                             />
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-2">What&apos;s the issue?</label>
                          <div className="relative">
                             <select className="w-full bg-slate-50 border border-teal-100 rounded-2xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all appearance-none cursor-pointer text-[#021C1E] font-medium outline-none">
                                <option value="" disabled selected>Select category...</option>
                                <option value="events">Events & Registrations</option>
                                <option value="clubs">Club Management</option>
                                <option value="badges">Badges & Duty Leave</option>
                                <option value="login">Login & Account</option>
                                <option value="other">Other</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-2">Message</label>
                          <textarea 
                             placeholder="Describe your issue in detail..." 
                             rows={4}
                             className="w-full bg-slate-50 border border-teal-100 rounded-2xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all resize-none outline-none"
                          ></textarea>
                       </div>

                       <button className="w-full py-5 rounded-[1.25rem] bg-gradient-to-r from-[#00A896] to-[#02C39A] text-white font-black text-lg shadow-2xl shadow-teal-500/30 hover:scale-[1.02] hover:shadow-teal-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                          <Send size={24} />
                          Send Message
                       </button>
                    </form>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
