import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Logo } from './landing/landingCommon';
import { useLang } from '../i18n/LangContext';
import { SITE, waLink, mapsLink } from '../content/site';
import { Star8 } from './ui/islamic';

const TAWF_LABS_URL = 'https://tawflabs.com';

/* Tawf mark (masjid "A"), copied from tawf-labs/src/components/landing/landingCommon.tsx */
const TAWF_MARK_D = 'M255.8 350.2L253.0 349.9L252.8 312.2C252.5 220.3 252.3 211.9 250.5 205.0C248.2 196.0 243.5 187.6 238.1 182.9C235.1 180.2 233.5 178.0 233.4 176.2C233.3 174.7 233.2 153.8 233.1 129.7L233.0 86.0L159.2 86.2L85.5 86.5L85.2 135.3L84.9 184.1L81.5 189.1C79.7 191.8 77.1 196.6 75.8 199.8L73.5 205.5L73.2 277.8L72.9 350.0L40.5 350.0L8.0 350.0L7.8 221.8C7.4 53.4 7.3 62.7 9.4 55.5C11.3 49.0 17.9 35.4 21.6 30.4C26.4 23.9 42.4 14.7 55.0 11.3C61.1 9.6 68.1 9.5 159.5 9.8C263.7 10.1 263.7 10.1 274.8 15.1C289.3 21.6 297.8 30.0 304.7 44.5C311.2 58.4 311.0 50.9 311.0 207.4C311.0 285.4 310.8 349.6 310.4 349.9C309.8 350.5 260.8 350.8 255.8 350.2ZM84.7 349.4C84.3 349.0 84.0 329.3 84.0 305.6L84.0 262.5L90.9 255.9L97.9 249.3L93.8 244.4C80.7 228.7 80.9 212.9 94.3 192.8L100.5 183.6L119.1 171.0C139.2 157.5 150.0 149.5 158.0 142.3L163.1 137.7L172.3 146.7C178.8 153.0 184.8 157.6 192.5 162.3C209.0 172.2 222.6 182.4 228.9 189.7C234.3 196.0 239.8 207.1 241.0 214.2C242.5 224.0 238.5 237.2 231.4 245.5C230.1 247.0 229.0 248.5 229.0 248.7C229.0 248.9 232.0 252.0 235.6 255.4L242.3 261.8L241.6 305.1C241.3 329.0 241.0 348.8 241.0 349.3C241.0 349.7 232.8 349.9 222.8 349.8L204.5 349.5L204.0 317.5L203.5 285.5L200.9 280.5C197.8 274.8 189.8 266.8 181.9 261.7C175.0 257.2 166.3 248.3 165.5 244.8C164.6 241.3 163.6 241.3 161.3 244.6C157.1 250.7 149.4 258.1 145.1 260.1C139.5 262.8 126.6 276.4 123.6 282.9C121.7 287.2 121.5 289.8 121.0 318.5L120.5 349.5L102.9 349.8C93.3 349.9 85.1 349.7 84.7 349.4ZM158.0 132.9C152.4 130.7 146.7 123.3 145.1 116.1C143.4 108.4 147.7 101.8 157.7 96.6C162.4 94.2 162.8 94.6 159.3 98.2C153.6 104.2 152.1 107.6 153.1 112.2C154.9 120.1 158.6 124.5 165.9 127.6C170.8 129.7 173.2 129.3 177.8 126.0C183.5 121.9 183.3 124.5 177.5 129.9C173.2 133.8 172.8 134.0 166.8 133.9C163.3 133.9 159.4 133.4 158.0 132.9Z';

function TawfLabsCredit({ label }: { label: string }) {
  return (
    <a
      href={TAWF_LABS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 py-1.5 pl-2.5 pr-3.5 text-xs text-white/60 transition-colors hover:border-white/30 hover:text-white"
    >
      <svg width="16" height="16" viewBox="0 0 319 360" aria-hidden="true">
        <path d={TAWF_MARK_D} fill="currentColor" fillRule="evenodd" />
      </svg>
      <span>
        {label} <span className="font-semibold text-white">Tawf</span> <span className="text-white">Labs</span>
      </span>
    </a>
  );
}
import type { Lang } from '../content/site';

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={`${SITE.fullName}, beranda`}>
      <Logo size={30} color={light ? '#C5A869' : '#0e8a5f'} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[24px] font-semibold tracking-tight ${light ? 'text-white' : 'text-tawf-ink'}`}>{SITE.name}</span>
        <span className={`mt-1 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.22em] ${light ? 'text-white/50' : 'text-tawf-muted'}`}>Musholla · Srengseng</span>
      </span>
    </a>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-full border border-tawf-green/15 bg-white/70 p-0.5 font-mono text-[11px] font-medium">
      {(['id', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? 'bg-[#0e8a5f] text-white' : 'text-tawf-ink/60 hover:text-tawf-green'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-tawf-green text-tawf-sand px-4 py-2 rounded-lg z-[100] focus:outline-none focus:ring-2 focus:ring-tawf-gold"
      >
        {t.skip}
      </a>
      <div id="top" className="min-h-screen flex flex-col selection:bg-tawf-gold/30 selection:text-tawf-green bg-tawf-sand">
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-tawf-sand/90 backdrop-blur-md border-b border-tawf-green/10" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
              <Brand />

              <div className="hidden xl:flex items-center gap-7">
                {t.nav.map((n) => (
                  <a key={n.href} href={n.href} className="text-[13px] font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">
                    {n.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <LangToggle />
                <a
                  href="#infaq"
                  className="hidden md:flex items-center gap-2 border border-tawf-green text-tawf-green px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-tawf-green hover:text-tawf-sand transition-all duration-300"
                >
                  {t.navCta}
                </a>
                <button
                  className="xl:hidden p-3 text-tawf-green min-h-[48px] min-w-[48px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={t.menu}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Gold hairline with a star, like a mihrab border */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-px flex items-center justify-center">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A869]/70 to-[#C5A869]" />
              <Star8 size={10} color="#C5A869" className="mx-2 translate-y-[0.5px]" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A869]/70 to-[#C5A869]" />
            </div>

            {mobileMenuOpen && (
              <div className="xl:hidden border-t border-tawf-green/10 bg-white">
                <div className="px-6 py-4 space-y-4">
                  {t.nav.map((n) => (
                    <a key={n.href} href={n.href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green">
                      {n.label}
                    </a>
                  ))}
                  <a
                    href="#infaq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium tracking-widest uppercase text-tawf-green border border-tawf-green px-6 py-2.5 rounded-full text-center"
                  >
                    {t.navCta}
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>

        <main className="flex-grow pt-20" id="main-content">
          {children}
        </main>

        <footer className="bg-tawf-ink text-white/60 pt-6 pb-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Brand light />
              <p className="mt-6 text-sm max-w-sm leading-relaxed">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="text-white font-sans font-medium tracking-widest uppercase text-xs mb-6">{t.footer.explore}</h4>
              <ul className="space-y-4 text-sm">
                {t.nav.map((n) => (
                  <li key={n.href}><a href={n.href} className="hover:text-tawf-gold transition-colors">{n.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-sans font-medium tracking-widest uppercase text-xs mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm">
                <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-tawf-gold transition-colors">WhatsApp {SITE.whatsappLabel}</a></li>
                <li><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-tawf-gold transition-colors">Google Maps</a></li>
                <li><a href={TAWF_LABS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-tawf-gold transition-colors">Tawf Labs</a></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} {SITE.fullName}. {t.footer.rights}</p>
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
              <TawfLabsCredit label={t.footer.builtWith} />
              <p className="font-serif text-base text-tawf-gold" lang="ar" dir="rtl">بَارَكَ اللهُ فِيكُمْ</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
