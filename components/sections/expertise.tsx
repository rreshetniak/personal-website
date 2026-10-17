import type { Content } from '@/content';
import { site } from '@/content/site';
import { Code2 } from 'lucide-react';

export function ExpertiseSection({ t }: { t: Content }) {
  return (<section className="section container expertise-section" id="expertise" data-section><div className="expertise-intro"><p className="eyebrow">{t.expertise.eyebrow}</p><h2 className="preserve-lines">{t.expertise.title}</h2><p>{t.expertise.description}</p><div className="expertise-mark" aria-hidden="true"><Code2 size={48} strokeWidth={1}/><span>↗</span></div></div><div><div className="skill-list">{site.skills.map((group,index)=><div className="skill-row" key={group.id}><h3><span>0{index+1}</span>{t.expertise.groups[group.id as keyof typeof t.expertise.groups]}</h3><div className="tags">{group.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>)}</div><p className="skill-note">{t.expertise.note}</p></div></section>);
}
