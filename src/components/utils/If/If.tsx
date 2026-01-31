import { Fragment, ReactNode } from 'react';

export type IfProps = {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
};

export const If = ({ condition, children, fallback }: IfProps) => (
  <Fragment>{condition ? children : fallback || null}</Fragment>
);
