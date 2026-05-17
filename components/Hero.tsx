"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto px-6 pt-[100px] sm:pt-[120px] relative z-10">
        {/* Name */}
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Tinotenda Chandengenda
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-xl md:text-2xl font-medium text-[var(--text)] mb-6"
        >
          Software Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-base md:text-lg text-[var(--text-muted)] w-full sm:max-w-[600px] leading-relaxed mb-10"
        >
          Software and DevOps Engineer with experience building scalable backend
          systems, web applications, and middleware integrations using Java,
          Spring Boot, Docker, and RESTful APIs. Focused on system design,
          real-world problem solving, and implementing DevOps practices for
          efficient, production-ready deployments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:tinochan06@gmail.com"
            className="inline-flex min-h-[48px] items-center justify-center bg-[var(--accent)] text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-blue-600 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-[48px] items-center justify-center glass rounded-full px-8 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-card)] transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
