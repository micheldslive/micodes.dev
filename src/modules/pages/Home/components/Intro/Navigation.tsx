'use client';

import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Link, Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { cn } from '@/lib/utils';
import { NavigationProps as NavigationPropsType } from '@/types';

type NavigationProps = ComponentProps<'ul'>;

export const Navigation = ({ className, ...props }: NavigationProps) => {
  const { t } = useTranslation();
  const navigation = t('page.home.navigation', { returnObjects: true }) as NavigationPropsType[];
  return (
    <ul className={cn('flex flex-wrap justify-center gap-x-6', className)} {...props}>
      <For each={navigation}>
        {(props, index) => (
          <Typography
            key={index}
            as="li"
            filling="inline"
            variation="random"
            weight="normal"
            className="text-base! text-slate-500 md:text-lg! dark:text-slate-50"
          >
            <Link.Underline {...props} />
          </Typography>
        )}
      </For>
    </ul>
  );
};
