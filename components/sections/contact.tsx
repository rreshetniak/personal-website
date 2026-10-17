import type { Content } from '@/content';
import { site } from '@/content/site';
import { ArrowUpRight, Globe2, MapPin } from 'lucide-react';
import { CopyEmail } from '../contact-actions';

export function ContactSection({ t }: { t: Content }) {
  const emailLink = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  return (<section className="contact-section" id="contact" data-section><div className="container contact-grid"><div><p className="eyebrow">{t.contact.eyebrow}</p><h2 className="preserve-lines">{t.contact.title}</h2><p className="contact-description">{t.contact.description}</p><div className="contact-meta"><span><MapPin size={17}/>{t.contact.location}</span><span><Globe2 size={17}/>{t.contact.languages}</span></div></div><div className="contact-card"><span className="contact-arrow" aria-hidden="true"><ArrowUpRight size={38} strokeWidth={1}/></span><p>{t.contact.prompt}</p><a className="email-link" href={emailLink}>{site.email}</a><CopyEmail email={site.email} labels={t.ui}/><a className="button button-white" href={emailLink}>{t.ui.mail}<ArrowUpRight size={19}/></a><p className="contact-note">{t.contact.note}</p><div className="social-links">{Object.entries(site.social).filter(([,url])=>url).map(([name,url])=><a key={name} href={url} rel="noopener noreferrer" target="_blank">{name==='linkedin'?'LinkedIn':name==='github'?'GitHub':t.nav.work}<ArrowUpRight size={16}/></a>)}</div></div></div></section>);
}
