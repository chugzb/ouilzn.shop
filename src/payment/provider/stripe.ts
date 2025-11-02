import type {
  CheckoutResult,
  CreateCheckoutParams,
  CreatePortalParams,
  PaymentProvider,
  PortalResult,
  Subscription,
  getSubscriptionsParams,
} from '../types';

export class StripeProvider implements PaymentProvider {
  async createCheckout(_params: CreateCheckoutParams): Promise<CheckoutResult> {
    return {
      id: 'demo-checkout',
      url: 'https://fashion-store.example.com/checkout-demo',
    };
  }

  async createCustomerPortal(_params: CreatePortalParams): Promise<PortalResult> {
    return {
      url: 'https://fashion-store.example.com/portal-demo',
    };
  }

  async getSubscriptions(_params: getSubscriptionsParams): Promise<Subscription[]> {
    return [];
  }

  async handleWebhookEvent(_payload: string, _signature: string): Promise<void> {
    console.info('Stripe webhooks are ignored in this demo build.');
  }
}
