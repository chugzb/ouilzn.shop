import 'server-only';

import type { Session } from './auth-types';
import { cache } from 'react';

const DEMO_SESSION: Session = {
  user: {
    id: 'demo-user',
    email: 'demo@example.com',
    name: 'Demo User',
    image: null,
    role: 'admin',
    emailVerified: true,
    customerId: null,
    banned: false,
    banReason: null,
    banExpires: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export const getSession = cache(async (): Promise<Session> => DEMO_SESSION);
