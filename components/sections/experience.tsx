import type { Content } from '@/content';
import { site } from '@/content/site';
import { SectionHeading } from '../section-heading';

export function ExperienceSection({ t }: { t: Content }) {
  return (<section className="experience-section" id="experience" data-section><div className="container"><SectionHeading {...t.experience}/><div className="timeline">{site.experience.map(item=>{const copy=t.experience.items[item.id as keyof typeof t.experience.items]; return <article className="timeline-item" key={item.id}><div className="period">{item.period}</div><div className="timeline-marker" aria-hidden="true"/><div><p className="experience-context">{copy.context}</p><h3>{copy.title}</h3><p>{copy.text}</p></div></article>;})}</div></div></section>);
}
