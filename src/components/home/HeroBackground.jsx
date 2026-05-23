'use client';

// Decorative animated background for the hero.
// Optimized: reduced particles, simplified animations.

const PARTICLES = [
  { left: '20%',  delay: '0s' },
  { left: '40%', delay: '0.8s' },
  { left: '60%', delay: '1.2s' },
  { left: '80%', delay: '0.4s' },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform" style={{ contain: 'layout style paint' }}>
      {/* Pulsing radial glow */}
      <div className="absolute inset-0 bg-hero-glow-pulse will-change-transform" />

      {/* Soft amber blob top-right */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-300/5 blur-[80px]" />

      {/* Crosshair sweep lines */}
      <div
        className="absolute left-0 right-0 top-1/3 h-px origin-center bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        style={{ animation: 'crosshairX 3s ease-in-out infinite' }}
      />
      <div
        className="absolute top-0 bottom-0 left-1/2 w-px origin-center bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        style={{ animation: 'crosshairY 3s ease-in-out infinite 1.5s' }}
      />

      {/* Floating particles (rise from bottom) */}
      <div className="absolute inset-0 will-change-transform">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              bottom: '-10px',
              animationDuration: '3.5s',
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Top + bottom fade-to-white masks so it blends */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
