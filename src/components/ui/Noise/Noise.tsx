'use client';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type NoiseProps = ComponentProps<'div'>;

export const Noise = ({ className, ...props }: NoiseProps) => (
  <div
    className={cn(
      "pointer-events-none fixed top-[-300%] left-[-150%] z-9999 h-[600%] w-[600%] animate-noise bg-[url('/images/noise.png')] bg-size-[200px] bg-repeat opacity-25",
      className,
    )}
    {...props}
  />
);
