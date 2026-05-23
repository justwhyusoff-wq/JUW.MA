import { cn } from '@/lib/cn';

const tones = {
  primary: 'bg-primarySoft text-primary',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  slate: 'bg-slate-100 text-slate-700',
  // legacy aliases
  ember: 'bg-primarySoft text-primary',
  mint: 'bg-emerald-50 text-emerald-600',
  sage: 'bg-slate-100 text-slate-700',
};

export function Badge({ children, tone = 'primary', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-display font-semibold',
        tones[tone] || tones.primary,
        className
      )}
    >
      {children}
    </span>
  );
}
