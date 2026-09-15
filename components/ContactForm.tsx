"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Client-only demo: no email API. Brief delay so the UI feels real.
    await new Promise((r) => setTimeout(r, 400));
    e.currentTarget.reset();
    setStatus("success");
  }

  return (
    <section id="contact" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-[0_0_40px_rgba(45,212,191,0.08)] backdrop-blur-sm sm:p-8"
        >
          <div className="mb-3">
            <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100">
              demo — not wired
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-muted">
            UI-only demo form. Submissions stay in the browser — no email is
            sent. Real delivery later via Resend or Formspree. For now, email{" "}
            <a
              href="mailto:giomagracia@gmail.com"
              className="text-teal underline-offset-2 hover:underline"
            >
              giomagracia@gmail.com
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-border bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none ring-teal/40 placeholder:text-muted/70 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-border bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none ring-teal/40 placeholder:text-muted/70 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-y rounded-xl border border-border bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none ring-teal/40 placeholder:text-muted/70 focus:ring-2"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-teal to-violet text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {status === "submitting" ? "Working…" : "Try demo submit"}
            </button>

            {status === "success" && (
              <p
                role="status"
                className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100"
              >
                Demo success — nothing was emailed. This form is{" "}
                <strong>not wired</strong>. Use{" "}
                <a
                  href="mailto:giomagracia@gmail.com"
                  className="underline underline-offset-2"
                >
                  mailto:giomagracia@gmail.com
                </a>{" "}
                for a real message.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
