"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Terminal, Trophy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "AI Backend Enthusiast",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1800;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          role.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Opportunities & Internships
            </div>

            <h2 className="text-muted-foreground text-lg md:text-xl font-medium mb-2">
              Hi, I&apos;m
            </h2>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
              Sk <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-cyan-400">Najir</span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground min-h-[40px] mb-6">
              <Terminal className="w-6 h-6 text-accent shrink-0" />
              <span className="text-foreground font-semibold">{currentText}</span>
              <span className="w-2 h-6 bg-accent animate-pulse inline-block" />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              B.Tech CSE student at JGEC building high-performance AI systems,
              distributed backend services, and scalable web applications with a strong
              algorithmic foundation.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#projects"
                className="px-7 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-accent/20 group cursor-pointer"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="mailto:sk.najir8392@gmail.com"
                className="px-7 py-3 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-accent/40 text-foreground font-semibold transition-all duration-200 flex items-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://github.com/najir83"
                icon={<FaGithub size={20} />}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/sk-najir-0b0177285"
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://leetcode.com/u/Najir581/"
                icon={<Code2 size={20} />}
                label="LeetCode"
              />
              <SocialLink
                href="https://codeforces.com/profile/Najir581"
                icon={<span className="font-bold font-mono text-sm">CF</span>}
                label="Codeforces"
              />
            </div>
          </motion.div>

          {/* Right Column: Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent via-cyan-500 to-emerald-400 rounded-3xl blur-lg opacity-40 hover:opacity-75 transition duration-500" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border bg-card shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Sk Najir"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge: LeetCode Guardian */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-background/95 backdrop-blur-md border border-border px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                  <Sparkles size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted-foreground font-mono">LeetCode</div>
                  <div className="text-xs font-bold text-foreground font-mono">Guardian (2192)</div>
                </div>
              </motion.div>

              {/* Floating Badge: ICPC Regionalist */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-background/95 backdrop-blur-md border border-border px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                  <Trophy size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted-foreground font-mono">ICPC 2025</div>
                  <div className="text-xs font-bold text-foreground font-mono">Regionalist</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-card/80 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all shadow-sm"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
