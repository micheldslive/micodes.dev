'use client';

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { ComponentProps } from 'react';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

export type BadgeProps = Pick<ComponentProps<'option'>, 'label' | 'className'> &
  Pick<ImageProps, 'src' | 'alt'>;

export const Badge = ({ src, alt, label, className }: BadgeProps) => (
  <div className={cn('flex size-40.5 items-center justify-center', className)}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute size-full"
    >
      <svg viewBox="0 0 300 300" className="size-full">
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>
        <Typography
          as="text"
          filling="inline"
          variation="random"
          weight="normal"
          color="secondary"
          className="dark:filter-[invert(1)]"
        >
          <textPath href="#circlePath" startOffset="0%" textLength="740">
            {label}
          </textPath>
        </Typography>
      </svg>
    </motion.div>
    <div className="relative size-27 overflow-hidden rounded-full">
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  </div>
);
