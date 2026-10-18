import React from 'react';
import { CONTAINER, Kick, StatusPill, ACC, ACC_SOFT, MUTED2, LINE2, TILE, TILE_LINE, Reveal } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { OrnamentDivider } from '../ui/islamic';
import { AR } from '../../content/site';

export default function ScheduleSection() {
  const { t } = useLang();
  const s = t.schedule;

  return (
    <section id="kajian" className="border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <Reveal className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Kick ar={AR.kufi.schedule}>{s.kick}</Kick>
            <h2 className="max-w-[16em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">{s.title}</h2>
            <OrnamentDivider className="mt-6" />
          </div>
          <p className="max-w-[40em] text-base leading-[1.6] lg:pb-1.5" style={{ color: MUTED2 }}>{s.desc}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: LINE2 }}>
            {/* Header row (desktop) */}
            <div className="hidden grid-cols-[1fr_1fr_2fr_1.4fr_1fr] gap-6 border-b px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] md:grid" style={{ borderColor: LINE2, background: TILE, color: MUTED2 }}>
              {s.cols.map((c) => <span key={c}>{c}</span>)}
            </div>

            <ul>
              {s.rows.map(([day, time, activity, by, status], i) => {
                const live = status === 'live';
                return (
                  <li
                    key={i}
                    className={`group relative grid gap-1 border-b px-6 py-5 transition-colors duration-500 last:border-b-0 md:grid-cols-[1fr_1fr_2fr_1.4fr_1fr] md:items-center md:gap-6 md:px-8 ${live ? 'hover:bg-[#fafafa]' : 'bg-[#fdfbf6] hover:bg-[#fbf6ea]'}`}
                    style={{ borderColor: LINE2 }}
                  >
                    <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none" style={{ background: live ? ACC : '#C5A869' }} />
                    <span className="flex items-center justify-between gap-3 text-[15px] font-semibold" style={{ color: live ? '#14181c' : MUTED2 }}>
                      {day}
                      <StatusPill status={status} className="md:hidden" />
                    </span>
                    <span>
                      <span
                        className="inline-block rounded-full px-2 py-0.5 font-mono text-[11px] font-medium"
                        style={live ? { color: ACC, background: ACC_SOFT } : { color: MUTED2, background: TILE }}
                      >
                        {time}
                      </span>
                    </span>
                    <span className="text-[15px]" style={{ color: live ? '#14181c' : MUTED2 }}>{activity}</span>
                    <span className="text-sm" style={{ color: MUTED2 }}>
                      <span className="inline-block rounded-full border px-2.5 py-0.5 text-xs" style={{ background: TILE, borderColor: TILE_LINE }}>{by}</span>
                    </span>
                    <span className="hidden md:block"><StatusPill status={status} /></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="mt-4 text-xs" style={{ color: MUTED2 }}>{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
