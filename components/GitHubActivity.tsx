"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Custom pixel-perfect loading skeleton mimicking the GitHub contributions grid
const CalendarSkeleton = () => (
  <div className="w-full animate-pulse space-y-6">
    <div className="flex justify-between items-center">
      <div className="h-5 w-48 bg-zinc-800/80 rounded-md"></div>
      <div className="h-5 w-24 bg-zinc-800/80 rounded-md"></div>
    </div>
    <div className="flex overflow-hidden py-1">
      <div className="grid grid-flow-col grid-rows-7 gap-[4px] w-full">
        {Array.from({ length: 371 }).map((_, i) => (
          <div
            key={i}
            className="w-[10px] h-[10px] bg-zinc-800/50 rounded-[2px]"
          />
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center pt-2">
      <div className="h-4 w-32 bg-zinc-800/60 rounded"></div>
      <div className="h-4 w-44 bg-zinc-800/60 rounded"></div>
    </div>
  </div>
);

// Load react-github-calendar dynamically on the client to avoid SSR hydration mismatch
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <CalendarSkeleton />,
  }
);

// Custom theme mapping to match the portfolio's Electric Blue Accent
const blueTheme = {
  light: ["#ebedf0", "#dbeafe", "#93c5fd", "#3b82f6", "#1d4ed8"],
  dark: [
    "rgba(255, 255, 255, 0.05)", // level 0 (empty cell)
    "rgba(59, 130, 246, 0.2)",  // level 1 (light blue glow)
    "rgba(59, 130, 246, 0.45)", // level 2 (medium blue glow)
    "rgba(59, 130, 246, 0.75)", // level 3 (bright blue)
    "rgba(59, 130, 246, 1.0)",   // level 4 (solid electric blue)
  ],
};

export default function GitHubActivity() {
  return (
    <section id="activity" className="py-24 relative z-10">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
              GitHub Activity
            </h2>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Sync
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-[var(--text-muted)] text-base max-w-2xl"
          >
            A real-time visualization of my open-source contributions, code commits, and project activity over the past year.
          </motion.p>
        </div>

        {/* Calendar Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border)] hover:border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]"
        >
          {/* Scrollable wrapper for mobile responsive behavior */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin select-none">
            <div className="min-w-[760px] md:min-w-0 pr-4">
              <GitHubCalendar
                username="tinoe0404"
                colorScheme="dark"
                theme={blueTheme}
                showColorLegend
                showTotalCount
                tooltips={{
                  activity: {
                    text: (activity) =>
                      `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`,
                  },
                }}
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-6 border-t border-[var(--border)] gap-4">
            <span className="text-xs text-[var(--text-muted)]">
              Showing active commits, pull requests, and issues.
            </span>
            <a
              href="https://github.com/tinoe0404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-blue-400 transition-colors"
            >
              View profile on GitHub <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
