import type { Content } from '@/content';
import { site } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../section-heading';

export function WorkSection({ t }: { t: Content }) {
  const projects = site.projects.enabled ? site.projects.items : [];
  return (<>{projects.length > 0 && (<section className="section container" id="work" data-section><SectionHeading {...t.work}/><div className="project-grid">{projects.map(project=>{const copy=(t.work.items as Record<string,{title:string;task:string;role:string;result:string}>)[project.id]; if(!copy) return null; return <article className="project-card" key={project.id}><h3>{copy.title}</h3><dl><dt>{t.work.task}</dt><dd>{copy.task}</dd><dt>{t.work.role}</dt><dd>{copy.role}</dd><dt>{t.work.result}</dt><dd>{copy.result}</dd></dl><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{project.url&&<a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">{t.work.open}<ArrowUpRight size={18}/></a>}</article>;})}</div></section>)}</>);
}
