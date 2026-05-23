'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Stylized lat/lng anchors on the Moroccan + diaspora map
const PINS = [
  { top: '38%', left: '38%', label: 'Casablanca', tag: '+18 systems', tone: 'blue', delay: 0 },
  { top: '32%', left: '46%', label: 'Rabat', tag: '+9 launches', tone: 'emerald', delay: 0.3 },
  { top: '52%', left: '34%', label: 'Marrakech', tag: '+12 bookings', tone: 'amber', delay: 0.6 },
  { top: '28%', left: '60%', label: 'Tangier', tag: 'New project', tone: 'blue', delay: 0.9 },
  { top: '60%', left: '50%', label: 'Agadir', tag: '+6 sites', tone: 'emerald', delay: 1.2 },
];

const TONE = {
  blue: { dot: 'bg-primary', ping: 'bg-primary/40', text: 'text-primary' },
  emerald: { dot: 'bg-emerald-500', ping: 'bg-emerald-400/40', text: 'text-emerald-600' },
  amber: { dot: 'bg-amber-500', ping: 'bg-amber-400/40', text: 'text-amber-600' },
};

export function GlobeMap() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Coverage
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
              Built where business happens.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-textMuted">
              From Casablanca to Tangier — we work with founders across Morocco, building systems that serve clients local and abroad.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative mx-auto aspect-[2/1] max-w-4xl overflow-hidden rounded-t-[200px] bg-gradient-to-b from-primarySoft to-white">
            {/* Stylized dotted map */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2DD4A8" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2DD4A8" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="400" cy="320" r="280" fill="url(#globe-glow)" />

              {/* Dotted map grid */}
              {Array.from({ length: 28 }).map((_, row) =>
                Array.from({ length: 56 }).map((_, col) => {
                  const cx = 50 + col * 13;
                  const cy = 40 + row * 12;
                  // Approximate Morocco outline via radial-mask: dots within an ellipse
                  const inside =
                    Math.pow((cx - 400) / 280, 2) + Math.pow((cy - 250) / 180, 2) < 1;
                  if (!inside) return null;
                  return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="1.5" fill="#6EE7B7" opacity={0.7} />;
                })
              )}

              {/* Animated connecting paths */}
              <path
                d="M 304 192 Q 360 100 440 165"
                fill="none"
                stroke="#2DD4A8"
                strokeWidth="1.5"
                className="path-animate"
              />
              <path
                d="M 304 192 Q 280 280 322 320"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.5"
                className="path-animate"
              />
              <path
                d="M 440 165 Q 500 220 480 285"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
                className="path-animate"
              />
            </svg>

            {/* Pins */}
            {PINS.map((p, i) => {
              const tone = TONE[p.tone];
              return (
                <motion.div
                  key={p.label}
                  style={{ top: p.top, left: p.left }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: p.delay, duration: 0.5 }}
                  className="absolute"
                >
                  <div className="relative">
                    <span className={`absolute inset-0 h-4 w-4 animate-ping rounded-full ${tone.ping}`} />
                    <span className={`relative block h-4 w-4 rounded-full ${tone.dot} ring-4 ring-white`} />
                  </div>
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-lg border border-line bg-white px-2.5 py-1 shadow-softer whitespace-nowrap">
                    <div className="text-[11px] font-bold text-textMain">{p.label}</div>
                    <div className={`text-[10px] font-semibold ${tone.text}`}>{p.tag}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
