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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-2xl ${
          scrolled
            ? "glass shadow-lg border-[var(--border)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/avatar-small.jpg"
            alt="Logo"
            width={36}
            height={36}
            priority
            sizes="36px"
            className="rounded-full cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        {/* Nav Links (Right) */}
        <nav className="hidden sm:flex items-center gap-2">
          <Link
            href="#experience"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-card)] px-4 py-2 rounded-full transition-all"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-card)] px-4 py-2 rounded-full transition-all"
          >
            Projects
          </Link>
          <Link
            href="#activity"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-card)] px-4 py-2 rounded-full transition-all"
          >
            Activity
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-card)] px-4 py-2 rounded-full transition-all"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
