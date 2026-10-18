import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTAINER, Reveal, Kick, Lnk, ACC, ACC_SOFT, MUTED2, LINE2, TILE, TILE_LINE, usePrefersReducedMotion } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { AR, waLink } from '../../content/site';
import type { SiteContent } from '../../content/site';

type V = SiteContent['programs']['visuals'];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Rise({ on, delay = 0, className, children }: { on: boolean; delay?: number; className?: string; children: React.ReactNode; key?: React.Key }) {
  const reduce = usePrefersReducedMotion();
  return (
    <div
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(10px)',
        transition: reduce ? 'none' : `opacity .5s ease ${on ? delay : 0}ms, transform .5s cubic-bezier(.2,.7,.2,1) ${on ? delay : 0}ms`,
      }}
    >
      {children}
    </div>
  );
}

function VisualHead({ title, on }: { title: string; on: boolean }) {
  return (
    <Rise on={on} className="mb-4">
      <b className="text-[14px] font-semibold text-[#14181c]">{title}</b>
    </Rise>
  );
}

/* ------------------------------------------------------------------ */
/* Per-platform previews                                               */
/* ------------------------------------------------------------------ */

function DonationVisual({ on, v }: { on: boolean; v: V }) {
  const { rows } = v.ledger;
  return (
    <div>
      <VisualHead title={v.ledger.title} on={on} />
      <div className="grid gap-2">
        {rows.map(([name, hash], i) => (
          <Rise key={name} on={on} delay={100 + i * 90} className="flex items-center gap-3 rounded-[10px] border border-[#e4e6ea] bg-white px-3.5 py-2.5 font-mono text-xs">
            <b className="font-medium text-[#14181c]">{name}</b>
            <span className="text-[#666b75]">{hash}</span>
            <CheckCircle2 className="ml-auto size-3.5 shrink-0 text-[#0e8a5f]" />
          </Rise>
        ))}
      </div>
      <Rise on={on} delay={420} className="mt-3 rounded-[10px] border border-dashed border-[#d3d7dd] bg-[#fafafa] p-3">
        <div className="flex items-center justify-between text-[11px] text-[#666b75]">
          <span>{v.ledger.receipt}</span>
          <span className="font-mono">{v.ledger.receiptNo}</span>
        </div>
        <div className="mt-2.5 grid gap-1.5">
          <span className="block h-1.5 w-[72%] rounded-full bg-[#0e8a5f]/80" />
          <span className="block h-1.5 w-[48%] rounded-full bg-[#e4e6ea]" />
        </div>
      </Rise>
    </div>
  );
}

/* Checklist timeline for programs that are still being prepared (TPA, qurban) */
function StepsVisual({ on, data }: { on: boolean; data: { title: string; steps: (string | boolean)[][] } }) {
  const steps = data.steps as [string, string, boolean][];
  return (
    <div>
      <VisualHead title={data.title} on={on} />
      <div className="relative pl-6">
        <span className="absolute bottom-2 left-[5px] top-2 w-px bg-[#e4e6ea]" />
        {steps.map(([title, sub, done], i) => (
          <Rise key={title} on={on} delay={100 + i * 110} className="relative pb-5 last:pb-0">
            <span className={`absolute -left-6 top-1 size-[11px] rounded-full border ${done ? 'border-[#0e8a5f] bg-[#0e8a5f]' : 'border-dashed border-[#C5A869] bg-white'}`} />
            <div className="text-[13px] font-medium text-[#14181c]">{title}</div>
            <div className="text-xs text-[#666b75]">{sub}</div>
          </Rise>
        ))}
      </div>
    </div>
  );
}

const TpaVisual = ({ on, v }: { on: boolean; v: V }) => <StepsVisual on={on} data={v.tpa} />;
const QurbanVisual = ({ on, v }: { on: boolean; v: V }) => <StepsVisual on={on} data={v.qurban} />;

function WaqfChartVisual({ on, v }: { on: boolean; v: V }) {
  const reduce = usePrefersReducedMotion();
  const yields = [8, 16, 26, 38, 50, 62];
  return (
    <div>
      <VisualHead title={v.wakaf.title} on={on} />
      <Rise on={on} delay={80} className="rounded-[10px] border border-[#e4e6ea] bg-[#fafafa] p-3">
        <div className="flex h-[124px] items-end gap-2">
          {yields.map((h, i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end gap-[3px]">
              <span
                className="block origin-bottom rounded-t-md bg-[#0e8a5f]"
                style={{
                  height: `${h}%`,
                  opacity: 0.3 + i * 0.14,
                  transform: on ? 'scaleY(1)' : 'scaleY(0)',
                  transition: reduce ? 'none' : `transform .7s cubic-bezier(.2,.7,.2,1) ${150 + i * 70}ms`,
                }}
              />
              <span className="block h-[34%] rounded-[3px] bg-[#e4e6ea]" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4 text-[11px] text-[#666b75]">
          <span className="flex items-center gap-1.5"><i className="size-2 rounded-sm bg-[#e4e6ea]" />{v.wakaf.legendBase}</span>
          <span className="flex items-center gap-1.5"><i className="size-2 rounded-sm bg-[#0e8a5f]" />{v.wakaf.legendYield}</span>
        </div>
      </Rise>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {v.wakaf.cards.map(([t, s], i) => (
          <Rise key={t} on={on} delay={460 + i * 90} className="rounded-[10px] border border-[#e4e6ea] bg-white px-3 py-2.5">
            <div className="text-[11px] text-[#666b75]">{t}</div>
            <div className="text-[13px] font-medium text-[#14181c]">{s}</div>
          </Rise>
        ))}
      </div>
    </div>
  );
}

// Same order as t.programs.list: infaq, wakaf, tpa, qurban
const VISUALS = [DonationVisual, WaqfChartVisual, TpaVisual, QurbanVisual];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */


export default function PlatformsSection() {
  const { t } = useLang();
  const pr = t.programs;
  const PLATFORMS = pr.list;
  const reduce = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = PLATFORMS.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (i: number) => { setAuto(false); setActive((i + count) % count); };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); select(active + 1); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); select(active - 1); }
  };

  const running = auto && !reduce;
  const paused = hovered || !inView;

  return (
    <section id="program" className="border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <Reveal className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Kick ar={AR.kufi.programs}>{pr.kick}</Kick>
            <h2 className="max-w-[16em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">{pr.title}</h2>
          </div>
          <p className="max-w-[40em] text-base leading-[1.6] lg:pb-1.5" style={{ color: MUTED2 }}>
            {pr.desc}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            ref={ref}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: LINE2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
              {/* Left: platform list */}
              <div role="tablist" aria-label={pr.kick} aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col">
                {PLATFORMS.map((p, i) => {
                  const on = active === i;
                  return (
                    <div key={p.ctag} className="relative border-b last:border-b-0 lg:last:border-b" style={{ borderColor: LINE2 }}>
                      {on && (
                        <span
                          key={`fill-${i}-${running}`}
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-[2px] origin-top"
                          style={{
                            background: ACC,
                            animation: running ? 'platformFill 5.5s linear forwards' : 'none',
                            animationPlayState: paused ? 'paused' : 'running',
                          }}
                          onAnimationEnd={() => setActive((a) => (a + 1) % count)}
                        />
                      )}
                      <h3 className="m-0">
                        <button
                          id={`platform-tab-${i}`}
                          role="tab"
                          aria-selected={on}
                          aria-controls="platform-panel"
                          tabIndex={on ? 0 : -1}
                          onClick={() => select(i)}
                          className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-8"
                        >
                          <span
                            className="shrink-0 rounded-[7px] border px-2.5 py-1.5 font-mono text-xs font-medium transition-all duration-500"
                            style={on ? { background: ACC, borderColor: ACC, color: '#fff' } : { background: TILE, borderColor: TILE_LINE, color: MUTED2 }}
                          >
                            {p.ctag}
                          </span>
                          <span className="text-[17px] font-semibold tracking-tight transition-colors duration-500" style={{ color: on ? '#14181c' : MUTED2 }}>
                            {p.title}
                          </span>
                        </button>
                      </h3>

                      <div
                        className="grid"
                        aria-hidden={!on}
                        style={{
                          gridTemplateRows: on ? '1fr' : '0fr',
                          opacity: on ? 1 : 0,
                          visibility: on ? 'visible' : 'hidden',
                          transition: reduce ? 'none' : `grid-template-rows .5s ease, opacity .4s ease, visibility 0s linear ${on ? '0s' : '.5s'}`,
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 md:px-8">
                            <p className="max-w-[44ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>{p.desc}</p>
                            <div className="pt-4"><Lnk href={waLink(`Assalamu’alaikum, saya ingin bertanya tentang program ${p.label}.`)}>{pr.visit}</Lnk></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right: live preview */}
              <div
                id="platform-panel"
                role="tabpanel"
                aria-labelledby={`platform-tab-${active}`}
                className="relative flex items-center justify-center overflow-hidden border-t px-5 py-10 md:px-10 md:py-14 lg:border-l lg:border-t-0"
                style={{ borderColor: LINE2, backgroundColor: TILE, backgroundImage: 'radial-gradient(#dde0e5 1px, transparent 1px)', backgroundSize: '18px 18px' }}
              >
                <span aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 size-[320px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: ACC_SOFT }} />

                <div className="relative w-full max-w-[440px] overflow-hidden rounded-xl border bg-white shadow-[0_1px_2px_rgba(20,24,32,.05),0_12px_32px_rgba(20,24,32,.08)]" style={{ borderColor: '#e4e6ea' }}>
                  <div className="flex h-10 items-center gap-3 border-b bg-[#fafafa] px-4" style={{ borderColor: '#e4e6ea' }}>
                    <span className="flex gap-1.5" aria-hidden="true">
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                    </span>
                    <span className="min-w-0 flex-1 truncate rounded-md border bg-white px-3 py-1 text-center font-mono text-[11px] text-[#666b75]" style={{ borderColor: '#e4e6ea' }}>
                      <span key={active} className="inline-block" style={{ animation: reduce ? 'none' : 'platformFade .45s ease' }}>{PLATFORMS[active].host}</span>
                    </span>
                  </div>

                  <div className="relative h-[340px]">
                    {VISUALS.map((Visual, i) => {
                      const on = active === i;
                      return (
                        <div
                          key={i}
                          aria-hidden={!on}
                          className="pointer-events-none absolute inset-0 p-5"
                          style={{
                            opacity: on ? 1 : 0,
                            transform: on ? 'none' : 'translateY(10px) scale(.985)',
                            transition: reduce ? 'none' : 'opacity .5s ease, transform .5s cubic-bezier(.2,.7,.2,1)',
                          }}
                        >
                          <Visual on={on} v={pr.visuals} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Network rail */}
            <div className="hidden items-center justify-between gap-6 border-t px-8 py-5 md:flex" style={{ borderColor: LINE2 }}>
              <p className="text-sm" style={{ color: MUTED2 }}>{pr.rail}</p>
              <div className="flex items-center" aria-hidden="true">
                {PLATFORMS.map((p, i) => (
                  <React.Fragment key={p.ctag}>
                    <span className="flex items-center gap-2 text-xs font-medium transition-colors duration-500" style={{ color: active === i ? '#14181c' : MUTED2 }}>
                      <span
                        className="size-2.5 rounded-full border transition-all duration-500"
                        style={active === i ? { background: ACC, borderColor: ACC, boxShadow: `0 0 0 4px ${ACC_SOFT}` } : { background: '#fff', borderColor: MUTED2 }}
                      />
                      {p.label}
                    </span>
                    {i < count - 1 && <span className="mx-4 h-px w-10 lg:w-14" style={{ background: '#d3d7dd' }} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @keyframes platformFill { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes platformFade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}