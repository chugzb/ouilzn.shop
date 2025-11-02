import { PaymentTypes, PlanIntervals } from '@/payment/types';
import type { WebsiteConfig } from '@/types';

export const websiteConfig: WebsiteConfig = {
  metadata: {
    theme: {
      defaultTheme: 'default',
      enableSwitch: true,
    },
    mode: {
      defaultMode: 'system',
      enableSwitch: true,
    },
    images: {
      ogImage: '/og.png',
      logoLight: '/logo.svg',
      logoDark: '/logo-dark.svg',
    },
    social: {
      github: 'https://github.com/ouilzn',
      twitter: 'https://twitter.com/ouilzn',
      blueSky: 'https://bsky.app/profile/ouilzn.shop',
      discord: 'https://discord.gg/ouilzn',
      mastodon: 'https://mastodon.social/@ouilzn',
      linkedin: 'https://linkedin.com/company/ouilzn',
      youtube: 'https://youtube.com/@ouilzn',
    },
  },
  features: {
    enableDiscordWidget: false,
    enableUpgradeCard: false,
    enableAffonsoAffiliate: false,
    enablePromotekitAffiliate: false,
    enableDatafastRevenueTrack: false,
    enableTurnstileCaptcha: false,
  },
  routes: {
    defaultLoginRedirect: '/',
  },
  analytics: {
    enableVercelAnalytics: false,
    enableSpeedInsights: false,
  },
  auth: {
    enableGoogleLogin: false,
    enableGithubLogin: false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: {
        flag: 'US',
        name: 'English',
      },
      zh: {
        flag: 'CN',
        name: 'Chinese',
      },
    },
  },
  mail: {
    provider: 'resend',
    fromEmail: 'OUILZN <support@ouilzn.shop>',
    supportEmail: 'OUILZN <support@ouilzn.shop>',
  },
  newsletter: {
    provider: 'resend',
    autoSubscribeAfterSignUp: false,
  },
  storage: {
    provider: 's3',
  },
  payment: {
    provider: 'stripe',
  },
  price: {
    plans: {
      free: {
        id: 'free',
        prices: [],
        isFree: true,
        isLifetime: false,
      },
      pro: {
        id: 'pro',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: 'price_demo_pro_monthly',
            amount: 990,
            currency: 'USD',
            interval: PlanIntervals.MONTH,
          },
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: 'price_demo_pro_yearly',
            amount: 9900,
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        recommended: true,
      },
      lifetime: {
        id: 'lifetime',
        prices: [
          {
            type: PaymentTypes.ONE_TIME,
            priceId: 'price_demo_lifetime',
            amount: 19900,
            currency: 'USD',
            allowPromotionCode: true,
          },
        ],
        isFree: false,
        isLifetime: true,
      },
    },
  },
};
