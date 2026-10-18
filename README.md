# Musholla Al Jauhar

Landing page for Musholla Al Jauhar, Srengseng, Kembangan, Jakarta Barat.
Built with React + Vite + Tailwind v4. The visual language and graphics are adapted from the Tawf Foundation site.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # output in dist/
npm run lint     # type check
```

## Editing content

All copy (Bahasa Indonesia + English) and contact details live in `src/content/site.ts`.
Items marked `TODO` are placeholders: street address, WhatsApp, email, Instagram, bank account, and the weekly schedule.

- Prayer times are fetched live from the Aladhan API (Kemenag method) for Srengseng, with approximate times as a fallback (`src/lib/prayerTimes.ts`).
- The language toggle (ID/EN) is remembered per browser.
- The musholla mark is the `MARK_D` path in `src/components/landing/landingCommon.tsx` (also `public/favicon.svg`).

## Sections

Hero → Jadwal Sholat → Tentang → Program → Jadwal Kajian → Cara Berinfaq → Lokasi → Amanah (closing CTA)
