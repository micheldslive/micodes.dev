import { cva, VariantProps } from 'class-variance-authority';

export type DropdownItemVariants = VariantProps<typeof dropdownItemVariants>;

export const dropdownItemVariants = cva(
  'relative flex cursor-default items-center rounded px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-neutral-100 focus:text-neutral-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
  {
    variants: {
      inset: {
        true: 'pl-8',
      },
    },
  },
);
