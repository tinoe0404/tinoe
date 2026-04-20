"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            Available for opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Tinotenda
          </span>
          <br />
          <span className="text-[var(--text-muted)]">
            Software Engineer
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Full-stack software engineer specializing in building modern, scalable
          web applications with React, Next.js, Spring Boot, and cloud
          technologies.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded-full bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] text-sm text-[var(--text)] rounded-full hover:border-[var(--text-muted)] transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[var(--border)] flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[var(--text-muted)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
