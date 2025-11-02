import type {
  CheckSubscribeStatusParams,
  NewsletterProvider,
  SubscribeNewsletterParams,
  UnsubscribeNewsletterParams,
} from '@/newsletter/types';

export class ResendNewsletterProvider implements NewsletterProvider {
  public getProviderName(): string {
    return 'Resend';
  }

  async subscribe(_params: SubscribeNewsletterParams): Promise<boolean> {
    console.info('Newsletter subscribe is disabled in this demo build.');
    return true;
  }

  async unsubscribe(_params: UnsubscribeNewsletterParams): Promise<boolean> {
    console.info('Newsletter unsubscribe is disabled in this demo build.');
    return true;
  }

  async checkSubscribeStatus(_params: CheckSubscribeStatusParams): Promise<boolean> {
    return false;
  }
}
