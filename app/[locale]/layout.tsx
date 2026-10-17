import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, site } from '@/content/site';
import '../globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  icons: { icon: '/favicon.svg' },
  robots: { index: site.indexable, follow: site.indexable },
};
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{locale:string}> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body>{children}</body></html>;
}
