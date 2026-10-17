import type { Content } from '@/content';
import { site } from '@/content/site';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../section-heading';

export function ProcessSection({ t }: { t: Content }) {
  return (<section className="section container process-section"><SectionHeading {...t.process}/><ol className="process-steps">{t.process.steps.map((step,index)=><li key={step.title}><div className="step-top"><span>0{index+1}</span>{index<3&&<ArrowRight size={17} aria-hidden="true"/>}</div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>);
}
