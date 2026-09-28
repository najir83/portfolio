"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "HTML/CSS", "JavaScript", "Java", "SQL"]
  },
  {
    title: "Frameworks & Tech",
    skills: ["Spring", "Node.js", "React.js", "Next.js", "Langchain", "Express.js", "Tailwind CSS", "JWT", "Redux"]
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "QdrantDB", "AWS", "Vercel", "Git", "Postman", "Cloudinary", "Gemini-AI", "OpenAI"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms","Computer Networks", "System Design", "Linux", "Operating System", "Database Management System"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-sm font-mono rounded-lg bg-card border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Leadership Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4">Education & Leadership</h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <GraduationCap size={100} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">B.Tech in Computer Science</h3>
                  <p className="text-accent font-medium mb-4">Jalpaiguri Government Engineering College</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground font-mono">
                    <span>Aug 2023 - June 2027</span>
                    <span className="hidden sm:block">•</span>
                    <span className="font-semibold text-foreground">CGPA: 8.52</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Users size={100} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Leadership & Mentorship</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-accent mt-1">•</span>
                      <p className="text-muted-foreground"><strong className="text-foreground">GDSC DSA & CP Lead:</strong> Mentored 200+ students in Data Structures, Algorithms, and Competitive Programming.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent mt-1">•</span>
                      <p className="text-muted-foreground"><strong className="text-foreground">Divide & Conquer:</strong> Core Member organizing tech events and coding contests.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent mt-1">•</span>
                      <p className="text-muted-foreground"><strong className="text-foreground">Postman Student Expert:</strong> Recognized for API literacy and educating peers on API development.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
