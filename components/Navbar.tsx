"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Freelance", href: "#freelance" },
    { name: "Activity", href: "#activity" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-3xl ${
            scrolled || mobileMenuOpen
              ? "glass shadow-lg border-[var(--border)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center z-50" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/images/cd96034b-f292-4060-9d66-a9cb6b220502.JPG"
              alt="Logo"
              width={36}
              height={36}
              priority
              sizes="36px"
              className="rounded-full cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav Links (Right) */}
          <nav className="hidden sm:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-card)] px-4 py-2 rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border)] z-50 focus:outline-none touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-5 h-0.5 bg-[var(--text)] transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-[var(--text)] transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-[var(--text)] transition-transform duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/90 flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-center text-[var(--text)] hover:text-[var(--accent)] py-4 border-b border-[var(--border)] w-full transition-colors touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
