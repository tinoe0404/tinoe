"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:hello@tino.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <a
            href="mailto:hello@tino.dev"
            className="px-8 py-3.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Say hello →
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Divider + Copyright */}
        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} Tinotenda Chandengenda. All rights reserved.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
