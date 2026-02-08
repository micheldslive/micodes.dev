'use client';

import { PropsWithChildren } from 'react';

import { Logo } from '@/components/ui';
import { If } from '@/components/utils';
import { useLoader } from '@/stores';

export const Preloader = ({ children }: PropsWithChildren) => {
  const { loading } = useLoader();

  return (
    <If condition={loading} fallback={children}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <Logo.Animated />
      </div>
    </If>
  );
};
