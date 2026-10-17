import de from './locales/de.json';
import en from './locales/en.json';
import ru from './locales/ru.json';
import type { Locale } from './site';
export type Content = typeof en;
const translations: Record<Locale, Content> = { de, en, ru };
export function getContent(locale: Locale): Content { return translations[locale]; }
