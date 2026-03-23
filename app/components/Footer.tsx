"use client";

import Link from "next/link";
import { Users, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 relative overflow-hidden bg-[#fcfdfd] border-t border-slate-100 noise">
      {/* Subtle depth ornament */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Users size={22} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-teal-600 transition-colors">ClubHub</span>
            </Link>
            <p className="text-slate-500 text-base font-medium leading-relaxed mb-8 max-w-[240px]">
              Empowering campus communities with modern tools for discovery and growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Platform</h4>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li><Link href="#features" className="hover:text-teal-600 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-teal-600 transition-colors">How It Works</Link></li>
              <li><Link href="#testimonials" className="hover:text-teal-600 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Resources</h4>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li><Link href="/support" className="hover:text-teal-600 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link></li>
              <li><Link href="#faq" className="hover:text-teal-600 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Legal</h4>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li><Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex justify-center items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© ClubHub. Built for the modern student.</p>
        </div>
      </div>
    </footer>
  );
}

