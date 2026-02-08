import { ComponentProps } from 'react';

import { ButtonVariants } from '@/styles/theme';

import { Base } from './Base';
import { Icon } from './Icon';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean;
  };

export type ButtonIconProps = ButtonProps & Pick<ComponentProps<'option'>, 'label'>;

export const Button = Object.assign(Base, {
  Icon,
});
