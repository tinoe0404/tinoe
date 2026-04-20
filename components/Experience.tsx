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
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-2xl font-semibold mb-12"
        >
          Work Experience
        </motion.h2>

        {/* Experience List */}
        <div>
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
              className={`py-8 flex flex-col sm:flex-row gap-0 sm:gap-8 ${
                i < experiences.length - 1
                  ? "border-b border-[var(--border)]"
                  : ""
              }`}
            >
              {/* Left Column */}
              <div className="w-full sm:w-48 sm:shrink-0 mb-4 sm:mb-0">
                <p className="text-sm font-semibold text-[var(--text)]">
                  {exp.company}
                </p>
                <p className="text-sm text-[var(--text-muted)]">{exp.role}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {exp.dates}
                </p>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <ul className="list-disc pl-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--text-muted)] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
