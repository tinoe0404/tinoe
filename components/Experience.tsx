"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tano Digital Solutions",
    role: "Software Developer Intern",
    dates: "Sept 2025 – Jun 2026",
    bullets: [
      "HOPIN: Developed backend functionality for a ride-sharing platform, supporting real-time application workflows, authentication, messaging, and location-based functionality.",
      "CRDB SAP-ESB: Developed and maintained financial middleware components for enterprise API integration and transaction processing.",
      "NextGen Asset Management: Developed functionality for an enterprise asset management system, including Microsoft Entra ID authentication and multi-level approval workflows.",
      "Participated across the software development lifecycle, including requirements analysis, API integration, debugging, testing, code reviews, deployment, and production support."
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
