import { Analytics } from '@/analytics/analytics';
import {
  fontBricolageGrotesque,
  fontNotoSans,
  fontNotoSansMono,
  fontNotoSerif,
} from '@/assets/fonts';
import AffonsoScript from '@/components/affiliate/affonso';
import PromotekitScript from '@/components/affiliate/promotekit';
import { TailwindIndicator } from '@/components/layout/tailwind-indicator';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { type Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Providers } from './providers';

import '@/styles/globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

/**
 * 1. Locale Layout
 * https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#layout
 *
 * 2. NextIntlClientProvider
 * https://next-intl.dev/docs/usage/configuration#nextintlclientprovider
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <AffonsoScript />
        <PromotekitScript />

        {/* 结构化数据 - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OUILZI",
              "description": "法式优雅牛仔时尚品牌，融合日本丹宁、意大利工艺与可持续理念，打造可传承的时尚艺术品",
              "url": "https://ouilzi.shop",
              "logo": "https://ouilzi.shop/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@ouilzi.shop",
                "contactType": "customer service",
                "availableLanguage": ["Chinese", "English"]
              },
              "sameAs": [
                "https://twitter.com/ouilzi",
                "https://github.com/ouilzi"
              ]
            })
          }}
        />

        {/* 结构化数据 - 网站信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OUILZI - 法式优雅牛仔时尚",
              "url": "https://ouilzi.shop",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ouilzi.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 结构化数据 - 服装品牌 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "OUILZI",
              "description": "法式优雅牛仔时尚品牌，精选日本冈山丹宁，采用意大利传统工艺，融合可持续理念，每一件都是可传承的时尚艺术品",
              "url": "https://ouilzi.shop",
              "image": "https://ouilzi.shop/logo.png",
              "priceRange": "$$",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "69",
                "highPrice": "249",
                "offerCount": "50"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Product Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Quality Products"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          'size-full antialiased',
          fontNotoSans.className,
          fontNotoSerif.variable,
          fontNotoSansMono.variable,
          fontBricolageGrotesque.variable
        )}
      >
        <NextIntlClientProvider>
          <Providers locale={locale}>
            {children}

            <Toaster richColors position="top-right" offset={64} />
            <TailwindIndicator />
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
