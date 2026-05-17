"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tano Digital Group",
    role: "Software Engineer Intern",
    dates: "2025 — Present",
    bullets: [
      "Working on backend systems and API integrations using Java and Spring Boot in a production environment.",
      "Collaborating with the team on DevOps workflows including Docker containerization and GitHub Actions CI/CD pipelines.",
      "Contributing to middleware integrations and RESTful API development for client-facing applications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
        >
          Work Experience
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut" as const,
              }}
              className="glass-card rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left Column */}
                <div className="w-full sm:w-1/3 shrink-0">
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-base text-[var(--accent)] font-medium mb-2">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] font-mono">
                    {exp.dates}
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-1">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed flex items-start"
                      >
                        <span className="text-[var(--accent)] mr-3 mt-1.5 opacity-50 text-xs">
                          ▹
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
