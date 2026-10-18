import React from 'react';
import { CalendarDays, Clock, MapPin, Mic } from 'lucide-react';
import { CONTAINER, Kick, ACC, MUTED2, LINE2, TILE, Reveal } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { OrnamentDivider, StarPattern, Star8, GOLD, NIGHT } from '../ui/islamic';
import { AR, NEXT_KAJIAN, SITE } from '../../content/site';

/* Featured monthly kajian; the "today / upcoming / held" text follows the clock so a past event never reads as upcoming. */
function KajianCard() {
  const { t } = useLang();
  const e = t.schedule.event;
  const start = new Date(NEXT_KAJIAN.start);
  const end = new Date(NEXT_KAJIAN.end);
  const now = new Date();
  const dayKey = (d: Date) => d.toLocaleDateString('en-CA', { timeZone: 'Asia/Jakarta' });
  const state = now > end ? 'past' : dayKey(now) === dayKey(start) ? 'today' : 'upcoming';

  const fmt = (o: Intl.DateTimeFormatOptions) => start.toLocaleString(t.prayer.locale, { timeZone: 'Asia/Jakarta', ...o });
  const weekday = fmt({ weekday: 'long' });
  const day = fmt({ day: 'numeric' });
  const monthYear = fmt({ month: 'long', year: 'numeric' });
  const time = fmt({ hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl border" style={{ borderColor: '#e3d3a8', background: '#fbf8f1' }}>
      <StarPattern color={GOLD} opacity={0.4} size={56} mask="radial-gradient(ellipse at 0% 50%, #000 0%, transparent 45%)" />
      <div className="relative grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-8">
        {/* Date in a mihrab-shaped tile */}
        <div
          className="mx-auto flex w-[150px] flex-col items-center justify-center px-4 pb-5 pt-9 text-center text-white md:mx-0"
          style={{ background: NIGHT, borderRadius: '75px 75px 14px 14px', boxShadow: `inset 0 0 0 1px ${GOLD}` }}
        >
          <Star8 size={14} color={GOLD} />
          <span className="mt-2 text-xs uppercase tracking-[0.18em] text-[#D9C08C]">{weekday}</span>
          <span className="font-serif text-[52px] font-medium leading-none">{day}</span>
          <span className="mt-1 text-xs text-white/75">{monthYear}</span>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium" style={{ color: ACC }}>
            {e.kick} <span style={{ color: state === 'past' ? MUTED2 : '#9a7a2e' }}>· {e[state]}</span>
          </p>
          <h3 className="max-w-[24em] text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.2] tracking-tight text-[#14181c]">“{e.theme}”</h3>

          <ul className="mt-5 grid gap-2.5 text-[14.5px] sm:grid-cols-2" style={{ color: MUTED2 }}>
            <li className="flex items-start gap-2.5"><Mic className="mt-0.5 size-4 shrink-0" style={{ color: ACC }} /><span>{e.speakerLabel}: <b className="font-semibold text-[#14181c]">{NEXT_KAJIAN.speaker}</b></span></li>
            <li className="flex items-start gap-2.5"><Clock className="mt-0.5 size-4 shrink-0" style={{ color: ACC }} /><span>{time} {e.timeSuffix}</span></li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0" style={{ color: ACC }} /><span>{SITE.fullName}, {SITE.street}</span></li>
            <li className="flex items-start gap-2.5"><CalendarDays className="mt-0.5 size-4 shrink-0" style={{ color: ACC }} /><span>{e.agenda.join(' · ')}</span></li>
          </ul>

          <p className="mt-4 text-xs" style={{ color: MUTED2 }}>
            {state === 'past' ? e.pastNote : e.host}
          </p>
        </div>
      </div>
    </div>
  );
}

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
          <KajianCard />
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: LINE2 }}>
            {/* Header row (desktop) */}
            <div className="hidden grid-cols-[1.2fr_1.2fr_2fr_1.2fr] gap-6 border-b px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] md:grid" style={{ borderColor: LINE2, background: TILE, color: MUTED2 }}>
              {s.cols.map((c) => <span key={c}>{c}</span>)}
            </div>

            <ul>
              {s.rows.map(([day, time, activity, by], i) => (
                <li
                  key={i}
                  className="group relative grid gap-1 border-b px-6 py-5 transition-colors duration-500 last:border-b-0 hover:bg-[#fafafa] md:grid-cols-[1.2fr_1.2fr_2fr_1.2fr] md:items-center md:gap-6 md:px-8"
                  style={{ borderColor: LINE2 }}
                >
                  <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none" style={{ background: ACC }} />
                  <span className="text-[15px] font-semibold text-[#14181c]">{day}</span>
                  <span className="font-mono text-[13px]" style={{ color: ACC }}>{time}</span>
                  <span className="text-[15px] text-[#14181c]">{activity}</span>
                  <span className="text-sm" style={{ color: MUTED2 }}>{by}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs" style={{ color: MUTED2 }}>{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
