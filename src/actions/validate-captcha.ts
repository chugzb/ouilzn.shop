'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const schema = z.object({ token: z.string().optional() });

export const validateCaptchaAction = actionClient
  .schema(schema)
  .action(async () => {
    return {
      success: true,
    };
  });
