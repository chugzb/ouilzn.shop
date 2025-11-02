import { LOCALE_COOKIE_NAME, routing } from '@/i18n/routing';
import { parse as parseCookies } from 'cookie';
import type { Locale } from 'next-intl';
import type { Session, User } from './auth-types';

const DEMO_USER: User = {
  id: 'demo-user',
  email: 'demo@example.com',
  name: 'Demo User',
  image: null,
  role: 'admin',
  emailVerified: true,
  customerId: null,
  banned: false,
  banReason: null,
  banExpires: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const DEMO_SESSION: Session = { user: DEMO_USER };

export const auth = {
  api: {
    async getSession(): Promise<Session> {
      return DEMO_SESSION;
    },
  },
} as const;

export function getLocaleFromRequest(request?: Request): Locale {
  const cookies = parseCookies(request?.headers.get('cookie') ?? '');
  return (cookies[LOCALE_COOKIE_NAME] as Locale) ?? routing.defaultLocale;
}






