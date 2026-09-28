"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "HR FAQ & Policy Assistant",
    description: "Engineered a high-precision RAG pipeline (Gemini 3.6 Flash) with Hybrid Search (RRF). Built AST document parsers preserving context/tables and enforced a 4-layer anti-hallucination architecture.",
    tech: ["Node.js", "Express", "Qdrant DB", "Gemini API", "RAG"],
    github: "https://github.com/najir83/Internal-HR-FAQ-Policy-Assistant/tree/main",
    live: "https://github.com/najir83/Internal-HR-FAQ-Policy-Assistant/blob/main/DESIGN.md"
  },
  {
    title: "Full-Stack AI ChatBot",
    description: "Built context-aware assistant with real-time data retrieval and streaming. Implemented usage quota system (200 req/month) and secure authentication.",
    tech: ["Next.js", "Gemini API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/najir83/ChatMe",
    live: "https://chatme-kappa.vercel.app/"
  },
  {
    title: "Full Stack Blogging App",
    description: "Developed a comprehensive blogging platform with secure auth (JWT/HTTP-only cookies), full CRUD capabilities, TinyMCE editor integration, and Cloudinary image uploads.",
    tech: ["Express.js", "React", "MongoDB", "Node.js"],
    github: "https://github.com/najir83/Blog-App",
    live: "https://blog-app-two-lime-47.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background border border-border p-6 rounded-2xl flex flex-col h-full hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <FolderGit2 size={32} />
                </div>
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                      <FaGithub size={20} />
                    </Link>
                  )}
                  {project.live !== "#" && (
                    <Link href={project.live} target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
