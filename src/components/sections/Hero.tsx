"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Code2, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const roles = ["Full-Stack Developer", "Competitive Programmer", "AI Backend Enthusiast"];
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-medium tracking-wide mb-4">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Sk Najir.
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            I build intelligent & scalable systems.
          </h3>
          
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 h-8 font-mono">
             Full-Stack Developer | Competitive Programmer | AI Backend Enthusiast
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="#projects"
              className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="mailto:sk.najir8392@gmail.com"
              className="px-8 py-3 rounded-full border border-border bg-card/50 hover:bg-border/50 text-foreground font-semibold transition-all flex items-center gap-2"
            >
              Contact Me
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <SocialLink href="https://linkedin.com/in/sk-najir-0b0177285" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            <SocialLink href="https://github.com/najir83" icon={<FaGithub size={24} />} label="GitHub" />
            <SocialLink href="https://leetcode.com/u/Najir581/" icon={<Code2 size={24} />} label="LeetCode" />
            <SocialLink href="https://codeforces.com/profile/Najir581" icon={<span className="font-bold font-serif text-xl">CF</span>} label="Codeforces" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-all shadow-sm"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
