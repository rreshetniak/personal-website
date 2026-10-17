"use client";
import { useEffect } from 'react';
import { locales, site } from '@/content/site';
import { localizedPath, readPreferredLanguage } from '@/lib/language-preference';
const languageNames = { en: 'English', de: 'Deutsch', ru: 'Русский' };
export function LanguageEntry() {
  useEffect(() => {
    window.location.replace(localizedPath(readPreferredLanguage(), '', window.location.hash));
  }, []);
  return <main className="entry-screen">
    <span className="brand-mark">{site.initials}<i /></span>
    <h1>{site.name}</h1>
    <p>Independent IT Consultant</p>
    <nav aria-label="Choose language">
      {locales.map(locale => <a key={locale} href={localizedPath(locale)} lang={locale}>{languageNames[locale]}</a>)}
    </nav>
  </main>;
}
