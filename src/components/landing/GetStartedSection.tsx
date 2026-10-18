import React, { useState } from 'react';
import { Check, Copy, MessageCircle, QrCode } from 'lucide-react';
import { CONTAINER, Kick, Label, ACC, ACC_DARK, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, TILE, Reveal } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { OrnamentDivider, StarPattern, GOLD } from '../ui/islamic';
import { AR, SITE, waLink } from '../../content/site';

/* Crosshair "+" di titik temu garis grid */
function Plus({ left, className = '' }: { left: number; className?: string }) {
  return (
    <span aria-hidden="true" style={{ left: `${left}%` }} className={`pointer-events-none absolute z-10 hidden size-[19px] -translate-x-1/2 lg:block ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: LINE_STRONG }} />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: LINE_STRONG }} />
    </span>
  );
}

export default function GetStartedSection() {
  const { t } = useLang();
  const g = t.giving;
  const steps = g.steps;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.bank.number.replace(/\s/g, ''));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="infaq" className="border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <Reveal className="mb-10 md:mb-14">
          <Kick ar={AR.kufi.giving}>{g.kick}</Kick>
          <h2 className="max-w-[15em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">{g.title}</h2>
          <p className="mt-5 max-w-[36em] text-base leading-[1.6]" style={{ color: MUTED2 }}>{g.desc}</p>
          <OrnamentDivider className="mt-6" />
        </Reveal>

        <div className="relative border-y border-x" style={{ borderColor: LINE2 }}>
          {/* Crosshair di persimpangan garis atas dan bawah */}
          {[25, 50, 75].map((left) => (
            <React.Fragment key={left}>
              <Plus left={left} className="-top-[10px]" />
              <Plus left={left} className="-bottom-[10px]" />
            </React.Fragment>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, title, d], i) => (
              <Reveal
                key={n}
                delay={i * 0.08}
                className="group relative border-b px-6 pb-12 pt-9 transition-colors duration-500 last:border-b-0 hover:bg-[#fafafa] sm:px-8 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                style={{ borderColor: LINE2 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  style={{ background: ACC }}
                />
                <span className="mb-5 inline-block rounded-full px-2 py-0.5 font-mono text-[11px] font-medium" style={{ color: ACC, background: ACC_SOFT }}>{n}</span>
                <h3 className="text-[18px] font-medium tracking-tight text-[#14181c]">{title}</h3>
                <p className="mt-2.5 max-w-[34ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div
            className="relative overflow-hidden rounded-2xl border bg-white p-6 md:p-8"
            style={{ borderColor: LINE2, backgroundImage: 'radial-gradient(#dde0e5 1px, transparent 1px)', backgroundSize: '18px 18px' }}
          >
            <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-[280px] rounded-full blur-3xl" style={{ background: ACC_SOFT }} />
            <StarPattern color={GOLD} opacity={0.5} size={56} mask="radial-gradient(ellipse at 100% 50%, #000 0%, transparent 55%)" />
            <div className="relative">
              <Label>{g.bankLabel}</Label>
              <p className="mt-5 text-sm" style={{ color: MUTED2 }}>{SITE.bank.name}</p>
              <p className="mt-1 font-mono text-[clamp(26px,3.4vw,36px)] font-medium tracking-tight text-[#14181c]">{SITE.bank.number}</p>
              <p className="mt-1 text-sm" style={{ color: MUTED2 }}>{g.holderLabel} <span className="font-medium text-[#14181c]">{SITE.bank.holder}</span></p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-white transition-colors"
                  style={{ background: copied ? ACC_DARK : ACC }}
                  aria-live="polite"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? g.copied : g.copy}
                </button>
                <a
                  href={waLink(g.confirmText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border bg-white px-5 text-[15px] font-medium text-[#14181c] transition-colors hover:bg-[#fafafa]"
                  style={{ borderColor: LINE_STRONG }}
                >
                  <MessageCircle className="size-4" style={{ color: ACC }} />
                  {g.confirm}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center" style={{ borderColor: LINE_STRONG, background: TILE }}>
            <div className="flex size-28 items-center justify-center rounded-xl border bg-white" style={{ borderColor: LINE2 }}>
              <QrCode className="size-14" style={{ color: MUTED2 }} />
            </div>
            <p className="mt-4 text-[15px] font-medium text-[#14181c]">{g.qris}</p>
            <p className="mt-1 max-w-[26ch] text-sm" style={{ color: MUTED2 }}>{g.qrisNote}</p>
          </div>
        </Reveal>

        {/* QS. Al-Baqarah 2:261 */}
        <Reveal delay={0.12}>
          <figure className="relative mx-auto mt-10 max-w-[760px] overflow-hidden rounded-2xl border border-[#C5A869]/40 bg-[#fbf8f1] px-6 py-8 text-center md:px-10">
            <StarPattern color={GOLD} opacity={0.35} size={56} mask="linear-gradient(90deg, #000, transparent 30%, transparent 70%, #000)" />
            <div className="relative">
              <OrnamentDivider align="center" />
              <p lang="ar" dir="rtl" className="mt-5 font-arabic text-[clamp(22px,2.6vw,30px)] leading-[1.9] text-[#14181c]">{AR.ayah}</p>
              <blockquote className="mx-auto mt-4 max-w-[46em] text-[15px] italic leading-[1.6]" style={{ color: MUTED2 }}>{g.ayahTr}</blockquote>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a7a2e]">{g.ayahRef}</figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}