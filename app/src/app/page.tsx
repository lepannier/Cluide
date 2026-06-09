export default function Home() {
  return (
    <main className="relative min-h-dvh corner-mark flex flex-col items-center justify-center px-6">
      {/* Top-right wordmark — recurring pitch deck pattern */}
      <span
        className="fixed top-6 right-8 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40 select-none"
      >
        Cluide
      </span>

      <div className="max-w-xl w-full space-y-8 text-center">
        {/* Brand mark */}
        <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[-0.03em] leading-none text-foreground">
          CLUIDE
        </h1>

        {/* Mission statement — from pitch deck */}
        <p className="text-base text-muted leading-relaxed max-w-md mx-auto">
          Dein digitaler Helfer bei der Suche, Auswahl, Anmeldung und Wartezeit
          auf einen psychiatrischen oder psychosomatischen Klinikplatz.
        </p>

        {/* Section label — large rotated text style from pitch deck, used inline here as placeholder */}
        <p className="text-xs tracking-[0.15em] uppercase text-foreground/30 font-light">
          Coming soon
        </p>
      </div>
    </main>
  )
}
