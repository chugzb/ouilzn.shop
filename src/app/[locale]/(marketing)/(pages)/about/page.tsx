import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const pt = await getTranslations({ locale, namespace: 'AboutPage' });

  return constructMetadata({
    title: 'About Us | ' + t('title'),
    description:
      'Learn about OUILZI, our mission to craft premium quality denim apparel with 100% organic cotton, our commitment to sustainable fashion, and our dedication to timeless style and classic design.',
    canonicalUrl: getUrlWithLocale('/about', locale),
  });
}

/**
 * inspired by https://astro-nomy.vercel.app/about
 */
export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-stone-900 dark:text-stone-50">
            Crafting Premium Denim Since 2024
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400">
            Quality denim shirts for everyone. Timeless style, sustainable craftsmanship.
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Our Mission</h2>
          <p className="text-stone-600 dark:text-stone-400">
            Premium denim shirts shouldn't break the bank. We're making high-quality denim accessible to everyone. From classic cuts to modern fits—everyone deserves quality that lasts. Sustainable materials. Fair prices. Timeless style.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Our Story</h2>
          <p className="text-stone-600 dark:text-stone-400">
            Launched 2024. Built by fashion enthusiasts, denim experts, and sustainability advocates. We partner with ethical manufacturers and use premium Japanese Okayama denim. Thousands of customers worldwide trust our quality. From everyday wear to special occasions.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">What Makes Us Different</h2>
          <ul className="space-y-3 text-stone-600 dark:text-stone-400">
            <li>
              <strong className="text-stone-900 dark:text-white">Premium Japanese Denim:</strong>
              Okayama fabric. Traditional shuttle looms. Built to last decades.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-white">Italian Craftsmanship:</strong>
              Hand-finished details. Precision cutting. Meticulous quality control.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-white">Fast Shipping:</strong>
              2-5 days delivery. Free returns within 30 days. Hassle-free exchanges.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-white">Fair Pricing:</strong>
              No middlemen. Direct to you. Premium quality at honest prices.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-white">Real Support:</strong>
              Actual humans. Ready to help. Anytime.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Our Promise</h2>
          <p className="text-stone-600 dark:text-stone-400">
            We stand behind our quality. Every shirt tested. Premium materials only. Sustainable practices. Full satisfaction guarantee. Your comfort is our commitment.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Let's Talk</h2>
          <p className="text-stone-600 dark:text-stone-400">
            Questions about sizing? Materials? Care instructions? We'd love to hear from you. Our team is here to help.
          </p>

          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
