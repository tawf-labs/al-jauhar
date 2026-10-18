import { SITE } from '../content/site';

export const PRAYERS = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;
export type PrayerKey = (typeof PRAYERS)[number];
export type Timings = Record<PrayerKey, string>;

export type PrayerDay = {
  timings: Timings;
  hijri: { day: number; month: number; year: number } | null;
  live: boolean;
};

/* Rough Jakarta times, shown only when the live API can't be reached. */
const FALLBACK: Timings = { Fajr: '04:22', Sunrise: '05:36', Dhuhr: '11:43', Asr: '14:55', Maghrib: '17:51', Isha: '19:02' };

const pad = (n: number) => String(n).padStart(2, '0');
const todayKey = (d = new Date()) => `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;

export async function fetchPrayerDay(): Promise<PrayerDay> {
  const date = todayKey();
  const cacheKey = `aljauhar.prayer.${date}`;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  try {
    const { lat, lng } = SITE.coords;
    // method=20: Kementerian Agama Republik Indonesia
    const res = await fetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lng}&method=20&timezonestring=Asia/Jakarta`);
    if (!res.ok) throw new Error(String(res.status));
    const { data } = await res.json();
    const timings = Object.fromEntries(PRAYERS.map((k) => [k, String(data.timings[k]).slice(0, 5)])) as Timings;
    const h = data.date?.hijri;
    const day: PrayerDay = {
      timings,
      hijri: h ? { day: Number(h.day), month: Number(h.month.number), year: Number(h.year) } : null,
      live: true,
    };
    try { sessionStorage.setItem(cacheKey, JSON.stringify(day)); } catch {}
    return day;
  } catch {
    return { timings: FALLBACK, hijri: null, live: false };
  }
}

export const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/* Next obligatory prayer (Sunrise excluded); after Isha it wraps to tomorrow's Fajr. */
export function nextPrayer(timings: Timings, now = new Date()): { key: PrayerKey; minutesLeft: number } {
  const cur = now.getHours() * 60 + now.getMinutes();
  for (const k of PRAYERS) {
    if (k === 'Sunrise') continue;
    const t = toMinutes(timings[k]);
    if (t > cur) return { key: k, minutesLeft: t - cur };
  }
  return { key: 'Fajr', minutesLeft: 24 * 60 - cur + toMinutes(timings.Fajr) };
}
