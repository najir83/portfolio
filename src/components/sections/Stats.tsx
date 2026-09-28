"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Code, Medal, Star, ExternalLink } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "ICPC Amritapuri",
    value: "Regionalist",
    description: "Prelims Rank 271 / 3000+ teams. Regional Rank 169 / 360 teams.",
    icon: <Trophy className="w-8 h-8 text-accent" />,
    colSpan: "col-span-1 md:col-span-2",
    image: "/icpc-amritapuri.jpg",
    link: "https://icpc.global/ICPCID/IL4F2J7H6FLO", // Replace with actual certificate link
  },
  {
    title: "LeetCode",
    value: "Guardian",
    description: "Max Rating: 2192 (Top 1.20% Globally). Rank 280 in Weekly 422.",
    icon: <Code className="w-8 h-8 text-orange-500" />,
    colSpan: "col-span-1",
    link: "https://leetcode.com/u/Najir581/",
  },
  {
    title: "Codeforces",
    value: "Expert",
    description: "Max Rating: 1692. Indian Rank < 800. Div 2 Rank 425 / 20k+.",
    icon: <Star className="w-8 h-8 text-blue-500" />,
    colSpan: "col-span-1",
    link: "https://codeforces.com/profile/Najir581",
  },
  {
    title: "CodeChef",
    value: "1850+ Rating",
    description: "Consistent performer in rated contests.",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    colSpan: "col-span-1",
    link: "https://codechef.com/users/Najir581",
  },
  {
    title: "Hackathons",
    value: "Arambh 2025",
    description: "2nd Place among 50+ participating teams.",
    icon: <Medal className="w-8 h-8 text-purple-500" />,
    colSpan: "col-span-1 md:col-span-1",
  }
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements & Stats</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-background border border-border p-6 rounded-2xl flex flex-col md:flex-row gap-6 justify-between hover:border-accent/50 transition-colors ${stat.colSpan}`}
            >
              <div className="flex flex-col justify-between flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-muted rounded-xl">
                    {stat.icon}
                  </div>
                  {stat.link && (
                    <Link href={stat.link} target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className="text-muted-foreground font-medium mb-1">{stat.title}</h3>
                  <div className="text-2xl font-bold mb-2 text-foreground font-mono">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
              
              {stat.image && (
                <div className="relative w-full md:w-48 h-48 md:h-full rounded-xl overflow-hidden shrink-0 mt-4 md:mt-0">
                  <Image 
                    src={stat.image} 
                    alt={stat.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
