'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const schema = z.object({ userId: z.string().optional() });

export const getLifetimeStatusAction = actionClient
  .schema(schema)
  .action(async () => {
    return {
      success: true,
      isLifetimeMember: false,
      error: null,
    };
  });
