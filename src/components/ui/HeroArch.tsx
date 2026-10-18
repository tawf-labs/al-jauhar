import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { GOLD, NIGHT, Star8, StarPattern } from './islamic';
import { useLang } from '../../i18n/LangContext';

/* Mihrab arch at dusk: crescent, stars, hanging lanterns and the musholla silhouette.
 * Entrance: fade + draw + rise, staggered. */

const ARCH = 'M60 620V262C60 140 160 72 240 30C320 72 420 140 420 262V620Z';
const ARCH_OUTER = 'M40 620V258C40 126 150 52 240 8C330 52 440 126 440 258V620Z';

const STARS = [
  [150, 170, 2.2], [330, 150, 1.8], [205, 120, 1.4], [372, 230, 2], [118, 250, 1.5],
  [282, 205, 1.3], [180, 225, 1.1], [395, 300, 1.2], [96, 330, 1.2], [250, 95, 1.6],
] as const;

const draw = (delay: number, duration = 1.4): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { pathLength: { duration, delay, ease: 'easeInOut' }, opacity: { duration: 0.01, delay } } },
});
const fade = (delay: number, duration = 0.8): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, delay } },
});
const rise = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] } },
});

function HangingLantern({ x, chain, delay }: { x: number; chain: number; delay: number }) {
  return (
    <motion.g variants={fade(delay, 0.6)}>
      <g className="lantern-sway" style={{ animationDelay: `${delay}s` }}>
        <line x1={x} y1={0} x2={x} y2={chain} stroke={GOLD} strokeWidth="1.2" />
        <g transform={`translate(${x - 20} ${chain})`}>
          <circle cx="20" cy="2" r="2.5" fill="none" stroke={GOLD} strokeWidth="1.2" />
          <path d="M12 12L20 4L28 12Z" fill={GOLD} />
          <rect x="10" y="12" width="20" height="3" rx="1" fill={GOLD} />
          <path d="M11 15H29L32 30L29 46H11L8 30Z" fill="#ffd98a" stroke={GOLD} strokeWidth="1.4" />
          <path d="M20 15V46 M8 30H32" stroke={GOLD} strokeWidth=".9" strokeOpacity=".7" />
          <circle cx="20" cy="30" r="14" fill="url(#ha-glow)" />
          <rect x="10" y="46" width="20" height="3" rx="1" fill={GOLD} />
          <path d="M14 49H26L20 60Z" fill={GOLD} />
          <circle cx="20" cy="63" r="2" fill={GOLD} />
        </g>
      </g>
    </motion.g>
  );
}

export default function HeroArch() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Star lattice behind the arch */}
      <StarPattern color={GOLD} opacity={0.35} size={64} mask="radial-gradient(circle at 50% 45%, #000 25%, transparent 68%)" />

      <motion.svg
        viewBox="0 0 480 620"
        className="relative w-full overflow-visible"
        role="img"
        aria-label={t.hero.art.aria}
        initial={reduce ? false : 'hidden'}
        animate="show"
      >
        <defs>
          <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#062a20" />
            <stop offset=".55" stopColor={NIGHT} />
            <stop offset="1" stopColor="#0e8a5f" />
          </linearGradient>
          <radialGradient id="ha-glow">
            <stop offset="0" stopColor="#fff3c4" stopOpacity=".9" />
            <stop offset="1" stopColor="#fff3c4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ha-moonglow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffe9a8" stopOpacity=".35" />
            <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
          </radialGradient>
          <clipPath id="ha-clip"><path d={ARCH} /></clipPath>
          <pattern id="ha-tiles" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M6 6H34V34H6Z M20 0.2L39.8 20L20 39.8L0.2 20Z" fill="none" stroke={GOLD} strokeOpacity=".22" strokeWidth=".8" />
          </pattern>
        </defs>

        {/* Arch body */}
        <motion.g variants={fade(0, 0.9)}>
          <path d={ARCH} fill="url(#ha-sky)" />
        </motion.g>

        <g clipPath="url(#ha-clip)">
          {/* Moon + stars */}
          <motion.g variants={fade(0.5, 1.2)}>
            <circle cx="320" cy="185" r="90" fill="url(#ha-moonglow)" />
            <path d="M338 150a42 42 0 1 0 0 76a34 34 0 1 1 0-76Z" fill="#f4dc95" />
            {STARS.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill="#fff6d6" className="twinkle" style={{ animationDelay: `${i * 0.37}s` }} />
            ))}
            <g transform="translate(250 200)"><Star8 size={14} color={GOLD} /></g>
          </motion.g>

          {/* Distant hills */}
          <motion.path variants={fade(0.7)} d="M60 520C140 488 220 500 300 482S400 470 420 476V620H60Z" fill="#0b5a43" />

          {/* Musholla silhouette */}
          <motion.g variants={rise(0.9)} fill="#F9F6F0">
            {/* hall */}
            <rect x="130" y="440" width="220" height="120" rx="2" />
            {/* main dome */}
            <path d="M170 440C170 380 205 352 240 330C275 352 310 380 310 440Z" />
            <rect x="238.5" y="300" width="3" height="32" />
            <path d="M246 290a10 10 0 1 1 -10 -10a7.5 7.5 0 1 0 10 10Z" fill={GOLD} />
            {/* dome band */}
            <rect x="166" y="436" width="148" height="8" fill={GOLD} />
            {/* minarets */}
            {[100, 362].map((x) => (
              <g key={x}>
                <rect x={x} y="370" width="18" height="190" />
                <rect x={x - 4} y="402" width="26" height="6" fill={GOLD} />
                <path d={`M${x - 2} 372Q${x + 9} 338 ${x + 20} 372Z`} />
                <rect x={x + 8} y="326" width="2" height="16" />
                <path d={`M${x + 14} 322a6 6 0 1 1 -6 -6a4.5 4.5 0 1 0 6 6Z`} fill={GOLD} />
              </g>
            ))}
            {/* arched door + windows */}
            <path d="M222 560V506C222 492 231 484 240 480C249 484 258 492 258 506V560Z" fill={NIGHT} />
            {[160, 190, 280, 310].map((x) => (
              <path key={x} d={`M${x} 520V496C${x} 488 ${x + 5} 484 ${x + 9} 482C${x + 13} 484 ${x + 18} 488 ${x + 18} 496V520Z`} fill="#0e8a5f" fillOpacity=".55" />
            ))}
            <rect x="130" y="456" width="220" height="2" fill={GOLD} fillOpacity=".7" />
          </motion.g>

          {/* Ground with tiled floor */}
          <motion.g variants={fade(1.1)}>
            <rect x="60" y="560" width="360" height="60" fill="#083a2c" />
            <rect x="60" y="560" width="360" height="60" fill="url(#ha-tiles)" />
            <rect x="60" y="558" width="360" height="3" fill={GOLD} fillOpacity=".8" />
          </motion.g>

          {/* Lanterns */}
          <HangingLantern x={150} chain={170} delay={1.4} />
          <HangingLantern x={372} chain={250} delay={1.6} />
        </g>

        {/* Gold double outline + apex star */}
        <motion.path variants={draw(0.2, 1.6)} d={ARCH} fill="none" stroke={GOLD} strokeWidth="2.4" />
        <motion.path variants={draw(0.4, 1.8)} d={ARCH_OUTER} fill="none" stroke={GOLD} strokeWidth="1" strokeOpacity=".7" />
        <motion.g variants={fade(1.6, 0.5)}>
          <g transform="translate(228 -14)"><Star8 size={24} color={GOLD} /></g>
        </motion.g>

        {/* Floor shadow */}
        <motion.ellipse variants={fade(1.2)} cx="240" cy="626" rx="210" ry="10" fill={NIGHT} fillOpacity=".12" />
      </motion.svg>
    </div>
  );
}
