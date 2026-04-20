"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 pt-[100px] sm:pt-[120px]">
        {/* Name */}
        <motion.h1
          {...fadeUp(0)}
          className="text-4xl lg:text-6xl font-bold text-[var(--text)] mb-2"
        >
          Tinotenda Chandengenda
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-xl text-[var(--text-muted)] mb-6"
        >
          Software Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-base text-[var(--text-muted)] w-full sm:max-w-[560px] leading-relaxed mb-8"
        >
          Software and DevOps Engineer with experience building scalable backend
          systems, web applications, and middleware integrations using Java,
          Spring Boot, Docker, and RESTful APIs. Focused on system design,
          real-world problem solving, and implementing DevOps practices for
          efficient, production-ready deployments.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          {...fadeUp(0.3)}
          href="mailto:tinochan06@gmail.com"
          className="inline-flex min-h-[44px] items-center justify-center border border-[var(--border)] rounded-full px-6 py-2 text-sm text-[var(--text)] hover:bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-all duration-200 ease-in-out"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
