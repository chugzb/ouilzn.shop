import { routing } from '@/i18n/routing';
import type { Locale } from 'next-intl';

const BASE_URL = 'https://ouilzn.shop';

export function getBaseUrl(): string {
  return BASE_URL;
}

export function shouldAppendLocale(locale?: Locale | null): boolean {
  return !!locale && locale !== routing.defaultLocale && locale !== 'default';
}

export function getUrlWithLocale(url: string, locale?: Locale | null): string {
  return shouldAppendLocale(locale)
    ? `${BASE_URL}/${locale}${url}`
    : `${BASE_URL}${url}`;
}

export function getUrlWithLocaleInCallbackUrl(
  url: string,
  locale: Locale
): string {
  if (!shouldAppendLocale(locale)) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    const callbackURL = urlObj.searchParams.get('callbackURL');

    if (callbackURL) {
      if (!callbackURL.match(new RegExp(`^/${locale}(/|$)`))) {
        const localizedCallbackURL = callbackURL.startsWith('/')
          ? `/${locale}${callbackURL}`
          : `/${locale}/${callbackURL}`;

        urlObj.searchParams.set('callbackURL', localizedCallbackURL);
      }
    }

    return urlObj.toString();
  } catch (error) {
    console.warn('Failed to parse URL for locale insertion:', url, error);
    return url;
  }
}

export function getImageUrl(image: string): string {
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }
  if (image.startsWith('/')) {
    return `${getBaseUrl()}${image}`;
  }
  return `${getBaseUrl()}/${image}`;
}

export function getStripeDashboardCustomerUrl(customerId: string): string {
  return `https://dashboard.stripe.com/customers/${customerId}`;
}
