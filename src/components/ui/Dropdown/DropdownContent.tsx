'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type ContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;

export const Content = ({ className, sideOffset = 4, ...props }: ContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'data-[side=left] cursor-hover :slide-in-from-right-2 z-50 min-w-32 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-50',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);
