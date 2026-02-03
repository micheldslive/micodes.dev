'use client';

import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Link, Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { cn } from '@/lib/utils';
import { NavigationProps } from '@/types';

type SocialProps = ComponentProps<'ul'>;

export const Social = ({ className, ...props }: SocialProps) => {
  const { t } = useTranslation();
  const social = t('menu.social', { returnObjects: true }) as NavigationProps[];
  return (
    <ul className={cn('flex gap-8 pt-5', className)} {...props}>
      <For each={social}>
        {(props, index) => (
          <Typography
            key={index}
            as="li"
            filling="inline"
            variation="random"
            weight="normal"
            className="w-fit text-xl text-slate-500 duration-400 dark:text-slate-50"
          >
            <Link.Underline {...props} target="_blank" />
          </Typography>
        )}
      </For>
    </ul>
  );
};
