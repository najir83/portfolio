"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Member of Technical Staff Intern",
    company: "GeeksforGeeks",
    location: "Greater Noida, UP",
    date: "Feb 2026 – July 2026",
    points: [
      "Architected AI-powered systems for code generation.",
      "Spearheaded an automated SQL engine using Node.js to validate string-formatted tables (100% data integrity).",
      "Optimized core features for Write and Practice Portal, increasing submission workflow efficiency by 60%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 top-1 w-10 h-10 rounded-full bg-card border border-accent hidden md:flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-accent/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="text-accent font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono flex flex-col md:items-end">
                      <span>{exp.date}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-4 text-muted-foreground">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
