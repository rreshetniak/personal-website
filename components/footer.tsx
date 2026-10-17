import { ArrowUp } from 'lucide-react';
import { Languages } from './navigation';
import { site, type Locale } from '@/content/site';
import type { Content } from '@/content';
export function Footer({ locale, t, page = '' }: { locale: Locale; t: Content; page?: string }) {
  return <footer className="footer"><div className="container"><div className="footer-top"><div><a className="footer-brand" href={`/${locale}`}>{site.name}<span aria-hidden="true">.</span></a><p className="preserve-lines">{t.footer.description}</p></div><nav aria-label={t.ui.footerNavigation}><a href={`/${locale}#services`}>{t.nav.services}</a><a href={`/${locale}#about`}>{t.nav.about}</a><a href={`/${locale}#contact`}>{t.nav.contact}</a><a href={`mailto:${site.email}`}>{site.email}</a></nav><a className="back-top" href="#top" aria-label={t.ui.top}><ArrowUp size={22} /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {site.name}</p><div className="legal-links"><a href={`/${locale}/impressum`}>{t.footer.imprint}</a><a href={`/${locale}/datenschutz`}>{t.footer.privacy}</a></div><Languages locale={locale} page={page} label={t.ui.language} /></div></div></footer>;
}
