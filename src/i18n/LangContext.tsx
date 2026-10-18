import React, { createContext, useContext, useEffect, useState } from 'react';
import { content, type Lang, type SiteContent } from '../content/site';

const KEY = 'aljauhar.lang';

function readLang(): Lang {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'id' || v === 'en') return v;
  } catch {}
  return 'id';
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: SiteContent }>({
  lang: 'id',
  setLang: () => {},
  t: content.id,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
