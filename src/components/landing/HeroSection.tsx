import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { useLang } from '../../i18n/LangContext';
import HeroArch from '../ui/HeroArch';
import { Bismillah, StarPattern, GOLD } from '../ui/islamic';
import { CONTAINER } from './landingCommon';

export default function HeroSection() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="relative w-full -mt-16 overflow-hidden pb-12">
      <StarPattern color={GOLD} opacity={0.16} size={96} mask="radial-gradient(ellipse at 75% 40%, #000 10%, transparent 60%)" />
      <div className={`${CONTAINER} relative`}>
        <div className="grid min-h-[85svh] items-center gap-8 py-8 pt-24 md:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="transform-gpu pr-2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e3d3a8] bg-[#fbf6ea] px-3 py-1 text-xs font-medium text-[#9a7a2e]">
                <span className="size-1.5 rounded-full bg-[#0e8a5f]" />
                {h.badge}
              </span>
              <Bismillah className="text-[clamp(26px,2.6vw,34px)]" />
              <p className="mt-1 text-xs italic text-tawf-muted">{h.bismillahTr}</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="m-0 max-w-[10em] text-[clamp(40px,5.2vw,68px)] font-medium leading-[1.04] tracking-[-0.035em] text-[#14181c] max-md:mx-auto"
            >
              {h.pre} <span className="relative inline-block text-[#0e8a5f]">{h.highlight}<span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-xs bg-[#0e8a5f]/12" /></span> {h.post}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[32em] text-[clamp(16px,1.4vw,18.5px)] leading-[1.6] text-[#5d646d] max-md:mx-auto"
            >
              <strong className="font-semibold text-[#14181c]">{h.leadStrong}</strong> {h.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5 md:justify-start"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                href="#sholat"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#0e8a5f] px-6 text-[15px] font-medium text-white shadow-sm shadow-[#0e8a5f]/25 transition-all hover:bg-[#0b7551] hover:shadow-md hover:shadow-[#0e8a5f]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e8a5f]"
              >
                <Clock className="size-4" />
                <span>{h.cta1}</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>

              <motion.div whileHover={{ y: -2, scale: 1.015 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#infaq"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-[#d3d7dd] bg-white/90 px-6 text-[15px] font-medium text-[#14181c] backdrop-blur-xs transition-all hover:border-[#14181c] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e8a5f]"
                >
                  <span>{h.cta2}</span>
                  <ArrowRight className="size-4 text-[#5d646d] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#14181c]" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="transform-gpu mx-auto w-full max-w-[520px] pt-6 lg:mt-10"
          >
            <HeroArch />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
