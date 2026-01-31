import { Fragment, ReactNode } from 'react';

export type RepeatProps = {
  count: number;
  children: (index: number) => ReactNode;
};

export const Repeat = ({ count, children }: RepeatProps) => (
  <Fragment>{Array.from({ length: count }).map((_, index) => children(index))}</Fragment>
);
