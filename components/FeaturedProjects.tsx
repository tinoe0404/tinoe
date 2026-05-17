import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: "CashAgent",
    summary: "A personal finance tracker with transaction categories, PIN lock security, and soft-delete. Built with Next.js 15, Neon PostgreSQL, Drizzle ORM, and Tailwind CSS.",
    image: "/images/project-cashagent.png",
    linkSource: "https://github.com/tinochandengenda",
    linkPreview: "https://cashagent.vercel.app",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"]
  },
  {
    id: 2,
    name: "Go Wild Tours",
    summary: "A full safari tourism website featuring a custom CSS design system with earth tones, Framer Motion animations, and a structured Destinations section.",
    image: "/images/project-gowild.png",
    linkSource: "https://github.com/tinochandengenda",
    linkPreview: "https://gowildtours.vercel.app",
    techStack: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: 3,
    name: "Joshwires",
    summary: "A professional business website for a wire mesh and fencing company, built to world-class UI/UX standards with Next.js and Tailwind CSS.",
    image: "/images/project-joshwires.png",
    linkSource: "https://github.com/tinochandengenda",
    linkPreview: "https://josh-wires.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"]
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
            Featured Projects
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl">
            A selection of my recent work. Scroll down to see the piling effect in action.
          </p>
        </div>

        {/* The container for the stacking cards. */}
        <div className="relative pb-[40vh]">
          {projects.map((project, index) => {
            // Dynamic top offset calculation for the piling effect
            const topOffset = 98 + index * 36;

            return (
              <div
                key={project.id}
                className="sticky w-full"
                style={{ top: `${topOffset}px` }}
              >
                {/* 
                  Card Inner Container — glassmorphism layout
                */}
                <div className="w-full glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row mb-8 group transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text)]">{project.name}</h3>
                    <p className="text-[var(--text-muted)] mb-6 text-sm md:text-base leading-relaxed">
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
                      <Link 
                        href={project.linkPreview}
                        className="px-6 py-2.5 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
                      >
                        Live Preview
                      </Link>
                      <Link 
                        href={project.linkSource}
                        className="px-6 py-2.5 bg-transparent border border-[var(--border)] text-[var(--text)] text-sm font-semibold rounded-full hover:bg-[var(--bg-card)] transition-colors"
                      >
                        View Source
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Image — optimized with Next.js Image */}
                  <div className="w-full md:w-[45%] h-[250px] md:h-auto relative bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 overflow-hidden border-t md:border-t-0 md:border-l border-[var(--border)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500/5 z-10 mix-blend-overlay"></div>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      placeholder="empty"
                    />
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
