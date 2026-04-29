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
    linkPreview: "https://cashagent.vercel.app"
  },
  {
    id: 2,
    name: "Go Wild Tours",
    summary: "A full safari tourism website featuring a custom CSS design system with earth tones, Framer Motion animations, and a structured Destinations section.",
    image: "/images/project-gowild.png",
    linkSource: "https://github.com/tinochandengenda",
    linkPreview: "https://gowildtours.vercel.app"
  },
  {
    id: 3,
    name: "Joshwires",
    summary: "A professional business website for a wire mesh and fencing company, built to world-class UI/UX standards with Next.js and Tailwind CSS.",
    image: "/images/project-joshwires.png",
    linkSource: "https://github.com/tinochandengenda",
    linkPreview: "https://josh-wires.vercel.app"
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl">
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
                  Card Inner Container — compact layout
                */}
                <div className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row mb-8">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{project.name}</h3>
                    <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      <Link 
                        href={project.linkPreview}
                        className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                      >
                        Live Preview
                      </Link>
                      <Link 
                        href={project.linkSource}
                        className="px-5 py-2.5 bg-transparent border border-neutral-700 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors"
                      >
                        View Source
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Image — optimized with Next.js Image */}
                  <div className="w-full md:w-[45%] h-[200px] md:h-[260px] relative bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
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
