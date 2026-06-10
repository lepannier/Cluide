export default function PhoneMockup() {
  const steps = [
    { n: 1, title: 'Entscheidung', desc: 'Verstehe, wann eine Klinik sinnvoll ist.' },
    { n: 2, title: 'Suche & Auswahl', desc: 'Finde die Klinik, die zu dir passt.' },
    { n: 3, title: 'Anmeldung', desc: 'Schritt für Schritt zur Aufnahme.' },
    { n: 4, title: 'Wartezeit', desc: 'Ressourcen bis zur Aufnahme.' },
  ]

  return (
    <div className="relative flex justify-center items-center">
      {/* Glow behind the phone */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          background: 'var(--blob-green)',
          filter: 'blur(60px)',
          opacity: 0.5,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 260,
          height: 520,
          borderRadius: 44,
          border: '7px solid #D1D1D1',
          boxShadow: '0 0 0 1px #E8E8E8, 0 40px 80px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.06)',
          background: '#F7F7F7',
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute z-20"
          style={{
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 80,
            height: 22,
            background: '#D1D1D1',
            borderRadius: 12,
          }}
        />

        {/* Ambient blobs inside phone */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-8%', right: '-8%',
            width: '60%', height: '60%',
            background: 'rgba(168,220,185,0.55)',
            borderRadius: '50%',
            filter: 'blur(32px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-8%', left: '-8%',
            width: '55%', height: '55%',
            background: 'rgba(176,150,215,0.45)',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col" style={{ paddingTop: 44 }}>
          {/* Header */}
          <div className="px-4 pt-3 pb-2">
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 22, fontWeight: 300, letterSpacing: '-0.03em', color: '#0D0D0D' }}>
              dein guide.
            </p>
            <p style={{ fontSize: 10, color: '#888', marginTop: 2, lineHeight: 1.4 }}>
              Wir begleiten dich Schritt für Schritt.
            </p>
          </div>

          {/* Step cards */}
          <div className="flex-1 overflow-hidden px-4 flex flex-col gap-2 pb-2">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-2"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: 10,
                  border: '1px solid #E8E8E8',
                  padding: '8px 10px',
                }}
              >
                <div
                  style={{
                    width: 22, height: 22, borderRadius: 11,
                    background: '#0D0D0D',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: 10, color: '#fff', fontWeight: 600 }}>{s.n}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#0D0D0D' }}>{s.title}</p>
                  <p style={{ fontSize: 9, color: '#888', marginTop: 1 }}>{s.desc}</p>
                </div>
                <span style={{ fontSize: 12, color: '#D0D0D0' }}>›</span>
              </div>
            ))}
          </div>

          {/* Tab bar */}
          <div
            style={{
              display: 'flex',
              borderTop: '1px solid #E8E8E8',
              background: 'rgba(255,255,255,0.9)',
              padding: '6px 0 10px',
            }}
          >
            {['Guide', 'Kliniken', 'Dokumente', 'Profil'].map((tab, i) => (
              <div
                key={tab}
                style={{
                  flex: 1, textAlign: 'center',
                  fontSize: 9, fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? '#0D0D0D' : '#AAAAAA',
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
