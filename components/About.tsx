"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-2xl font-semibold mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-12">
          {/* Left Column (Text + Socials) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="flex-1"
          >
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-md">
              I&apos;m Tinotenda Chandengenda, a Software and DevOps Engineer
              based in Harare, Zimbabwe. I&apos;m passionate about building
              real-world systems that are scalable, maintainable, and
              production-ready. My work spans backend development with Java and
              Spring Boot, full-stack web apps with Next.js and NestJS, and
              DevOps pipelines using Docker and GitHub Actions. I&apos;m
              currently interning at Tano Digital Group while pursuing my degree
              at Harare Institute of Technology, and I take on freelance client
              projects on the side.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://github.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors w-fit py-2"
              >
                <span>↗</span> GitHub
              </a>
              <a
                href="https://linkedin.com/in/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors w-fit py-2"
              >
                <span>↗</span> LinkedIn
              </a>
              <a
                href="https://twitter.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors w-fit py-2"
              >
                <span>↗</span> Twitter
              </a>
            </div>
          </motion.div>

          {/* Right Column (Photo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
            className="w-full sm:w-[280px] shrink-0 max-w-xs mx-auto sm:mx-0"
          >
            <Image
              src="/images/avatar-big.jpg"
              alt="Tinotenda Chandengenda"
              width={280}
              height={350}
              unoptimized={true}
              className="rounded-lg border border-[var(--border)] object-cover object-top w-full sm:w-[280px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
