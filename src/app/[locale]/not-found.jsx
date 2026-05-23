import { Link } from '@/navigation';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
      <div className="relative text-center">
        <div className="font-display text-[10rem] font-extrabold leading-none bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-textMain">Page not found.</h1>
        <p className="mt-3 text-textMuted">The link you followed may have moved, or never existed.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primaryHover hover:scale-[1.03]"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
