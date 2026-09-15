"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Map the workflow",
    body: "We sketch where time leaks — inbox, site updates, or ops handoffs — and pick a first automation win.",
  },
  {
    step: "02",
    title: "Build & connect",
    body: "Lightweight automations plug into your tools. Demo note: this site does not claim a live delivery stack.",
  },
  {
    step: "03",
    title: "Monitor & refine",
    body: "Review outcomes, tune prompts and rules, then expand only what proves useful.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            A simple three-step path — illustrative demo copy.
          </p>
        </div>

        <ol className="space-y-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-border bg-card/80 p-5 sm:gap-6 sm:p-6"
            >
              <span className="shrink-0 font-mono text-sm font-semibold text-teal">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
