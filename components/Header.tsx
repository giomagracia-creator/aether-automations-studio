"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 px-6 py-3 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          <span className="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent">
            Aether
          </span>{" "}
          Automations
        </a>
        <nav className="flex items-center gap-4 text-xs text-muted sm:gap-6 sm:text-sm">
          <a href="#services" className="transition hover:text-foreground">
            Services
          </a>
          <a href="#how-it-works" className="transition hover:text-foreground">
            How it works
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-3 py-1.5 text-foreground transition hover:border-teal/40"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
