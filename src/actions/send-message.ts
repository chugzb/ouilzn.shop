'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export const sendMessageAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput }) => {
    console.info('Contact message received', parsedInput);
    return {
      success: true,
      error: null,
    };
  });
