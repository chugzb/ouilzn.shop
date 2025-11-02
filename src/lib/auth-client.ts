'use client';

import type { Session, User } from './auth-types';

const DEMO_USER: User = {
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
};

const DEMO_SESSION: Session = { user: DEMO_USER };

interface SessionHookResult {
  data: Session | null;
  error: Error | null;
  isPending: boolean;
  refetch: () => Promise<Session | null>;
}

function createResolvedPromise<T>(value: T): () => Promise<T> {
  return async () => value;
}

function useSession(): SessionHookResult {
  return {
    data: DEMO_SESSION,
    error: null,
    isPending: false,
    refetch: createResolvedPromise<Session | null>(DEMO_SESSION),
  };
}

async function noop(..._args: any[]): Promise<void> {
  return undefined;
}

async function disabledAction(..._args: any[]): Promise<never> {
  throw new Error('Authentication features are disabled in this demo setup.');
}

export const authClient = {
  useSession,
  signIn: {
    email: disabledAction,
    social: disabledAction,
  },
  signUp: {
    email: disabledAction,
  },
  forgetPassword: disabledAction,
  resetPassword: disabledAction,
  changePassword: disabledAction,
  signOut: noop,
  listAccounts: async () => [DEMO_USER],
  updateUser: noop,
  deleteUser: noop,
  admin: {
    banUser: noop,
    unbanUser: noop,
  },
} as const;






