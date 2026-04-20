"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CashAgent",
    description:
      "A fintech cash management platform with real-time analytics and role-based access control.",
    image: "/images/project-cashagent.png",
    technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GoWild",
    description:
      "Safari adventure booking platform with destination search and wildlife-focused experiences.",
    image: "/images/project-gowild.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "JoshWires",
    description:
      "Professional electrical services website with contact management and email notifications.",
    image: "/images/project-joshwires.png",
    technologies: ["Next.js", "Tailwind CSS", "Nodemailer", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}>
                <div className="w-full lg:w-3/5 relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[var(--bg)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.liveUrl} className="px-4 py-2 text-xs font-medium bg-[var(--accent)] text-[var(--bg)] rounded-full">Live Demo</a>
                      <a href={project.githubUrl} className="px-4 py-2 text-xs font-medium border border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded-full bg-[var(--bg-card)]">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={project.liveUrl} className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors underline underline-offset-4">View project →</a>
                    <a href={project.githubUrl} className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors underline underline-offset-4">Source code →</a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
