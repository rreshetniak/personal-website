import { isLocale, site, type Locale } from '@/content/site';

// Only explicit selections are persisted; visiting a localized URL is not a preference change.
const storageKey = 'rr-preferred-language';
export function readPreferredLanguage(): Locale {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value && isLocale(value) ? value : site.defaultLocale;
  } catch {
    return site.defaultLocale;
  }
}
export function savePreferredLanguage(locale: Locale): void {
  try { window.localStorage.setItem(storageKey, locale); } catch { /* Optional preference storage. */ }
}
export function localizedPath(locale: Locale, page = '', hash = ''): string {
  return `/${locale}${page}${hash}`;
}
export function currentSectionHash(): string {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * .4).pop();
  return current && current.id !== 'top' ? `#${current.id}` : '';
}
