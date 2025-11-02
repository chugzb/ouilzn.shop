import { websiteConfig } from '@/config/website';

export async function validateTurnstileToken(_token: string) {
  if (!websiteConfig.features.enableTurnstileCaptcha) {
    return true;
  }

  console.warn('Turnstile validation is disabled in this demo build.');
  return true;
}
