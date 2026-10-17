import type { Content } from '@/content';
import type { Locale } from '@/content/site';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { HeroSection } from './sections/hero';
import { ServicesSection } from './sections/services';
import { AboutSection } from './sections/about';
import { ExpertiseSection } from './sections/expertise';
import { ExperienceSection } from './sections/experience';
import { WorkSection } from './sections/work';
import { ProcessSection } from './sections/process';
import { ContactSection } from './sections/contact';

export function Portfolio({ locale, t }: { locale: Locale; t: Content }) {
  return (
    <>
      <Navigation locale={locale} t={t} />
      <main id="main">
        <HeroSection t={t} />
        <ServicesSection t={t} />
        <AboutSection t={t} />
        <ExpertiseSection t={t} />
        <ExperienceSection t={t} />
        <WorkSection t={t} />
        <ProcessSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
