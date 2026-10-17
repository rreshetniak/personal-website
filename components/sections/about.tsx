import type { Content } from '@/content';
import { site } from '@/content/site';
import { Check } from 'lucide-react';

export function AboutSection({ t }: { t: Content }) {
  return (<section className="about-section" id="about" data-section><div className="container about-grid"><div className="about-intro"><p className="eyebrow">{t.about.eyebrow}</p><h2 className="preserve-lines">{t.about.title}</h2><div className="identity-card">{site.photo.src ? <img src={site.photo.src} alt={site.photo.alt} width={104} height={104} loading="lazy"/> : <span className="identity-monogram" aria-hidden="true">{site.initials}<i/></span>}<div><strong>{t.about.signature}</strong><span>{t.about.caption}</span></div></div></div><div className="about-body"><p className="about-lead">{t.about.lead}</p>{t.about.paragraphs.map(p=><p key={p}>{p}</p>)}<div className="principles">{t.about.principles.map(p=><div key={p.title}><span className="check-circle"><Check size={14}/></span><div><h3>{p.title}</h3><p>{p.text}</p></div></div>)}</div></div></div></section>);
}
