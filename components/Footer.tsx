export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center text-sm text-muted">
        <p className="font-medium text-foreground/80">Aether Automations</p>
        <p>
          Demo / placeholder marketing site for Project A. Not a live product
          brand or client testimonials.
        </p>
        <p className="text-xs text-muted/80">
          © {new Date().getFullYear()} — Gio Magracia · Demo copy only
        </p>
      </div>
    </footer>
  );
}
