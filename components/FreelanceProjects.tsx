"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const freelanceProjects = [
  {
    id: 1,
    name: "Scholarship Budget Management Platform",
    summary: "An internal platform for managing scholarship budgets, approvals, reporting, and auditing processes for educational institutions.",
    image: "/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG",
    linkPreview: "#",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Spring Security"]
  },
  {
    id: 2,
    name: "Tano Digital Group",
    summary: "A modern corporate website built for a digital transformation and technology company, showcasing services, portfolio, and company capabilities with a responsive and professional design.",
    image: "/images/tano.png",
    linkPreview: "https://tanodigital.com",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Josh Wires",
    summary: "A corporate website developed for an electrical and wiring solutions company, featuring product showcases, service information, and customer enquiry functionality.",
    image: "/images/project-joshwires.png",
    linkPreview: "https://www.joshwires.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 4,
    name: "HaviChem Cleaning Services",
    summary: "A professional cleaning services website featuring service listings, company information, quote requests, and customer engagement features. HaviChem operates as a professional cleaning services company based in Zimbabwe.",
    image: "/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG",
    linkPreview: "https://havichemcleaning.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 5,
    name: "Vic Falls Nomadic Trails",
    summary: "A tourism and travel website designed to showcase adventure experiences, travel packages, and destination information for visitors to Victoria Falls.",
    image: "/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG",
    linkPreview: "https://vicfallsnomadictrails.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 6,
    name: "Yet Galore",
    summary: "A business website developed to present company services, strengthen online presence, and provide an accessible platform for customer enquiries and engagement.",
    image: "/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG",
    linkPreview: "https://www.yetgalore.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 7,
    name: "PandiSync",
    summary: "A multi-branch Point of Sale and business management platform featuring a desktop POS application for branches and a centralized web dashboard with synchronization capabilities.",
    image: "/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG",
    linkPreview: "#",
    techStack: ["JavaFX", "Spring Boot", "SQLite", "PostgreSQL", "Next.js", "TypeScript"]
  }
];

export default function FreelanceProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Creates a scroll progress value from 0 to 1 based on how far we've scrolled through the section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps the vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} id="freelance" className="relative h-[400vh] bg-[var(--bg)] z-10">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        {/* Section Header */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
            Freelance Works
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl">
            A collection of client projects and professional freelance works. Keep scrolling to browse horizontally.
          </p>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-4 sm:px-6 lg:px-8 pb-10 w-max items-center">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] md:w-[70vw] lg:w-[900px] h-[550px] md:h-[450px] glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row border border-[var(--border)] shrink-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Left Side: Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center bg-[var(--bg-card)]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text)]">{project.name}</h3>
                <p className="text-[var(--text-muted)] mb-6 text-sm md:text-base leading-relaxed line-clamp-4">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-[var(--accent)] bg-blue-500/10 rounded-full border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  {project.linkPreview !== "#" && (
                    <Link 
                      href={project.linkPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Visit Live Site
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-[45%] h-[200px] md:h-full relative bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 overflow-hidden border-t md:border-t-0 md:border-l border-[var(--border)] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500/5 z-10 mix-blend-overlay"></div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
