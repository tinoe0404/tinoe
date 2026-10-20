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

  // Maps the vertical scroll to horizontal translation (only applies to desktop view)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <>
      {/* DESKTOP VIEW: Uses Framer Motion scroll hijacking for a premium feel */}
      <section ref={targetRef} id="freelance-desktop" className="hidden md:block relative h-[400vh] bg-[var(--bg)] z-10">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
          {/* Section Header */}
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 mb-12 shrink-0">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
              Freelance Works
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-2xl">
              A collection of client projects and professional freelance works. Keep scrolling to browse horizontally.
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <motion.div style={{ x }} className="flex gap-10 px-6 lg:px-8 pb-10 w-max items-center">
            {freelanceProjects.map((project) => (
              <div
                key={project.id}
                className="w-[70vw] lg:w-[900px] h-[450px] glass-card rounded-3xl overflow-hidden flex flex-row border border-[var(--border)] shrink-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Left Side: Content */}
                <div className="flex-1 p-10 flex flex-col justify-center bg-[var(--bg-card)]">
                  <h3 className="text-3xl font-bold mb-4 text-[var(--text)]">{project.name}</h3>
                  <p className="text-[var(--text-muted)] mb-6 text-base leading-relaxed line-clamp-4">
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
                <div className="w-[45%] h-full relative bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 overflow-hidden border-l border-[var(--border)] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500/5 z-10 mix-blend-overlay"></div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="45vw"
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE VIEW: Uses Native CSS Snap Scrolling for better touch usability */}
      <section id="freelance-mobile" className="md:hidden relative w-full py-24 bg-[var(--bg)] z-10">
        <div className="w-full px-6 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] mb-3 text-center">
            Freelance Works
          </h2>
          <p className="text-[var(--text-muted)] text-base text-center">
            Swipe to explore client projects.
          </p>
        </div>

        {/* Native Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 hide-scrollbar">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] flex-shrink-0 snap-center glass-card rounded-3xl overflow-hidden flex flex-col border border-[var(--border)] shadow-lg relative"
            >
              {/* Top Side: Image */}
              <div className="w-full h-[200px] relative bg-[#0f0f0f] border-b border-[var(--border)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="85vw"
                  className="object-contain p-3"
                  loading="lazy"
                />
              </div>

              {/* Bottom Side: Content */}
              <div className="p-6 flex flex-col bg-[var(--bg-card)] flex-1">
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">{project.name}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-medium text-[var(--accent)] bg-blue-500/10 rounded-full border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-[10px] font-medium text-[var(--text-muted)] bg-[var(--bg)] rounded-full border border-[var(--border)]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                {project.linkPreview !== "#" && (
                  <Link 
                    href={project.linkPreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors text-center mt-2 touch-manipulation"
                  >
                    Visit Live Site
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CSS to hide scrollbar for the mobile view */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
