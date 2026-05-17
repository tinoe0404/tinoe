"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-[var(--text)]"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column (Text + Socials) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="flex-1"
          >
            <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-lg mb-8">
              I&apos;m <span className="text-[var(--text)] font-medium">Tinotenda Chandengenda</span>, a Software and DevOps Engineer
              based in Harare, Zimbabwe. I&apos;m passionate about building
              real-world systems that are scalable, maintainable, and
              production-ready. My work spans backend development with Java and
              Spring Boot, full-stack web apps with Next.js and NestJS, and
              DevOps pipelines using Docker and GitHub Actions. I&apos;m
              currently interning at Tano Digital Group while pursuing my degree
              at Harare Institute of Technology, and I take on freelance client
              projects on the side.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                <span>↗</span> GitHub
              </a>
              <a
                href="https://linkedin.com/in/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                <span>↗</span> LinkedIn
              </a>
              <a
                href="https://twitter.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                <span>↗</span> Twitter
              </a>
            </div>
          </motion.div>

          {/* Right Column (Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
            className="w-full md:w-[300px] shrink-0 mx-auto md:mx-0 relative group"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl group-hover:bg-blue-500/30 transition-all duration-500 -z-10"></div>
            <Image
              src="/images/avatar-big.jpg"
              alt="Tinotenda Chandengenda"
              width={300}
              height={400}
              sizes="(max-width: 768px) 100vw, 300px"
              className="rounded-2xl border border-[var(--border)] object-cover object-top w-full md:w-[300px] h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
