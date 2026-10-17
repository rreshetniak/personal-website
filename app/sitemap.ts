export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { site, locales } from '@/content/site';
export default function sitemap():MetadataRoute.Sitemap{return site.indexable?locales.map(locale=>({url:`${site.origin}/${locale}`,alternates:{languages:{de:`${site.origin}/de`,en:`${site.origin}/en`,ru:`${site.origin}/ru`}}})):[];}
