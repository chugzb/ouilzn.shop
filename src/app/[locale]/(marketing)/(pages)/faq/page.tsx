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

  return constructMetadata({
    title: 'FAQ | ' + t('title'),
    description:
      'Find answers to frequently asked questions about our premium denim apparel, including sizing, materials, care instructions, shipping, returns, and more.',
    canonicalUrl: getUrlWithLocale('/faq', locale),
  });
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.faqs' });
  const tCommon = await getTranslations({ locale, namespace: 'Common' });

  const faqs = [
    {
      question: t('item-1.question'),
      answer: t('item-1.answer'),
    },
    {
      question: t('item-2.question'),
      answer: t('item-2.answer'),
    },
    {
      question: t('item-3.question'),
      answer: t('item-3.answer'),
    },
    {
      question: t('item-4.question'),
      answer: t('item-4.answer'),
    },
    {
      question: t('item-5.question'),
      answer: t('item-5.answer'),
    },
  ];

  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-stone-900 dark:text-stone-50">
            {t('title')}
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-200">
              <h3 className="text-lg font-bold mb-3 text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{faq.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">{t('cta.question')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('cta.contact')}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {t('cta.shop')}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
