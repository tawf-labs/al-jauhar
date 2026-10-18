import React from 'react';
import { CONTAINER, Reveal } from './landingCommon';
import { ArchFrame, StarPattern, OrnamentDivider, GOLD } from '../ui/islamic';
import { AR, PHOTOS } from '../../content/site';
import { useLang } from '../../i18n/LangContext';

export default function MissionSection() {
  const { t } = useLang();
  const m = t.mission;
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white border-y border-tawf-green/10">
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <p className="mb-[18px] flex flex-wrap items-center gap-2.5 text-[15px] font-semibold text-tawf-ink">
              {m.eyebrow}
              <span className="h-px w-5 bg-[#C5A869]" aria-hidden="true" />
              <span lang="ar" dir="rtl" className="font-kufi text-base font-medium text-[#9a7a2e]">{AR.kufi.about}</span>
            </p>
            <h2 className="mb-5 max-w-[14ch] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-tight text-tawf-ink">{m.title}</h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-tawf-muted">{m.desc}</p>
            <OrnamentDivider className="mt-8" />
            <p lang="ar" dir="rtl" className="mt-5 text-left font-arabic text-[28px] text-[#9a7a2e]">{AR.name}</p>
          </div>
          <div className="relative flex items-end justify-center py-8">
            <StarPattern color={GOLD} opacity={0.4} size={64} mask="radial-gradient(circle at 50% 55%, #000 20%, transparent 65%)" />
            <ArchFrame className="aspect-[3/4] w-[min(320px,78%)]">
              <img src={PHOTOS.interior.src} alt={m.photoAlt} loading="lazy" className="h-full w-full object-cover" />
            </ArchFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
