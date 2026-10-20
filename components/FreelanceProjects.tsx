"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const freelanceProjects = [
  {
    id: 1,
    name: "ERGCZ",
    summary: "Designed and developed a responsive organisation website with modern interfaces and interactive user experiences.",
    image: "/images/ergcz.PNG",
    linkPreview: "https://www.ergcz.co.zw/",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 2,
    name: "Go Wild Tours Zim",
    summary: "Designed and developed a tourism website for a Victoria Falls-based tour operator, presenting destinations, services, and travel experiences.",
    image: "/images/gowildtours.PNG",
    linkPreview: "https://www.gowildtourszim.com/",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 3,
    name: "Josh Wires",
    summary: "Developed a business website and configured domain, DNS, and deployment infrastructure.",
    image: "/images/joshwires.PNG",
    linkPreview: "https://www.joshwires.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 4,
    name: "HaviChem Cleaning",
    summary: "Designed and developed a professional business website for a cleaning services company.",
    image: "/images/havichem.PNG",
    linkPreview: "https://havichemcleaning.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 5,
    name: "Victoria Falls Nomadic Trails",
    summary: "Developed a tourism website for a Victoria Falls-based travel business.",
    image: "/images/nomadictrails.PNG",
    linkPreview: "https://vicfallsnomadictrails.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 6,
    name: "Yet Galore",
    summary: "Developed a luxury fashion e-commerce platform with product management, database-backed functionality, and cloud-based image storage.",
    image: "/images/yetgalore.PNG",
    linkPreview: "https://www.yetgalore.co.zw/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
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
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-12 shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
            Freelance Works
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl">
            A collection of client projects and professional freelance works. Keep scrolling to browse horizontally.
          </p>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex gap-5 md:gap-10 px-4 sm:px-6 lg:px-8 pb-10 w-max items-center">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] md:w-[70vw] lg:w-[900px] h-auto md:h-[450px] glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row border border-[var(--border)] shrink-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Image — top on mobile, right side on desktop */}
              <div className="w-full md:w-[45%] h-[180px] sm:h-[220px] md:h-full relative bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-l border-[var(--border)] group md:order-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500/5 z-10 mix-blend-overlay"></div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 85vw, 45vw"
                  className="object-contain p-3 md:p-4 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 sm:p-6 md:p-10 flex flex-col justify-center bg-[var(--bg-card)] md:order-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[var(--text)]">{project.name}</h3>
                <p className="text-[var(--text-muted)] mb-4 md:mb-6 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5 md:mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs font-medium text-[var(--accent)] bg-blue-500/10 rounded-full border border-blue-500/20">
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
                      className="px-5 md:px-6 py-2.5 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors touch-manipulation"
                    >
                      Visit Live Site
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
