"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Inbox automation",
    description:
      "Route, summarize, and draft replies so urgent mail surfaces and routine threads stay tidy — demo copy only.",
    accent: "from-teal/30 to-transparent",
    icon: "✉",
  },
  {
    title: "Animated live websites",
    description:
      "Motion-aware marketing and product pages that feel alive without slowing the experience — placeholder offering.",
    accent: "from-violet/30 to-transparent",
    icon: "✦",
  },
  {
    title: "Ops automations",
    description:
      "Connect checklists, handoffs, and status updates across tools so operations run with fewer manual steps.",
    accent: "from-teal/20 via-violet/20 to-transparent",
    icon: "⚙",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we automate
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Three demo service lanes — not live product claims.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-sm transition hover:border-teal/35"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`}
              />
              <div className="relative">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-lg">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
