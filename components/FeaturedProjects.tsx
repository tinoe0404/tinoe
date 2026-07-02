import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: "HOPIN Ride Sharing Platform",
    summary: "A ride-sharing platform with real-time communication, OTP authentication, JWT security, and an administrative dashboard for operations management.",
    image: "/images/hopin.png",
    linkSource: "#",
    linkPreview: "#",
    techStack: ["Django", "Django REST", "Django Channels", "PostgreSQL", "Redis", "WebSockets", "JWT"]
  },
  {
    id: 2,
    name: "CRDB SAP-ESB Middleware",
    summary: "Enterprise middleware integrating banking operations with SAP systems, supporting funds transfers, budget control, asset depreciation, and SWIFT messaging workflows.",
    image: "/images/crdb.png",
    linkSource: "#",
    linkPreview: "#",
    techStack: ["Java 21", "Spring Boot 3", "REST APIs", "OkHttp", "Jackson", "JWT", "SAP"]
  },
  {
    id: 3,
    name: "NextGen Asset Recquisition System",
    summary: "A role-based asset tracking and reqcquisition system with approval workflows, request tracking, and administrative controls.",
    image: "/images/nextgen.png",
    linkSource: "#",
    linkPreview: "#",
    techStack: ["Spring Boot", "PostgreSQL", "REST APIs", "Spring Security"]
  },
  {
    id: 4,
    name: "Tano Digital Group Website",
    summary: "Designed and developed the corporate website for Tano Digital Group, showcasing the company’s services, portfolio, and digital transformation capabilities with a modern, responsive user experience.",
    image: "/images/tano.png",
    linkSource: "#",
    linkPreview: "#",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
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
                <div className="w-full glass-card rounded-3xl overflow-hidden flex flex-col-reverse md:flex-row mb-8 group transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  
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

                  {/* Right Side: Image — optimized with Next.js Image */}
                  <div className="w-full md:w-[45%] h-[220px] sm:h-[280px] md:h-auto relative bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-l border-[var(--border)]">
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
