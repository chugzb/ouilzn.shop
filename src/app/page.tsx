import { websiteConfig } from '@/config/website';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect("/");
}

