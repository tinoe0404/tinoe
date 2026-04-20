"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Spring Boot", "Java", "Node.js", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"] },
  { category: "DevOps", items: ["Docker", "Git", "CI/CD", "Vercel", "AWS"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 block">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A bit about me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border)]">
              <Image src="/images/avatar-big.jpg" alt="Tinotenda Chandengenda" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-3/5 space-y-6"
          >
            <p className="text-[var(--text-muted)] leading-relaxed">
              I&apos;m Tinotenda Chandengenda, a full-stack software engineer passionate about building digital products that are both functional and beautiful. I enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or diving into system design concepts. I believe in writing clean, maintainable code and continuously learning.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <h4 className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded-md bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
