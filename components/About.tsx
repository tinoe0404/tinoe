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

        

        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-12 items-center md:items-start">
          {/* Left Column (Text + Socials) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="flex-1 w-full text-center md:text-left"
          >
            <div className="text-base md:text-lg text-[var(--text-muted)] leading-loose md:leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 space-y-4">
              <p>
                I&apos;m <span className="text-[var(--text)] font-medium">Tinotenda Chandengenda</span>, a final-year Software Engineering student at the Harare Institute of Technology with commercial and freelance experience building full-stack applications, enterprise systems, financial integrations, and business platforms.
              </p>
              <p>
                I am experienced in designing and developing backend and frontend systems, APIs, authentication, databases, real-time functionality, system integrations, and transactional workflows. I have built complex software independently, including multi-tenant business platforms, service marketplaces, financial workflows, and AI-enabled systems.
              </p>
              <p>
                Currently, I am developing practical AI Engineering expertise through LLM applications, Retrieval-Augmented Generation (RAG), AI agents, embeddings, vector search, machine learning, anomaly detection, and intelligent automation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 w-[calc(50%-0.5rem)] sm:w-auto touch-manipulation"
              >
                <span>↗</span> GitHub
              </a>
              <a
                href="https://linkedin.com/in/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 w-[calc(50%-0.5rem)] sm:w-auto touch-manipulation"
              >
                <span>↗</span> LinkedIn
              </a>
              <a
                href="https://twitter.com/tinochandengenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 w-full sm:w-auto touch-manipulation"
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
            className="w-full max-w-[280px] md:w-[300px] shrink-0 mx-auto md:mx-0 relative group mt-4 md:mt-0"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl group-hover:bg-blue-500/30 transition-all duration-500 -z-10"></div>
            <Image
              src="/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG"
              alt="Tinotenda Chandengenda"
              width={300}
              height={400}
              sizes="(max-width: 768px) 100vw, 300px"
              className="rounded-2xl border border-[var(--border)] object-cover object-top w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
