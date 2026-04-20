"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Building end-to-end web applications for clients using React, Next.js, and Spring Boot. Delivering responsive, high-performance solutions with modern UI/UX standards.",
    technologies: ["React", "Next.js", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Company",
    period: "2023 — 2024",
    description:
      "Contributed to enterprise-grade applications, implemented RESTful APIs, and collaborated with cross-functional teams in an agile environment.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Git"],
  },
  {
    role: "Computer Science Student",
    company: "University",
    period: "2021 — Present",
    description:
      "Pursuing a degree in Computer Science with focus on software engineering, data structures, algorithms, and modern web technologies.",
    technologies: ["Python", "Java", "C++", "Algorithms", "Data Structures"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300" />

                <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--text-muted)]/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded-md bg-[var(--bg)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
