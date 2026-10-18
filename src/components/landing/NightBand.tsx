import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { CONTAINER, Reveal } from './landingCommon';
import { ArchFrame, Lantern, MosqueSkyline, OrnamentDivider, StarPattern, GOLD, NIGHT } from '../ui/islamic';
import { useLang } from '../../i18n/LangContext';
import { AR, PHOTOS, waLink } from '../../content/site';

export default function NightBand() {
  const { t } = useLang();
  const n = t.night;

  return (
    <section id="makmur" className="relative overflow-hidden pt-20 text-white md:pt-28" style={{ background: NIGHT }}>
      <StarPattern color={GOLD} opacity={0.22} size={88} mask="radial-gradient(ellipse at 30% 40%, #000 15%, transparent 75%)" />
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 size-[520px] rounded-full bg-[#0e8a5f]/30 blur-3xl" />

      {/* Lanterns hanging from the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:block" aria-hidden="true">
        <Lantern className="absolute left-[6%] top-0" chain={70} />
        <Lantern className="absolute left-[44%] top-0" chain={40} delay={0.8} />
        <Lantern className="absolute right-[8%] top-0" chain={110} delay={1.6} />
      </div>

      <div className={`${CONTAINER} relative grid items-center gap-14 pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:pb-32`}>
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2.5 text-sm font-medium text-[#D9C08C]">
            <svg width="11" height="11" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 8H32V32H8Z M20 3L37 20L20 37L3 20Z" fill="#D9C08C" /></svg>
            {n.kick}
          </p>
          <h2 className="max-w-[14em] text-[clamp(34px,4.6vw,56px)] font-medium leading-[1.05] tracking-[-0.03em] text-white">{n.title}</h2>

          <OrnamentDivider className="mt-8" />

          <p lang="ar" dir="rtl" className="mt-6 text-left font-arabic text-[clamp(26px,3vw,36px)] leading-[1.7] text-[#f0dca6]">{AR.hadith}</p>
          <blockquote className="mt-3 max-w-[36em] text-[16px] italic leading-[1.6] text-white/75">{n.hadithTr}</blockquote>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#C5A869]">{n.hadithRef}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#infaq"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#C5A869] px-6 text-[15px] font-semibold text-[#0a3f2f] transition-colors hover:bg-[#D9C08C]"
            >
              {n.cta1}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(n.joinText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/25 px-6 text-[15px] font-medium text-white transition-colors hover:border-[#C5A869] hover:text-[#f0dca6]"
            >
              <Users className="size-4" />
              {n.cta2}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <ArchFrame className="aspect-[3/4] w-[min(360px,80vw)]">
            <img src={PHOTOS.kaligrafi} alt={n.photoAlt} loading="lazy" className="h-full w-full object-cover" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a3f2f]/70 via-transparent to-transparent" />
          </ArchFrame>
        </Reveal>
      </div>

      <MosqueSkyline color="#1A1A1A" className="relative h-[90px] md:h-[120px]" />
    </section>
  );
}
