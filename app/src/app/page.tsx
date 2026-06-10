import Image from 'next/image'
import PhoneMockup from '@/components/PhoneMockup'

function AppStoreBadge({ large = false }: { large?: boolean }) {
  return (
    <a href="#" className="inline-block transition-opacity hover:opacity-80">
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={large ? 180 : 135}
        height={large ? 60 : 45}
        priority
      />
    </a>
  )
}

const features = [
  {
    icon: '📋',
    title: 'Schritt-für-Schritt-Guide',
    body: 'Von der Entscheidung bis zur Aufnahme – alle vier Phasen des Klinikwegs klar erklärt, mit Artikeln und Ressourcen.',
    accent: 'var(--blob-green)',
  },
  {
    icon: '🔍',
    title: 'Kliniksuche',
    body: 'Psychiatrische und psychosomatische Einrichtungen in deiner Nähe finden und vergleichen.',
  },
  {
    icon: '📁',
    title: 'Dokumente',
    body: 'Einweisung, Befundberichte, Medikamentenliste – alles griffbereit an einem Ort.',
  },
  {
    icon: '💚',
    title: 'Ressourcen & Notfallkontakte',
    body: 'Krisentelefone, Selbsthilfegruppen und Beratungsangebote immer zur Hand.',
    accent: 'var(--blob-purple)',
  },
]

const steps = [
  {
    n: 1,
    title: 'Entscheidung',
    body: 'Verstehe, wann ein stationärer Aufenthalt sinnvoll ist – und wie du diesen Schritt für dich treffen kannst.',
  },
  {
    n: 2,
    title: 'Suche & Auswahl',
    body: 'Finde die Klinik, die zu dir passt – mit den richtigen Kriterien und hilfreichen Werkzeugen.',
  },
  {
    n: 3,
    title: 'Anmeldung',
    body: 'Schritt für Schritt durch den Aufnahmeprozess – von der Einweisung bis zum ersten Tag.',
  },
  {
    n: 4,
    title: 'Wartezeit',
    body: 'Ressourcen und Strategien, um die Zeit bis zum Klinikaufenthalt gut zu überbrücken.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Cluide" width={28} height={28} className="rounded-lg" />
          <span style={{ fontSize: 16, fontWeight: 300, letterSpacing: '-0.02em' }}>cluide.</span>
        </div>
        <AppStoreBadge />
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-center px-6 pt-20 pb-16">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <p
              className="inline-block text-xs tracking-[0.18em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Psychiatrie &amp; Psychosomatik
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Dein Weg<br />zur Klinik.
            </h1>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)', maxWidth: 420 }}>
              Cluide führt dich Schritt für Schritt durch den Prozess – von der ersten Überlegung
              bis zur Aufnahme. Klar, ruhig, begleitet.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <AppStoreBadge large />
              <span className="text-xs" style={{ color: 'var(--muted)' }}>Kostenlos · iOS</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
              Was cluide bietet
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.03em' }}>
              Alles, was du für<br />diesen Schritt brauchst.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="relative overflow-hidden rounded-2xl p-8 space-y-3"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              >
                {f.accent && (
                  <div
                    className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: f.accent, filter: 'blur(40px)', opacity: 0.5 }}
                  />
                )}
                <span style={{ fontSize: 28 }}>{f.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide steps ─────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
              Der Guide
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.03em' }}>
              Vier Phasen.<br />Ein klarer Weg.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex gap-5 rounded-2xl p-7"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ width: 36, height: 36, background: '#0D0D0D' }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{s.n}</span>
                </div>
                <div className="space-y-1">
                  <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ────────────────────────────── */}
      <section className="px-6 py-32">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <Image
            src="/app-icon.png"
            alt="Cluide"
            width={80}
            height={80}
            className="rounded-2xl mx-auto"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
          />
          <div className="space-y-3">
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.03em' }}>
              Cluide ist kostenlos.
            </h2>
            <p style={{ color: 'var(--muted)' }}>Für iPhone – jetzt im App Store laden.</p>
          </div>
          <AppStoreBadge large />
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        className="px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Cluide" width={20} height={20} className="rounded-md" />
          <span style={{ fontSize: 13, fontWeight: 300 }}>cluide.</span>
        </div>
        <div className="flex gap-6 text-xs" style={{ color: 'var(--muted)' }}>
          <a href="#" className="hover:underline">Datenschutz</a>
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Nutzungsbedingungen</a>
        </div>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © 2025 Cluide · <a href="https://www.lepannier.com" className="hover:underline">Le Pannier Studios</a>
        </p>
      </footer>
    </>
  )
}
