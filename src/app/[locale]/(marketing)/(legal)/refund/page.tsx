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
    title: 'Refund & Dispute Policy | ' + t('title'),
    description:
      'Learn about our return and exchange policy, refund process, and dispute resolution procedures for our premium denim apparel.',
    canonicalUrl: getUrlWithLocale('/refund', locale),
  });
}

export default async function RefundPolicyPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Refund & Dispute Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Our commitment to your satisfaction and fair resolution of any product issues
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>30-Day Return Policy</h2>
          <p>
            We offer a comprehensive 30-day return policy for all our denim apparel. If you're not completely satisfied with your purchase, you can return unworn items with original tags attached for a full refund or exchange within 30 days of delivery.
          </p>

          <h3>Return Conditions</h3>
          <ul>
            <li>Items must be unworn, unwashed, and in original condition</li>
            <li>Original tags must be attached</li>
            <li>Returns must be initiated within 30 days of delivery</li>
            <li>Items must be in original packaging when possible</li>
            <li>Sale items and final sale products may have different return terms</li>
          </ul>

          <h3>How to Request a Return</h3>
          <ol>
            <li>Contact our customer service team at support@soulany.com</li>
            <li>Provide your order number and reason for return</li>
            <li>Receive a prepaid return shipping label</li>
            <li>Pack items securely and attach the return label</li>
            <li>Drop off at any authorized shipping location</li>
          </ol>

          <h2>Refund Process</h2>
          <p>
            Once we receive your returned items and verify they meet our return conditions, we will process your refund within 3-5 business days. Refunds will be issued to the original payment method used for the purchase.
          </p>

          <h3>Refund Timeline</h3>
          <ul>
            <li><strong>Processing Time:</strong> 3-5 business days after receiving returned items</li>
            <li><strong>Credit Card Refunds:</strong> 3-5 business days to appear on your statement</li>
            <li><strong>PayPal Refunds:</strong> Immediate to your PayPal account</li>
            <li><strong>Bank Transfer Refunds:</strong> 5-10 business days</li>
          </ul>

          <h2>Exchange Policy</h2>
          <p>
            We offer free exchanges for size or fit issues within 30 days of delivery. Simply contact our customer service team, and we'll send you the correct size while you return the original item. No restocking fees or additional shipping charges.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            If you have any concerns about your order, product quality, or our service, we're committed to resolving them fairly and promptly. Our dispute resolution process includes:
          </p>

          <h3>Step 1: Direct Communication</h3>
          <p>
            Contact our customer service team at support@soulany.com with detailed information about your concern. We aim to respond within 24 hours and resolve most issues within 48 hours.
          </p>

          <h3>Step 2: Escalation</h3>
          <p>
            If your concern isn't resolved to your satisfaction, you can escalate the matter to our management team. We'll conduct a thorough review and provide a detailed response within 5 business days.
          </p>

          <h3>Step 3: External Mediation</h3>
          <p>
            For complex disputes, we may suggest mediation through a neutral third party. We're committed to finding fair solutions that satisfy all parties involved.
          </p>

          <h2>Quality Guarantee</h2>
          <p>
            We stand behind the quality of our denim products. If you receive an item with manufacturing defects or quality issues, we'll provide a full refund or replacement at no cost to you.
          </p>

          <h2>Damaged or Defective Items</h2>
          <p>
            If you receive damaged or defective items, please contact us immediately with photos of the issue. We'll arrange for a replacement or full refund, including return shipping costs.
          </p>

          <h2>Contact Information</h2>
          <p>
            For any questions about returns, exchanges, or disputes, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> support@ouilzi.shop</li>
            <li><strong>Response Time:</strong> Within 24 hours</li>
            <li><strong>Live Chat:</strong> Available on our website</li>
          </ul>

          <h2>Policy Updates</h2>
          <p>
            We may update this refund and dispute policy from time to time. Any changes will be posted on this page with an updated "Last Modified" date. We encourage you to review this policy periodically.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: January 10, 2025
          </p>
        </div>
      </div>
    </Container>
  );
}
