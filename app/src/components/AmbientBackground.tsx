export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mint green blob — top center/right, matching pitch deck */}
      <div
        className="absolute"
        style={{
          top: '-10%',
          right: '-5%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'var(--blob-green)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.7,
        }}
      />
      {/* Lavender purple blob — bottom left, matching pitch deck */}
      <div
        className="absolute"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '650px',
          maxHeight: '650px',
          background: 'var(--blob-purple)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.65,
        }}
      />
    </div>
  )
}
