'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const schema = z.object({
  userId: z.string().optional(),
  planId: z.string(),
  priceId: z.string(),
  successUrl: z.string().optional(),
  cancelUrl: z.string().optional(),
});

export const createCheckoutAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput }) => {
    const { userId, planId, priceId, successUrl, cancelUrl } = parsedInput;

    console.info('Checkout session requested', {
      userId,
      planId,
      priceId,
      successUrl,
      cancelUrl,
    });

    return {
      success: true,
      data: {
        id: 'checkout_demo_session',
        url: successUrl ?? 'https://ouilzn.shop/checkout-success',
      },
    };
  });
