'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const schema = z.object({
  userId: z.string().optional(),
  returnUrl: z.string().optional(),
});

export const createPortalAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput }) => {
    const { userId, returnUrl } = parsedInput;

    console.info('Customer portal session requested', {
      userId,
      returnUrl,
    });

    return {
      success: true,
      data: {
        url: returnUrl ?? 'https://ouilzn.shop/portal-demo',
      },
    };
  });
