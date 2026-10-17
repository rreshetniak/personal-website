import type { Content } from '@/content';
import { site } from '@/content/site';
import { Compass, ShieldCheck, Workflow, Code2, Sparkles, Layers3 } from 'lucide-react';
import { SectionHeading } from '../section-heading';

const icons = { compass: Compass, shield: ShieldCheck, workflow: Workflow, code: Code2, sparkles: Sparkles, layers: Layers3 };

export function ServicesSection({ t }: { t: Content }) {
  return (<section className="section container" id="services" data-section><SectionHeading {...t.services}/><div className="service-grid">{site.services.filter(s=>s.enabled).map((service,index)=>{
      const item=t.services.items[service.id as keyof typeof t.services.items];
      const Icon=icons[service.icon as keyof typeof icons];
      return <article className="service-card" key={service.id}><div className="service-top"><Icon size={28} strokeWidth={1.4}/><span>0{index+1}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="service-detail">{item.detail}</div></article>;
    })}</div></section>);
}
