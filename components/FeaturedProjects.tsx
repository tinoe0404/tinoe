"use client";

import React from 'react';
import Link from 'next/link';


const projects = [
  {
    id: 1,
    name: "RONGA — Multi-Tenant SMB Platform",
    summary: "Built a multi-tenant business platform for Zimbabwean SMBs combining inventory management, sales, POS, invoicing, and WhatsApp commerce. Implemented tenant-isolated authentication, transactional inventory, and concurrency controls.",

    linkSource: "#",
    linkPreview: "#",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "WhatsApp API", "WebSockets"]
  },
  {
    id: 2,
    name: "ZONKE — Service Marketplace",
    summary: "Building a service marketplace connecting customers and service providers through a mobile application and WhatsApp. Developing provider workflows, live location tracking, conversational WhatsApp workflows, and financial operations.",

    linkSource: "#",
    linkPreview: "#",
    techStack: ["React Native", "Node.js", "PostgreSQL", "WhatsApp API", "Stripe"]
  },
  {
    id: 3,
    name: "SMEGUARD AI",
    summary: "Developing a self-healing IT infrastructure monitoring system using machine learning anomaly detection and an AI-powered diagnostic layer that converts detected system issues into plain-language explanations and automated remediation.",

    linkSource: "#",
    linkPreview: "#",
    techStack: ["Python", "FastAPI", "scikit-learn", "LLMs", "RAG", "Ollama"]
  }
];

export default function FeaturedProjects() {
  const [isDesktop, setIsDesktop] = React.useState(true); // Default to true to prevent initial flash on desktop

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Set immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="relative w-full py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
            Featured Projects
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto md:mx-0">
            A selection of my recent work. Scroll down to see the piling effect in action.
          </p>
        </div>

        {/* The container for the stacking cards. */}
        <div className="relative pb-10 md:pb-[40vh]">
          {projects.map((project, index) => {
            // Dynamic top offset calculation for the piling effect on desktop
            const topOffset = 98 + index * 36;

            return (
              <div
                key={project.id}
                className="w-full mb-8 md:mb-0"
                style={isDesktop ? { position: 'sticky', top: `${topOffset}px` } : { position: 'relative' }}
              >
                {/* 
                  Card Inner Container — glassmorphism layout
                */}
                <div className="w-full glass-card rounded-3xl overflow-hidden flex flex-col mb-8 group transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
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
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto">
                      {project.linkPreview !== "#" && (
                        <Link 
                          href={project.linkPreview}
                          className="px-6 py-2.5 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors text-center touch-manipulation"
                        >
                          Live Preview
                        </Link>
                      )}
                      {project.linkSource !== "#" && (
                        <Link 
                          href={project.linkSource}
                          className="px-6 py-2.5 bg-transparent border border-[var(--border)] text-[var(--text)] text-sm font-semibold rounded-full hover:bg-[var(--bg-card)] transition-colors text-center touch-manipulation"
                        >
                          View Source
                        </Link>
                      )}
                    </div>
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
