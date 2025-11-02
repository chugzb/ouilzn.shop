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
    title: 'Refund & Return Policy | ' + t('title'),
    description: 'Learn about our fashion store\'s refund and return policy, including our 30-day return guarantee, return process, and customer service contact information.',
    canonicalUrl: getUrlWithLocale('/refund-policy', locale),
  });
}

export default async function RefundPolicyPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
        <h1>Refund & Return Policy</h1>

        <p className="lead">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Return Policy</h2>

        <h3>30-Day Return Window</h3>
        <p>
          We offer a 30-day return policy for all items. If you are not satisfied
          with your purchase, you can return items within 30 days of delivery
          for a full refund or exchange.
        </p>

        <h3>Return Requirements</h3>
        <p>To be eligible for a return, items must:</p>
        <ul>
          <li>Be in original condition with all tags attached</li>
          <li>Be unworn, unwashed, and undamaged</li>
          <li>Include original packaging and accessories</li>
          <li>Have proof of purchase (order confirmation or receipt)</li>
        </ul>

        <h3>Return Process</h3>
        <p>To initiate a return:</p>
        <ol>
          <li>Contact our support team at support@ouilzn.shop</li>
          <li>Provide your order number and reason for the return</li>
          <li>We will provide you with a return authorization and shipping label</li>
          <li>Package items securely and ship using the provided label</li>
          <li>Refunds will be processed within 5-7 business days after we receive your return</li>
        </ol>

        <h3>Non-Returnable Items</h3>
        <p>The following items cannot be returned:</p>
        <ul>
          <li>Intimate apparel and undergarments</li>
          <li>Swimwear and activewear (for hygiene reasons)</li>
          <li>Items marked as final sale or clearance</li>
          <li>Personalized or customized items</li>
          <li>Items damaged by normal wear and tear</li>
        </ul>

        <h2>Exchanges</h2>
        <p>
          We offer free exchanges for different sizes or colors within 30 days of delivery.
          The original item must meet all return requirements. If the new item costs more,
          you'll pay the difference. If it costs less, we'll refund the difference.
        </p>

        <h2>Refund Processing</h2>
        <h3>Refund Timeline</h3>
        <p>
          Once we receive and inspect your returned item, we will process your refund
          within 5-7 business days. Refunds will be issued to your original payment method.
        </p>

        <h3>Shipping Costs</h3>
        <ul>
          <li>Original shipping costs are non-refundable (unless the item was defective)</li>
          <li>Return shipping is free for defective or incorrect items</li>
          <li>Customers are responsible for return shipping costs for other returns</li>
          <li>We recommend using a trackable shipping service for returns</li>
        </ul>

        <h2>Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, please contact us immediately.
          We will provide a prepaid return label and process a full refund or replacement
          at no cost to you. Please include photos of the damage when contacting us.
        </p>

        <h2>Contact Information</h2>
        <p>
          For returns, exchanges, or questions about this policy, please contact us at:
        </p>
        <ul>
          <li>Email: support@ouilzn.shop</li>
          <li>Response time: Within 24 hours</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We reserve the right to update this refund and dispute policy at any time.
          Changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </Container>
  );
}
