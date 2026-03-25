import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
           <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-[#021C1E]">
                Get in <span className="text-gradient">Touch.</span>
              </h1>
              <p className="text-xl md:text-[26px] font-bold text-slate-500 mb-12 leading-relaxed tracking-tight">
                Have questions about ClubHub? Whether you&apos;re a student, club leader, or university official, we&apos;re here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                   </div>
                    <div>
                      <h4 className="text-lg font-black text-[#021C1E]">Email Us</h4>
                      <p className="text-slate-500 font-medium italic">General: info@clubhub.com</p>
                      <p className="text-[#14b8a6] font-bold">Support: support@clubhub.com</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-[#021C1E]">Live Chat</h4>
                      <p className="text-zinc-500 font-medium">Available in-app for verified club heads and administrators.</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-[#021C1E]">Campus Presence</h4>
                      <p className="text-zinc-500 font-medium">Expanding to universities across the country. Check if we&apos;re at yours!</p>
                   </div>
                </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 w-full">
              <div className="p-10 md:p-12 rounded-[3.5rem] bg-teal-50 border border-teal-100 shadow-sm relative overflow-hidden">
                 <h3 className="text-2xl font-black mb-8 text-[#021C1E]">Send a Quick Message</h3>
                 <div className="space-y-6">
                    <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-[#021C1E]/50 mb-2 pl-2">Your Name</label>
                       <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-medium" placeholder="E.g. Rahul Sharma" />
                    </div>
                    <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-[#021C1E]/50 mb-2 pl-2">Email Address</label>
                       <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-medium" placeholder="rahul@university.edu" />
                    </div>
                    <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-[#021C1E]/50 mb-2 pl-2">How can we help?</label>
                       <textarea className="w-full px-6 py-4 rounded-2xl bg-white border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-medium min-h-[150px]" placeholder="Tell us about your inquiry..." />
                    </div>
                    <button className="w-full py-6 rounded-2xl bg-[#021C1E] text-white font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-teal-900/10">
                       Send Message
                    </button>
                 </div>
                 
                 {/* Soft glow accent */}
                 <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-200 rounded-full blur-[100px] opacity-30 -z-10" />
              </div>
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
