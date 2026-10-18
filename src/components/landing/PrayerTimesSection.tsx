import React, { useEffect, useState } from 'react';
import { MapPin, Moon } from 'lucide-react';
import { CONTAINER, Kick, ACC, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, Reveal } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { AR, SITE } from '../../content/site';
import { Star8, StarPattern, GOLD } from '../ui/islamic';
import { PRAYERS, fetchPrayerDay, nextPrayer, type PrayerDay } from '../../lib/prayerTimes';

/* Crosshair "+" di titik temu garis grid (sama seperti GetStartedSection) */
function Plus({ left, className = '' }: { left: number; className?: string }) {
  return (
    <span aria-hidden="true" style={{ left: `${left}%` }} className={`pointer-events-none absolute z-10 hidden size-[19px] -translate-x-1/2 lg:block ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: LINE_STRONG }} />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: LINE_STRONG }} />
    </span>
  );
}

export default function PrayerTimesSection() {
  const { t } = useLang();
  const p = t.prayer;
  const [day, setDay] = useState<PrayerDay | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let alive = true;
    fetchPrayerDay().then((d) => alive && setDay(d));
    const tick = window.setInterval(() => setNow(new Date()), 30_000);
    return () => { alive = false; window.clearInterval(tick); };
  }, []);

  const next = day ? nextPrayer(day.timings, now) : null;
  const left = next ? `${Math.floor(next.minutesLeft / 60)}${p.hours} ${next.minutesLeft % 60}${p.minutes}` : '';
  const gregorian = now.toLocaleDateString(p.locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const hijri = day?.hijri ? `${day.hijri.day} ${p.hijriMonths[day.hijri.month - 1]} ${day.hijri.year} H` : null;

  return (
    <section id="sholat" className="relative overflow-hidden border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <StarPattern color={GOLD} opacity={0.22} size={72} mask="radial-gradient(ellipse at 100% 0%, #000 0%, transparent 45%)" />
      <div className={`${CONTAINER} relative`}>
        <Reveal className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Kick ar={AR.kufi.prayer}>{p.kick}</Kick>
            <h2 className="max-w-[15em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">{p.title}</h2>
            <p className="mt-5 max-w-[36em] text-base leading-[1.6]" style={{ color: MUTED2 }}>{p.desc}</p>
          </div>
          <div className="flex flex-col gap-2 lg:items-end lg:pb-1.5 lg:text-right">
            <p className="text-[15px] font-medium text-[#14181c]">{gregorian}</p>
            {hijri && (
              <p className="inline-flex items-center gap-1.5 text-sm lg:justify-end" style={{ color: MUTED2 }}>
                <Moon className="size-3.5" style={{ color: ACC }} /> {hijri}
              </p>
            )}
            <p className="inline-flex items-center gap-1.5 text-sm lg:justify-end" style={{ color: MUTED2 }}>
              <MapPin className="size-3.5" style={{ color: ACC }} /> {SITE.area}, {SITE.city.split(',')[0]}
            </p>
          </div>
        </Reveal>

        <div className="relative border-x border-y" style={{ borderColor: LINE2 }}>
          {[100 / 6, 200 / 6, 50, 400 / 6, 500 / 6].map((l) => (
            <React.Fragment key={l}>
              <Plus left={l} className="-top-[10px]" />
              <Plus left={l} className="-bottom-[10px]" />
            </React.Fragment>
          ))}

          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6" style={{ background: LINE2 }} aria-live="polite">
            {PRAYERS.map((k, i) => {
              const isNext = next?.key === k;
              const isSunrise = k === 'Sunrise';
              return (
                <Reveal
                  key={k}
                  delay={i * 0.06}
                  className={`group relative px-5 pb-9 pt-8 transition-colors duration-500 sm:px-7 ${isNext ? 'bg-[#f3faf7]' : 'bg-white hover:bg-[#fafafa]'}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-0.5 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none ${isNext ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ background: ACC }}
                  />
                  <span
                    className="mb-5 inline-block rounded-full px-2 py-0.5 font-mono text-[11px] font-medium"
                    style={isNext ? { color: '#fff', background: ACC } : { color: isSunrise ? MUTED2 : ACC, background: isSunrise ? '#f5f6f8' : ACC_SOFT }}
                  >
                    {isNext ? <span className="inline-flex items-center gap-1"><Star8 size={9} color="#fff" />{p.next}</span> : String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Mihrab niche */}
                  <svg aria-hidden="true" viewBox="0 0 40 56" className="absolute right-5 top-6 h-14 w-10" fill="none">
                    <path d="M2 56V22C2 11 11 5 20 1C29 5 38 11 38 22V56" stroke={GOLD} strokeOpacity={isNext ? 0.9 : 0.45} strokeWidth="1.2" />
                    <path d="M9 56V25C9 18 14 13 20 10C26 13 31 18 31 25V56" stroke={GOLD} strokeOpacity={isNext ? 0.6 : 0.25} strokeWidth="1" />
                  </svg>
                  <h3 className="text-[18px] font-medium tracking-tight" style={{ color: isSunrise ? MUTED2 : '#14181c' }}>{p.names[k]}</h3>
                  <p lang="ar" dir="rtl" className="mt-0.5 text-left font-arabic text-[17px] leading-tight text-[#9a7a2e]">{AR.prayers[k]}</p>
                  <p className={`mt-1.5 font-mono text-[clamp(26px,2.6vw,34px)] font-medium tracking-tight ${day ? '' : 'animate-pulse'}`} style={{ color: isNext ? ACC : '#14181c' }}>
                    {day ? day.timings[k] : '--:--'}
                  </p>
                  {isNext && <p className="mt-1 text-xs" style={{ color: MUTED2 }}>{p.in} {left}</p>}
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-2 text-xs md:flex-row" style={{ color: MUTED2 }}>
          <p>{day && !day.live ? p.approx : p.source}</p>
          <p>{p.friday}</p>
        </div>
      </div>
    </section>
  );
}
