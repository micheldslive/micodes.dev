import { Slot } from '@radix-ui/react-slot';

import { buttonVariants } from '@/styles/theme';

import { ButtonProps } from './Button';

export const Base = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={buttonVariants({ variant, size, className })} {...props} />;
};
