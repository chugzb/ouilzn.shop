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
    title: 'Privacy Policy | ' + t('title'),
    description: 'Learn about OUILZN\'s privacy policy and data protection measures, how we collect, use, and protect your personal information.',
    canonicalUrl: getUrlWithLocale('/privacy', locale),
  });
}

export default async function PrivacyPolicyPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
        <h1>Privacy Policy</h1>

        <p className="lead">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account,
          place an order, subscribe to our newsletter, or contact us for support. This may include:
        </p>
        <ul>
          <li>Personal information (name, email address, phone number, shipping address)</li>
          <li>Order details and purchase history</li>
          <li>Payment information (processed securely by our payment providers)</li>
          <li>Size preferences and fit feedback</li>
          <li>Communication preferences</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Provide customer service and support</li>
          <li>Send order confirmations and shipping notifications</li>
          <li>Communicate about products, promotions, and updates</li>
          <li>Improve our products and shopping experience</li>
          <li>Prevent fraud and ensure security</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties
          without your consent, except as described in this policy. We may share information with:
        </p>
        <ul>
          <li>Shipping carriers for order delivery</li>
          <li>Payment processors for transaction processing</li>
          <li>Email service providers for order notifications</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction. We use SSL encryption for
          data transmission and secure servers for data storage.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
          <li>Request a copy of your data</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies to enhance your shopping experience, remember your preferences, and
          analyze site usage. You can control cookie settings through your browser.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at
          support@ouilzn.shop.
        </p>
      </div>
    </Container>
  );
}
