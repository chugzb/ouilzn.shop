import type { ReactNode } from 'react';

interface AdminUsersLayoutProps {
  children: ReactNode;
}

export default async function AdminUsersLayout({
  children,
}: AdminUsersLayoutProps) {
  return <>{children}</>;
}
