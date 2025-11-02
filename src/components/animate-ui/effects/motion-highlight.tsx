import type { ReactNode } from 'react';

interface MotionHighlightProps {
  children: ReactNode;
}

export function MotionHighlight({ children }: MotionHighlightProps) {
  return <>{children}</>;
}

export const MotionHighlightItem = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
