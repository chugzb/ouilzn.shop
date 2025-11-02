'use server';

import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

const actionClient = createSafeActionClient();

const getUsersSchema = z.object({
  pageIndex: z.number().min(0).default(0),
  pageSize: z.number().min(1).max(100).default(10),
  search: z.string().optional().default(''),
  sorting: z
    .array(
      z.object({
        id: z.string(),
        desc: z.boolean(),
      })
    )
    .optional()
    .default([]),
});

const DEMO_USERS = [
  {
    id: 'demo-user-1',
    name: 'Demo User',
    email: 'demo@example.com',
    customerId: 'cus_demo_123',
    role: 'admin',
    banned: false,
    banReason: null,
    banExpires: null,
    emailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getUsersAction = actionClient
  .schema(getUsersSchema)
  .action(async ({ parsedInput }) => {
    const { pageIndex, pageSize } = parsedInput;
    const start = pageIndex * pageSize;
    const pagedItems = DEMO_USERS.slice(start, start + pageSize);

    return {
      success: true,
      data: {
        items: pagedItems,
        total: DEMO_USERS.length,
      },
      error: null,
    };
  });

