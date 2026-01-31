import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';

import { buttonVariants, ButtonVariants } from '@/styles/theme';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean;
  };

export const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={buttonVariants({ variant, size, className })} {...props} />;
};
