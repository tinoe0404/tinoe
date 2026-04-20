"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CashAgent",
    description: "A personal finance tracker with transaction categories, PIN lock security, and soft-delete. Built with Next.js 15, Neon PostgreSQL, Drizzle ORM, and Tailwind CSS.",
    image: "/images/project-cashagent.png",
    source: "https://github.com/tinochandengenda",
    preview: "https://cashagent.vercel.app"
  },
  {
    title: "Go Wild Tours",
    description: "A full safari tourism website featuring a custom CSS design system with earth tones, Framer Motion animations, and a structured Destinations section.",
    image: "/images/project-gowild.png",
    source: "https://github.com/tinochandengenda",
    preview: "https://gowildtours.vercel.app"
  },
  {
    title: "Joshwires",
    description: "A professional business website for a wire mesh and fencing company, built to world-class UI/UX standards with Next.js and Tailwind CSS.",
    image: "/images/project-joshwires.png",
    source: "https://github.com/tinochandengenda",
    preview: "https://josh-wires.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-card)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-2xl font-semibold mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full rounded-lg border border-[var(--border)] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized={true}
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-semibold text-[var(--text)] mt-4">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Links Row */}
              <div className="mt-3 flex gap-4">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] underline-offset-4 hover:underline hover:text-[var(--text)] transition-colors"
                >
                  Source
                </a>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] underline-offset-4 hover:underline hover:text-[var(--text)] transition-colors"
                >
                  Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
