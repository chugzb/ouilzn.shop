'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

import { useTranslations } from 'next-intl';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://cotton-jeans.com/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function getNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('about.title'),
      href: Routes.About,
      external: false,
    },
    {
      title: t('faq.title'),
      href: Routes.FAQ,
      external: false,
    },
    {
      title: t('contact.title'),
      href: Routes.Contact,
      external: false,
    },
  ];
}
