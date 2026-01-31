'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentProps } from 'react';

import { dropdownItemVariants, DropdownItemVariants } from '@/styles/theme';

export type ItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item> & DropdownItemVariants;

export const Item = ({ className, inset, ...props }: ItemProps) => (
  <DropdownMenuPrimitive.Item className={dropdownItemVariants({ className, inset })} {...props} />
);
