import { ContactFormCard } from '@/components/contact/contact-form-card';
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
  const pt = await getTranslations({ locale, namespace: 'ContactPage' });

  return constructMetadata({
    title: 'Contact Us | ' + t('title'),
    description: 'Get in touch with our customer service team. We\'re here to help with any questions about our products, orders, shipping, or returns.',
    canonicalUrl: getUrlWithLocale('/contact', locale),
  });
}

/**
 * inspired by https://nsui.irung.me/contact
 */
export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  return (
    <Container className="py-16 px-4">
      <div className="mx-auto max-w-4xl space-y-8 pb-16">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-stone-900 dark:text-stone-50">
            Get In Touch
          </h1>
          <p className="text-center text-xl text-stone-600 dark:text-stone-400">
            Questions about sizing, orders, or our denim shirts? We're here to help.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-stone-50 dark:bg-neutral-900/50">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-2">
              Drop us a line. We'll reply within 24 hours.
            </p>
            <a href="mailto:support@ouilzn.shop" className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400">
              support@ouilzn.shop
            </a>
          </div>

          <div className="text-center p-6 rounded-lg bg-stone-50 dark:bg-neutral-900/50">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <p className="text-muted-foreground mb-2">
              Need sizing help? Order questions? We're here.
            </p>
            <a href="tel:+1-555-123-4567" className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400">
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-stone-900 dark:text-white">Send a Message</h2>
          <p className="text-stone-600 dark:text-stone-400">
            We'll reply within 24 hours. Usually faster.
          </p>
        </div>
        <ContactFormCard />
      </div>
    </Container>
  );
}
