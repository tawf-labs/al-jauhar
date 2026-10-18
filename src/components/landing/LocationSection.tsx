import React from 'react';
import { ArrowUpRight, MapPin, MessageCircle, Users } from 'lucide-react';
import { CONTAINER, Kick, Label, Lnk, Reveal, ACC, ACC_SOFT, MUTED2, LINE2, TILE } from './landingCommon';
import { useLang } from '../../i18n/LangContext';
import { OrnamentDivider } from '../ui/islamic';
import { AR, SITE, mapsEmbed, mapsLink, waLink } from '../../content/site';

export default function LocationSection() {
  const { t } = useLang();
  const l = t.location;

  const contacts = [
    { icon: MessageCircle, label: `WhatsApp ${SITE.whatsappLabel}`, href: waLink() },
  ];

  return (
    <section id="lokasi" className="border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <Reveal className="mb-10 md:mb-14">
          <Kick ar={AR.kufi.location}>{l.kick}</Kick>
          <h2 className="max-w-[15em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">{l.title}</h2>
          <p className="mt-5 max-w-[36em] text-base leading-[1.6]" style={{ color: MUTED2 }}>{l.desc}</p>
          <OrnamentDivider className="mt-6" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: LINE2 }}>
            <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
              <div className="flex flex-col">
                <div className="border-b px-6 py-7 md:px-8" style={{ borderColor: LINE2 }}>
                  <Label>{l.address}</Label>
                  <p className="mt-4 flex gap-3 text-[17px] font-semibold tracking-tight text-[#14181c]">
                    <MapPin className="mt-0.5 size-5 shrink-0" style={{ color: ACC }} />
                    <span>
                      {SITE.fullName}
                      <span className="mt-1 block text-[15px] font-normal leading-[1.6]" style={{ color: MUTED2 }}>
                        {SITE.street}<br />{SITE.area}<br />{SITE.city}
                      </span>
                    </span>
                  </p>
                  <div className="pt-5"><Lnk href={mapsLink}>{l.open}</Lnk></div>
                </div>

                <div className="flex-1 px-6 py-7 md:px-8">
                  <Label>{l.contact}</Label>
                  <ul className="mt-4 grid gap-2">
                    {contacts.map(({ icon: Icon, label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-[#14181c] transition-colors hover:border-[#0e8a5f]"
                          style={{ borderColor: '#e4e6ea' }}
                        >
                          <Icon className="size-4" style={{ color: ACC }} />
                          <span className="font-mono text-[13px]">{label}</span>
                          <ArrowUpRight className="ml-auto size-3.5 opacity-40 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex gap-2.5 text-[13px] leading-[1.55]" style={{ color: MUTED2 }}>
                    <Users className="mt-0.5 size-4 shrink-0" style={{ color: ACC }} />
                    <span>
                      <span className="font-medium text-[#14181c]">{SITE.org}</span>
                      <br />
                      {SITE.community}
                    </span>
                  </p>
                </div>
              </div>

              {/* Map, framed like the platform preview */}
              <div
                className="relative flex items-center justify-center overflow-hidden border-t px-5 py-10 md:px-10 md:py-14 lg:border-l lg:border-t-0"
                style={{ borderColor: LINE2, backgroundColor: TILE, backgroundImage: 'radial-gradient(#dde0e5 1px, transparent 1px)', backgroundSize: '18px 18px' }}
              >
                <span aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 size-[320px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: ACC_SOFT }} />
                <div className="relative w-full max-w-[520px] overflow-hidden rounded-xl border bg-white shadow-[0_1px_2px_rgba(20,24,32,.05),0_12px_32px_rgba(20,24,32,.08)]" style={{ borderColor: '#e4e6ea' }}>
                  <div className="flex h-10 items-center gap-3 border-b bg-[#fafafa] px-4" style={{ borderColor: '#e4e6ea' }}>
                    <span className="flex gap-1.5" aria-hidden="true">
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                      <i className="size-2.5 rounded-full bg-[#e4e6ea]" />
                    </span>
                    <span className="min-w-0 flex-1 truncate rounded-md border bg-white px-3 py-1 text-center font-mono text-[11px] text-[#666b75]" style={{ borderColor: '#e4e6ea' }}>
                      maps · {SITE.mapsQuery}
                    </span>
                  </div>
                  <div className="relative">
                    <iframe
                      title={l.mapTitle}
                      src={mapsEmbed}
                      className="block h-[340px] w-full border-0 bg-[#f5f6f8]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                    {/* Always reachable, even if the embed fails to load on the visitor's network */}
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(14,138,95,.35)] transition-colors hover:bg-[#0b7551]"
                      style={{ background: ACC }}
                    >
                      <MapPin className="size-4" />
                      {l.open}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
