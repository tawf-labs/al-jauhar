import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLang } from '../../i18n/LangContext';
import { AR, waLink } from '../../content/site';
import { OrnamentDivider, StarPattern, GOLD } from '../ui/islamic';
import { CONTAINER, Kick, Reveal, ACC, ACC_DARK, MUTED2, LINE2, LINE_STRONG, usePrefersReducedMotion } from './landingCommon';

const HASHES = ['INF-0412', 'INF-0413', 'SDK-0414', 'WKF-0415', 'INF-0416', 'SDK-0417'];

/* Latar gelombang pastel dengan grain, fade ke putih di atas dan bawah */
function WaveBackdrop() {
  const mask = 'linear-gradient(to bottom, transparent 0%, #000 38%, #000 72%, transparent 100%)';
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[440px] overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 440" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="verified-wave-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#bdf0d9" />
            <stop offset=".5" stopColor="#efe2b8" />
            <stop offset="1" stopColor="#cfeee0" />
          </linearGradient>
          <linearGradient id="verified-wave-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#d3f5e6" />
            <stop offset=".55" stopColor="#f5ecd2" />
            <stop offset="1" stopColor="#e2f4ea" />
          </linearGradient>
          <linearGradient id="verified-wave-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".55" />
            <stop offset="1" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <filter id="verified-blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="verified-grain" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>

        <g className="verified-drift-a" filter="url(#verified-blur)">
          <path d="M-60 190C180 120 380 250 640 190S1080 90 1500 170V440H-60Z" fill="url(#verified-wave-a)" opacity=".85" />
        </g>
        <g className="verified-drift-b" filter="url(#verified-blur)">
          <path d="M-60 250C200 190 420 300 720 240S1140 170 1500 240V440H-60Z" fill="url(#verified-wave-b)" opacity=".95" />
        </g>
        <g className="verified-drift-a" filter="url(#verified-blur)">
          <path d="M-60 305C240 260 480 340 780 300S1180 250 1500 300V440H-60Z" fill="url(#verified-wave-c)" />
        </g>

        <rect width="1440" height="440" filter="url(#verified-grain)" opacity=".16" style={{ mixBlendMode: 'soft-light' }} />
      </svg>
    </div>
  );
}

export default function VerifiedSection() {
  const { t } = useLang();
  const v = t.verified;
  const reduce = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !inView) return;
    const t = window.setInterval(() => setIdx((v) => v + 1), 3200);
    return () => window.clearInterval(t);
  }, [reduce, inView]);

  return (
    <section id="amanah" className="relative overflow-hidden border-t bg-white pb-52 pt-20 md:pb-64 md:pt-28" style={{ borderColor: LINE2 }}>
      <WaveBackdrop />

      <div className={`${CONTAINER} relative`}>
        <Reveal className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <div className="flex justify-center"><Kick ar={AR.kufi.amanah}>{v.kick}</Kick></div>

          <h2
            className="bg-clip-text pb-2 text-[clamp(38px,6.2vw,72px)] font-medium leading-[1.02] tracking-[-0.035em] text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #0a3f2f 0%, #0e8a5f 45%, #b8913f 100%)' }}
          >
            {v.title1}
            <br />
            {v.title2}
          </h2>

          <p className="mt-6 max-w-[34em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>
            {v.desc}
          </p>

          {/* QS. Al-Baqarah 2:261 */}
          <figure className="relative mt-10 w-full max-w-[720px] overflow-hidden rounded-2xl border border-[#C5A869]/40 bg-[#fbf8f1] px-6 py-8 md:px-10">
            <StarPattern color={GOLD} opacity={0.35} size={56} mask="linear-gradient(90deg, #000, transparent 30%, transparent 70%, #000)" />
            <div className="relative">
              <OrnamentDivider align="center" />
              <p lang="ar" dir="rtl" className="mt-5 font-arabic text-[clamp(22px,2.6vw,30px)] leading-[1.9] text-[#14181c]">{AR.ayah}</p>
              <blockquote className="mx-auto mt-4 max-w-[46em] text-[15px] italic leading-[1.6]" style={{ color: MUTED2 }}>{v.ayahTr}</blockquote>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a7a2e]">{v.ayahRef}</figcaption>
            </div>
          </figure>

          {/* Live verification pill */}
          <div ref={ref} className="mt-9 flex flex-col items-center" aria-hidden="true">
            <div
              className="flex min-w-[300px] items-center gap-3 rounded-full border bg-white px-5 py-2.5 font-mono text-[12.5px] shadow-[0_1px_2px_rgba(20,24,32,.05),0_6px_18px_rgba(20,24,32,.06)]"
              style={{ borderColor: LINE2 }}
            >
              <span style={{ color: ACC }}>#</span>
              <span className="relative inline-block h-[18px] w-[104px] overflow-hidden text-left">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={idx}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 text-[#14181c]"
                  >
                    {HASHES[idx % HASHES.length]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="ml-auto font-sans text-[12.5px]" style={{ color: MUTED2 }}>{v.pillTag}</span>
              <span key={idx} className="flex gap-1.5">
                {[0, 1, 2].map((d) => (
                  <motion.i
                    key={d}
                    initial={reduce ? false : { background: '#e4e6ea' }}
                    animate={{ background: ACC }}
                    transition={{ delay: reduce ? 0 : 0.45 + d * 0.6, duration: 0.3 }}
                    className="size-[9px] rounded-full"
                  />
                ))}
              </span>
              <CheckCircle2 className="size-4 shrink-0" style={{ color: ACC }} />
            </div>
            <p className="mt-3 text-xs" style={{ color: MUTED2 }}>{v.stages.join('  ·  ')}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#infaq"
              className="group inline-flex h-11 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(14,138,95,.35),0_8px_20px_rgba(14,138,95,.22)] transition-all duration-300 hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ background: ACC }}
              onMouseEnter={(e) => (e.currentTarget.style.background = ACC_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.background = ACC)}
            >
              {v.cta1}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border bg-white px-6 text-[15px] font-medium text-[#14181c] shadow-[0_1px_2px_rgba(20,24,32,.06)] transition-all duration-300 hover:-translate-y-px hover:bg-[#fafafa] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ borderColor: LINE_STRONG }}
            >
              {v.cta2}
            </a>
          </div>

          <p className="mt-7 text-[13.5px]" style={{ color: MUTED2 }}>{v.foot}</p>
        </Reveal>
      </div>

      <style>{`
        @keyframes verifiedDriftA { from { transform: translateX(-2.5%); } to { transform: translateX(2.5%); } }
        @keyframes verifiedDriftB { from { transform: translateX(2.5%); } to { transform: translateX(-2.5%); } }
        .verified-drift-a { animation: verifiedDriftA 16s ease-in-out infinite alternate; }
        .verified-drift-b { animation: verifiedDriftB 20s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) { .verified-drift-a, .verified-drift-b { animation: none; } }
      `}</style>
    </section>
  );
}