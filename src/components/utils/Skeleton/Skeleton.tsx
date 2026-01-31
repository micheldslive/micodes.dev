import { UseQueryResult } from '@tanstack/react-query';
import { ComponentProps, ReactNode } from 'react';

import { Skeleton as SkeletonPrimitive } from '@/components/ui';

export type SkeletonProps = {
  fallback?: ReactNode;
} & Pick<ComponentProps<'div'>, 'children' | 'className'> &
  Partial<Pick<UseQueryResult, 'isPending'>>;

export const Skeleton = ({ isPending, className, fallback, children }: SkeletonProps) =>
  isPending ? (fallback ?? <SkeletonPrimitive className={className} />) : children;
