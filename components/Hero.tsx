"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-teal"
        >
          Demo / placeholder brand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          AI automations that{" "}
          <span className="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent">
            keep work moving
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Aether Automations helps teams tame the inbox, ship animated live
          websites, and streamline ops — so people focus on judgment, not
          busywork. This page is a demo marketing one-pager.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-teal to-violet px-7 text-sm font-semibold text-slate-950 shadow-[0_0_32px_var(--accent-glow)] transition hover:brightness-110"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-medium text-foreground transition hover:border-teal/40 hover:bg-white/5"
          >
            See services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
