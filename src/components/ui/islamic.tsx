import React, { useId } from 'react';

/* Islamic ornament kit: 8-point star (khatam) lattice, mihrab arch, calligraphy, lantern, skyline.
 * Everything is hand-drawn SVG so it stays sharp, recolourable and attribution-free. */

export const GOLD = '#C5A869';
export const GOLD_DEEP = '#9a7a2e';
export const NIGHT = '#0a3f2f';

/* ---------- 8-point star ---------- */
export function Star8({ size = 14, color = GOLD, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M8 8H32V32H8Z" fill={color} />
      <path d="M20 3L37 20L20 37L3 20Z" fill={color} />
      <circle cx="20" cy="20" r="4.5" fill="#fff" fillOpacity=".55" />
    </svg>
  );
}

/* ---------- Star lattice background ---------- */
const S = 80;
const STAR = (cx: number, cy: number) =>
  `M${cx - 14} ${cy - 14}H${cx + 14}V${cy + 14}H${cx - 14}Z M${cx} ${cy - 19.8}L${cx + 19.8} ${cy}L${cx} ${cy + 19.8}L${cx - 19.8} ${cy}Z`;
const LATTICE = [
  STAR(40, 40),
  STAR(0, 0), STAR(S, 0), STAR(0, S), STAR(S, S),
  'M40 0V20.2 M40 59.8V80 M0 40H20.2 M59.8 40H80',
  'M54 54L66 66 M26 26L14 14 M54 26L66 14 M26 54L14 66',
].join(' ');

export function StarPattern({
  color = GOLD,
  opacity = 0.18,
  size = S,
  mask = 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
  className = '',
}: { color?: string; opacity?: number; size?: number; mask?: string; className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity, maskImage: mask, WebkitMaskImage: mask }}
    >
      <defs>
        <pattern id={`sp-${id}`} width={size} height={size} patternUnits="userSpaceOnUse" viewBox={`0 0 ${S} ${S}`}>
          <path d={LATTICE} fill="none" stroke={color} strokeWidth="1.2" />
          <circle cx="40" cy="40" r="3" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#sp-${id})`} />
    </svg>
  );
}

/* ---------- Mihrab arch ---------- */
const ARCH_UNIT = 'M0,1 V0.38 C0,0.17 0.2,0.07 0.5,0 C0.8,0.07 1,0.17 1,0.38 V1 Z';
const ARCH_100 = 'M0 140V53.2C0 23.8 20 9.8 50 0C80 9.8 100 23.8 100 53.2V140Z';

export function ArchFrame({
  children,
  className = '',
  outline = GOLD,
}: { children: React.ReactNode; className?: string; outline?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={`arch-${id}`} clipPathUnits="objectBoundingBox">
            <path d={ARCH_UNIT} />
          </clipPath>
        </defs>
      </svg>
      {/* Outer gold outline, offset from the image like a mihrab border */}
      <svg aria-hidden="true" viewBox="0 0 100 140" preserveAspectRatio="none" className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible">
        <path d={ARCH_100} fill="none" stroke={outline} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="h-full w-full" style={{ clipPath: `url(#arch-${id})` }}>{children}</div>
      <svg aria-hidden="true" viewBox="0 0 100 140" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <path d={ARCH_100} fill="none" stroke={outline} strokeOpacity=".6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <Star8 size={18} color={outline} className="absolute -top-[22px] left-1/2 -translate-x-1/2" />
    </div>
  );
}

/* ---------- Calligraphy ---------- */
export function Bismillah({ className = '', color = GOLD_DEEP }: { className?: string; color?: string }) {
  return (
    <p lang="ar" dir="rtl" className={`font-arabic leading-[1.6] ${className}`} style={{ color }}>
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </p>
  );
}

export function KufiLabel({ children, className = '', color = GOLD_DEEP }: { children: React.ReactNode; className?: string; color?: string }) {
  return (
    <span lang="ar" dir="rtl" className={`font-kufi text-[15px] font-medium ${className}`} style={{ color }}>
      {children}
    </span>
  );
}

/* ---------- Divider ---------- */
export function OrnamentDivider({ className = '', color = GOLD, align = 'left' }: { className?: string; color?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${className}`} aria-hidden="true">
      <span className="h-px w-16" style={{ background: `linear-gradient(90deg, transparent, ${color})` }} />
      <Star8 size={12} color={color} />
      <span className="size-1.5 rotate-45" style={{ background: color }} />
      <Star8 size={12} color={color} />
      <span className="h-px w-16" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  );
}

/* ---------- Lantern (fanous) ---------- */
export function Lantern({ className = '', chain = 60, glow = '#ffd98a', delay = 0 }: { className?: string; chain?: number; glow?: string; delay?: number }) {
  return (
    <svg
      viewBox={`0 0 40 ${chain + 74}`}
      width="40"
      height={chain + 74}
      className={`lantern-sway origin-top ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <line x1="20" y1="0" x2="20" y2={chain} stroke={GOLD} strokeWidth="1.2" />
      <g transform={`translate(0 ${chain})`}>
        <circle cx="20" cy="2" r="2.5" fill="none" stroke={GOLD} strokeWidth="1.2" />
        <path d="M12 12L20 4L28 12Z" fill={GOLD} />
        <rect x="10" y="12" width="20" height="3" rx="1" fill={GOLD} />
        <path d="M11 15H29L32 30L29 46H11L8 30Z" fill={glow} fillOpacity=".9" stroke={GOLD} strokeWidth="1.4" />
        <path d="M20 15V46 M8 30H32" stroke={GOLD} strokeWidth=".9" strokeOpacity=".7" />
        <circle cx="20" cy="30" r="5" fill="#fff" fillOpacity=".7" />
        <rect x="10" y="46" width="20" height="3" rx="1" fill={GOLD} />
        <path d="M14 49H26L20 60Z" fill={GOLD} />
        <circle cx="20" cy="63" r="2" fill={GOLD} />
      </g>
    </svg>
  );
}

/* ---------- Mosque skyline ---------- */
function Minaret({ x, h, w = 18 }: { x: number; h: number; w?: number }) {
  const top = 120 - h;
  return (
    <g>
      <rect x={x} y={top + 22} width={w} height={h - 22} />
      <rect x={x - 3} y={top + 40} width={w + 6} height="5" />
      <path d={`M${x - 2} ${top + 24}Q${x + w / 2} ${top - 4} ${x + w + 2} ${top + 24}Z`} />
      <rect x={x + w / 2 - 0.8} y={top - 12} width="1.6" height="12" />
      <path d={`M${x + w / 2 + 4} ${top - 18}a6 6 0 1 1 -6 -6a4.5 4.5 0 1 0 6 6Z`} />
    </g>
  );
}

function Dome({ cx, r, base }: { cx: number; r: number; base: number }) {
  return (
    <g>
      <rect x={cx - r} y={base} width={r * 2} height={120 - base} />
      <path d={`M${cx - r} ${base}C${cx - r} ${base - r * 1.1} ${cx - r * 0.2} ${base - r * 1.25} ${cx} ${base - r * 1.55}C${cx + r * 0.2} ${base - r * 1.25} ${cx + r} ${base - r * 1.1} ${cx + r} ${base}Z`} />
      <rect x={cx - 0.9} y={base - r * 1.55 - 10} width="1.8" height="10" />
      <circle cx={cx} cy={base - r * 1.55 - 12} r="2.4" />
    </g>
  );
}

export function MosqueSkyline({ color = '#1A1A1A', className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax slice" className={`block w-full ${className}`} fill={color} aria-hidden="true">
      <rect x="0" y="108" width="1200" height="12" />
      <Dome cx={140} r={34} base={88} />
      <Minaret x={230} h={88} w={14} />
      <Dome cx={330} r={26} base={96} />
      <rect x="380" y="84" width="440" height="36" />
      <Minaret x={440} h={96} />
      <Dome cx={600} r={46} base={88} />
      <Dome cx={510} r={24} base={86} />
      <Dome cx={690} r={24} base={86} />
      <Minaret x={742} h={96} />
      <Dome cx={870} r={26} base={96} />
      <Minaret x={956} h={88} w={14} />
      <Dome cx={1060} r={34} base={88} />
      {/* Arched windows cut out of the main hall */}
      {[420, 470, 530, 670, 730, 780].map((x) => (
        <path key={x} d={`M${x} 120V104Q${x + 8} 92 ${x + 16} 104V120Z`} fill="#000" fillOpacity=".25" />
      ))}
    </svg>
  );
}
