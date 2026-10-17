import type { Content } from '@/content';
import { site } from '@/content/site';
import { ArrowDown, ArrowUpRight, Check, Code2, Globe2, MapPin, Workflow } from 'lucide-react';

function HeroVisual({ t }: { t: Content }) {
  return <div className="hero-visual"><div className="visual-heading"><span className="tiny-cross" aria-hidden="true">+</span><span>{t.hero.visualLabel}</span><span className="visual-code" aria-hidden="true">RR—01</span></div><div className="sculpture" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="plane plane-back"><Workflow strokeWidth={.9}/></div><div className="plane plane-middle"><Code2 strokeWidth={.9}/></div><div className="plane plane-front"><Check strokeWidth={1.1}/></div><i className="sculpture-dot dot-one"/><i className="sculpture-dot dot-two"/></div><div className="visual-bottom"><div className="visual-words">{t.hero.visualWords.map((word,i)=><span key={word}><small>0{i+1}</small>{word}</span>)}</div><p>{t.hero.visualFoot}<ArrowUpRight size={16}/></p></div></div>;
}

export function HeroSection({ t }: { t: Content }) {
  return (<><section className="hero container" id="top" data-section><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="small-line"/>{t.hero.eyebrow}</p><h1><span>{t.hero.line1}</span><span className="accent">{t.hero.line2}</span></h1><p className="hero-description">{t.hero.description}</p><div className="hero-buttons"><a className="button button-primary" href="#contact">{t.ui.contact}<ArrowUpRight size={18}/></a><a className="text-link" href="#expertise">{t.ui.learn}<ArrowDown size={17}/></a></div><div className="hero-meta"><span><MapPin size={15}/>{t.hero.location}</span><span><Globe2 size={15}/>{t.hero.languages}</span></div></div><HeroVisual t={t}/><a className="hero-scroll" href="#services"><span className="scroll-circle"><ArrowDown size={17}/></span>{t.hero.scroll}</a></section><div className="intro-band"><div className="container intro-inner"><span className="eyebrow">{t.intro.label}</span><h2>{t.intro.text}</h2><p>{t.intro.detail}</p></div></div></>);
}
