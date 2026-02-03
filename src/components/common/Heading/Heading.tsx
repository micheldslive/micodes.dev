'use client';

import { PropsWithChildren } from 'react';

import { Typography } from '@/components/ui';
import { If } from '@/components/utils';

type HeadingProps = PropsWithChildren<{
  length?: number;
}>;

export const Heading = ({ children, length }: HeadingProps) => (
  <div className="relative">
    <div className="flex items-center justify-between pb-4">
      <Typography
        as="h2"
        filling="inline"
        variation="random"
        color="secondary"
        className="text-6xl uppercase"
      >
        {children}
      </Typography>
      <If condition={!!length}>
        <Typography as="h5" color="secondary" weight="bold" className="text-3xl">
          {length}
        </Typography>
      </If>
    </div>
    <hr className="border-t-2 border-slate-500 dark:border-slate-50" />
  </div>
);
