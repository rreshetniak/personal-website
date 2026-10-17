'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { locales, site, type Locale } from '@/content/site';
import type { Content } from '@/content';
import { currentSectionHash, localizedPath, savePreferredLanguage } from '@/lib/language-preference';

export function Languages({ locale, page = '', label }: { locale: Locale; page?: string; label: string }) {
  function target(lang: Locale) {
    savePreferredLanguage(lang);
    return localizedPath(lang, page, page ? window.location.hash : currentSectionHash());
  }
  return <div className="languages" role="group" aria-label={label}>{locales.map(lang => <a key={lang} href={`/${lang}${page}`} lang={lang} hrefLang={lang} aria-current={lang === locale ? 'true' : undefined} onClick={e => { e.currentTarget.href = target(lang); }}>{lang.toUpperCase()}</a>)}</div>;
}

export function Navigation({ locale, t, page = '' }: { locale: Locale; t: Content; page?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const keys = ['services', 'about', 'expertise', 'experience', 'contact'] as const;
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-12% 0px -65% 0px' });
    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [locale]);
  useEffect(() => {
    if (!open) return;
    mobileNav.current?.querySelector<HTMLElement>('a')?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (e.key === 'Tab') {
        const nodes = [toggle.current, ...Array.from(mobileNav.current?.querySelectorAll<HTMLElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    }
    const mq = window.matchMedia('(min-width: 1061px)');
    const resize = () => { if (mq.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', onKey); mq.removeEventListener('change', resize); };
  }, [open]);
  return <><a className="skip-link" href="#main">{t.ui.skip}</a><header className="site-header"><div className="container header-inner">
    <a href={`/${locale}`} className="brand" aria-label={site.name}><span className="brand-mark">{site.initials}<i /></span><span className="brand-name">{site.name.split(' ')[0]}<br /><strong>{site.name.split(' ').slice(1).join(' ')}</strong></span></a>
    <nav className="desktop-nav" aria-label={t.ui.navigation}>{keys.slice(0, 4).map(id => <a key={id} href={`/${locale}#${id}`} aria-current={!page && active === id ? 'location' : undefined}>{t.nav[id]}</a>)}</nav>
    <div className="header-actions"><Languages locale={locale} page={page} label={t.ui.language} /><a className="header-contact" href={`/${locale}#contact`}>{t.nav.contact}<ArrowUpRight size={16} /></a><button className="menu-toggle" ref={toggle} type="button" aria-label={open ? t.ui.close : t.ui.menu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    <div id="mobile-menu" className="mobile-menu" ref={mobileNav} hidden={!open}><nav aria-label={t.ui.navigation}>{keys.map((id, index) => <a key={id} href={`/${locale}#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{t.nav[id]}<ArrowUpRight size={20} /></a>)}</nav><p>{t.hero.location}</p></div>
  </div></header></>;
}
