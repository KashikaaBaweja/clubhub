"use client";

import Link from "next/link";
import { Users, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden bg-[#F8FFFE] border-t border-teal-500/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#008080] to-[#02C39A] flex items-center justify-center text-white">
                <Users size={18} />
              </div>
              <span className="text-xl font-black tracking-tight text-[#021C1E]">ClubHub</span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
              Empowering campus communities with modern tools for discovery, management, and growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#021C1E] font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-[#6B7280] text-sm font-medium">
              <li><Link href="#features" className="hover:text-teal-600 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-teal-600 transition-colors">How It Works</Link></li>
              <li><Link href="#team" className="hover:text-teal-600 transition-colors">Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#021C1E] font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-[#6B7280] text-sm font-medium">
              <li><Link href="/support" className="hover:text-teal-600 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link></li>
              <li><Link href="#faq" className="hover:text-teal-600 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#021C1E] font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-[#6B7280] text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy#ugc" className="hover:text-teal-600 transition-colors">UGC Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-teal-500/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9CA3AF] text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2024 ClubHub. Built for students.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-teal-400">Privacy</Link>
            <Link href="/terms" className="hover:text-teal-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
