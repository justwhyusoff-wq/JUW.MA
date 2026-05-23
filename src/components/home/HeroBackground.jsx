'use client';

// Decorative animated background for the hero.
// Layers (back → front): glow pulse, panning grid, sweeping beam,
// crosshair lines, floating particles.

const PARTICLES = [
  { left: '8%',  delay: '0s',   duration: '3.2s' },
  { left: '18%', delay: '1.4s', duration: '3.6s' },
  { left: '28%', delay: '0.6s', duration: '3.0s' },
  { left: '40%', delay: '2.0s', duration: '3.8s' },
  { left: '52%', delay: '0.9s', duration: '3.4s' },
  { left: '64%', delay: '1.7s', duration: '3.1s' },
  { left: '74%', delay: '0.3s', duration: '3.5s' },
  { left: '84%', delay: '2.3s', duration: '3.3s' },
  { left: '92%', delay: '1.0s', duration: '3.7s' },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Pulsing radial glow */}
      <div className="absolute inset-0 bg-hero-glow-pulse" />

      {/* Panning mint grid */}
      <div className="absolute inset-0 bg-grid-animated" />

      {/* Sweeping diagonal beam */}
      <div className="absolute inset-0 bg-beam-sweep mix-blend-screen" />

      {/* Soft amber blob top-right */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[120px]" />

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
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              bottom: '-10px',
              animationDuration: p.duration,
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
