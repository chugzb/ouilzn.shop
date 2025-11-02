'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export const unsubscribeNewsletterAction = actionClient
  .schema(newsletterSchema)
  .action(async ({ parsedInput: { email } }) => {
    console.info('Unsubscribe newsletter request', email);
    return {
      success: true,
      error: null,
    };
  });
