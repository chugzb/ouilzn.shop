export interface User {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  role?: string | null;
  emailVerified: boolean;
  customerId?: string | null;
  banned?: boolean | null;
  banReason?: string | null;
  banExpires?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User | null;
}
