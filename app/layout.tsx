import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ClubHub | Your Campus Clubs, All in One Place",
  description: "ClubHub makes it easy for students to discover events, join clubs, track achievements, and stay connected with their campus community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-foreground relative`}
      >
        {/* Global Premium Ambiance - High-Vibrancy Layered Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
           {/* Top Left: Warm Emerald */}
           <div className="absolute top-[-20%] left-[-15%] w-[70%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(2,195,154,0.18)_0%,transparent_70%)] blur-[120px]" />
           
           {/* Center Right: Deep Teal */}
           <div className="absolute top-[20%] right-[-15%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(0,168,150,0.12)_0%,transparent_70%)] blur-[120px]" />
           
           {/* Mid Left: Cyan Depth */}
           <div className="absolute top-[50%] left-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(1,186,239,0.08)_0%,transparent_70%)] blur-[120px]" />
           
           {/* Bottom Right: Emerald Power */}
           <div className="absolute bottom-[-10%] right-[10%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(2,195,154,0.1)_0%,transparent_70%)] blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
