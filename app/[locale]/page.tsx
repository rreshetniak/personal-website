export const dynamicParams = false;
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Portfolio } from '@/components/portfolio';
import { getContent } from '@/content';
import { isLocale, locales, site } from '@/content/site';
export function generateStaticParams() { return locales.map(locale=>({locale})); }
export async function generateMetadata({ params }: { params: Promise<{locale:string}> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t=getContent(locale);
  return { title:t.meta.title, description:t.meta.description, alternates:{canonical:`/${locale}`,languages:{de:'/de',en:'/en',ru:'/ru','x-default':`/${site.defaultLocale}`}}, openGraph:{title:t.meta.title,description:t.meta.description,url:`${site.origin}/${locale}`,siteName:site.name,type:'website',locale:{de:'de_DE',en:'en_GB',ru:'ru_RU'}[locale]} };
}
export default async function Home({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!isLocale(locale)) notFound(); return <Portfolio locale={locale} t={getContent(locale)}/>; }
