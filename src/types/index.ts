import { Url } from 'next/dist/shared/lib/router/router';

import { COMBINATIONS } from '@/utils/constants';
import { getDeviceType } from '@/utils/functions';

export type NavigationProps = {
  children: string;
  href: Url;
};

export type TargetInitials = keyof typeof COMBINATIONS;

export type TargetProps = [number, number, number];

export type CommandPalleteProps = {
  type?: ReturnType<typeof getDeviceType>;
};
