import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  delete props.children;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-lightpurple-50',
        'before:absolute before:inset-0 before:animate-skeleton-glow before:bg-linear-to-r before:from-lightpurple-0/0 before:from-25% before:via-lightpurple-0 before:via-50% before:to-lightpurple-0/0 before:to-75%',
        className,
      )}
      {...props}
    />
  );
};
