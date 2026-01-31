import { Fragment, ReactNode } from 'react';

export type ForChildren<TDataItem> = (props: TDataItem, index: number) => ReactNode;

export type ForProps<TDataItem> = {
  each: readonly TDataItem[] | TDataItem[] | undefined | null;
  fallback?: ReactNode;
  children: ForChildren<TDataItem>;
};

export const For = <TDataItem,>({ each, fallback = null, children }: ForProps<TDataItem>) => {
  if (!each || each?.length === 0) return fallback;

  return <Fragment>{each.map((item, index) => children(item, index))}</Fragment>;
};
