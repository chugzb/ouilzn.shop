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
    title: 'Cookie Policy | ' + t('title'),
    description: 'Learn how we use cookies and similar technologies to improve your shopping experience and how you can manage these settings.',
    canonicalUrl: getUrlWithLocale('/cookie', locale),
  });
}

export default async function CookiePolicyPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
        <h1>Cookie Policy</h1>

        <p className="lead">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device that help websites remember your preferences and improve your browsing experience.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Remember your login status and preferences</li>
          <li>Analyze site usage and customer behavior</li>
          <li>Provide personalized shopping recommendations</li>
          <li>Improve site performance and user experience</li>
          <li>Prevent fraud and ensure site security</li>
        </ul>

        <h2>Types of Cookies</h2>
        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly and cannot be disabled in our systems.</p>

        <h3>Performance Cookies</h3>
        <p>These cookies help us understand how customers interact with our site, allowing us to improve site performance and shopping experience.</p>

        <h3>Functional Cookies</h3>
        <p>These cookies enable enhanced functionality and personalization, such as remembering your size preferences and shopping cart items.</p>

        <h2>Managing Cookie Settings</h2>
        <p>
          You can manage or delete cookies through your browser settings. Please note that disabling certain cookies may affect site functionality and your shopping experience.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at: support@ouilzn.shop
        </p>
      </div>
    </Container>
  );
}
