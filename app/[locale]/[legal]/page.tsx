export const dynamicParams = false;
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getContent } from '@/content';
import { site, isLocale, locales } from '@/content/site';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
export function generateStaticParams(){return locales.flatMap(locale=>['impressum','datenschutz'].map(legal=>({locale,legal})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;legal:string}>}):Promise<Metadata>{const {locale,legal}=await params;if(!isLocale(locale)||!['impressum','datenschutz'].includes(legal))return{};const t=getContent(locale);return{title:`${legal==='impressum'?t.legal.imprintTitle:t.legal.privacyTitle} — ${site.name}`,robots:{index:false,follow:false},alternates:{canonical:`/${locale}/${legal}`,languages:{de:`/de/${legal}`,en:`/en/${legal}`,ru:`/ru/${legal}`,'x-default':`/${site.defaultLocale}/${legal}`}}};}
export default async function LegalPage({params}:{params:Promise<{locale:string;legal:string}>}){
  const {locale,legal}=await params; if(!isLocale(locale)||!['impressum','datenschutz'].includes(legal))notFound();const t=getContent(locale);const l=t.legal;const placeholder=l.placeholder;
  return <><Navigation locale={locale} t={t} page={`/${legal}`}/><main id="main" className="legal-page container"><div id="top"/><a className="text-link" href={`/${locale}`}><ArrowLeft size={18}/>{t.ui.back}</a><h1>{legal==='impressum'?l.imprintTitle:l.privacyTitle}</h1><aside className="draft-notice"><strong>{l.draft}</strong><p>{l.draftText}</p></aside>{legal==='impressum'?<div className="legal-content"><h2>{l.owner}</h2><p>{site.name}</p><h2>{l.address}</h2><p className="placeholder">{site.legal.address||placeholder}</p><h2>{l.email}</h2><a href={`mailto:${site.email}`}>{site.email}</a><h2>{l.registration}</h2><p className="placeholder">{site.legal.registration||placeholder}</p><h2>{l.vat}</h2><p className="placeholder">{site.legal.vatId||placeholder}</p></div>:<div className="legal-content"><h2>{l.controller}</h2><p>{site.name}<br/>{site.email}</p><p className="placeholder">{site.legal.privacyContact||placeholder}</p><h2>{l.hosting}</h2><p className="placeholder">{site.legal.hostingDetails||l.hostingText}</p><h2>{l.contactHeading}</h2><p>{l.contactText}</p><h2>{l.storageHeading}</h2><p>{l.storageText}</p><h2>{l.rightsHeading}</h2><p className="placeholder">{l.rightsText}</p></div>}</main><Footer locale={locale} t={t} page={`/${legal}`}/></>;
}
