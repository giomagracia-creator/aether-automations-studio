"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formId) return;

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setErrorMessage(
          payload?.error || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-muted">
            Demo form — once Formspree is configured, messages forward to{" "}
            <span className="text-foreground">giomagracia@gmail.com</span>.
          </p>

          {!formId ? (
            <div
              role="status"
              className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100"
            >
              Form needs configuration. Set{" "}
              <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">
                NEXT_PUBLIC_FORMSPREE_FORM_ID
              </code>{" "}
              in your environment (see <code className="font-mono text-xs">.env.example</code>
              ), then restart the app.
            </div>
          ) : (
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
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="rounded-xl border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal"
                >
                  Thanks — your message was sent successfully.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
