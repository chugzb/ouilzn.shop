import { Logo } from '@/components/layout/logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function BuiltWithButton() {
  return (
    <Link
      target="_blank"
      href="https://soulany.com?utm_source=built-with-soulany"
      className={cn(
        buttonVariants({ variant: 'outline', size: 'sm' }),
        'border border-border px-4 rounded-md'
      )}
    >
      <span>Built with</span>
      <span>
        <Logo className="size-5 rounded-full" />
      </span>
      <span className="font-semibold">Cotton Jeans</span>
    </Link>
  );
}
