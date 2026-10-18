import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLang } from '../../i18n/LangContext';

export const CONTAINER = 'max-w-7xl mx-auto px-6';

/* ---------- Reference palette ---------- */
export const ACC = '#0e8a5f';
export const ACC_DARK = '#0b7551';
export const ACC_DEEP = '#0a3f2f';
export const ACC_SOFT = 'rgba(14,138,95,.11)';
export const MUTED2 = '#5d646d';
export const LINE2 = '#e6e8ec';
export const LINE_STRONG = '#d3d7dd';
export const TILE = '#f5f6f8';
export const TILE_LINE = '#e9ebee';

/* Musholla mark (dome, door, crescent finial). Drawn in the same 319×360 box as the original
 * Tawf mark so every transform copied from tawf-foundation still lines up. */
export const MARK_D = 'M30 345V205C30 130 90 85 159.5 62C229 85 289 130 289 205V345ZM120 345V252C120 227 138 212 159.5 212C181 212 199 227 199 252V345ZM157 49H162V61H157ZM141.5 32a18 18 0 1 0 36 0a18 18 0 1 0-36 0ZM154 28a11 11 0 1 0 22 0a11 11 0 1 0-22 0Z';

export function Logo({ size = 28, color = ACC, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 319 360" className={className} aria-hidden="true">
      <path d={MARK_D} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  style,
  y = 20,
  blur = true
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  key?: React.Key;
  y?: number;
  blur?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px', amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`transform-gpu ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-tawf-gold" aria-hidden="true" />
      <span className="eyebrow text-tawf-gold">{label}</span>
    </div>
  );
}

export function Kick({ children, className = '', ar }: { children: React.ReactNode; className?: string; ar?: string }) {
  return (
    <p className={`mb-[18px] inline-flex flex-wrap items-center gap-2.5 text-sm font-medium ${className}`} style={{ color: ACC }}>
      <svg width="11" height="11" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 8H32V32H8Z M20 3L37 20L20 37L3 20Z" fill={ACC} />
      </svg>
      {children}
      {ar && (
        <>
          <span className="h-px w-5 bg-[#C5A869]" aria-hidden="true" />
          <span lang="ar" dir="rtl" className="font-kufi text-[15px] text-[#9a7a2e]">{ar}</span>
        </>
      )}
    </p>
  );
}

/* "Berjalan" (running now) vs "Segera hadir" (being prepared) */
export function StatusPill({ status, className = '' }: { status: string; className?: string }) {
  const { t } = useLang();
  const live = status === 'live';
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 font-sans text-[11px] font-medium tracking-normal ${className}`}
      style={live ? { color: ACC, background: ACC_SOFT, borderColor: 'transparent' } : { color: '#9a7a2e', background: '#fbf6ea', borderColor: '#e3d3a8' }}
    >
      <span className={`size-1.5 rounded-full ${live ? 'animate-pulse motion-reduce:animate-none' : ''}`} style={{ background: live ? ACC : '#C5A869' }} />
      {live ? t.status.live : t.status.soon}
    </span>
  );
}

export function Lnk({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-block border-b pb-[3px] text-[14.5px] font-medium no-underline transition-colors"
      style={{ borderColor: LINE_STRONG, color: '#14181c' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = ACC)}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#14181c')}
    >
      {children}
    </a>
  );
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}
