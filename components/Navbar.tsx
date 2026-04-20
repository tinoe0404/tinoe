"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-sm border-[var(--border)]"
          : "bg-[var(--bg)] border-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo (Left) */}
        <Link href="/">
          <Image
            src="/images/avatar-small.jpg"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Nav Links (Right) */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="#experience"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
