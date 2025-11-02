'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export const checkNewsletterStatusAction = actionClient
  .schema(newsletterSchema)
  .action(async ({ parsedInput: { email } }) => {
    console.info('Newsletter status requested', email);

    return {
      success: true,
      subscribed: false,
      error: null,
    };
  });
