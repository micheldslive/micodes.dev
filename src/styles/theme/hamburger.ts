import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const atomsVariants = cva(
  cn(
    'absolute left-3.75 h-2 w-2 rounded-full',
    'border-2 border-slate-500 bg-transparent dark:border-slate-50',
    'transition-all duration-300 ease-[cubic-bezier(.61,.01,.42,1)]',
    'group-hover:top-1/2 group-hover:left-1/2 group-hover:border-[1.5px]',
    'group-hover:-translate-x-1/2 group-hover:-translate-y-1/2',
    'group-hover:border-sky-600 group-hover:dark:border-sky-400',
  ),
  {
    variants: {
      atom: {
        first: cn(
          'top-0.75',
          'group-hover:h-9 group-hover:w-3',
          'group-hover:rotate-30 group-hover:animate-atom',
          'group-hover:rounded-[50%]',
          // open
          'group-data-[open=true]:top-1/2',
          'group-data-[open=true]:left-1/2',
          'group-data-[open=true]:h-0',
          'group-data-[open=true]:w-7.5',
          'group-data-[open=true]:-translate-x-1/2',
          'group-data-[open=true]:-translate-y-1/2',
          'group-data-[open=true]:-rotate-45',
          'group-data-[open=true]:animate-division!',
          'group-data-[open=true]:rounded-none',
          'group-data-[open=true]:border-slate-500',
          'group-data-[open=true]:dark:border-slate-50',
        ),

        /** Center → Core */
        second: cn(
          'top-3.75',
          'group-hover:h-1.5 group-hover:w-1.5',
          'group-hover:animate-ball',
          'group-hover:bg-sky-600 group-hover:dark:bg-sky-400',
          // open
          'group-data-[open=true]:scale-0',
          'group-data-[open=true]:opacity-0',
        ),

        /** Bottom → Ellipse -30deg → some */
        third: cn(
          'top-6.75',
          'group-hover:h-9 group-hover:w-3',
          'group-hover:-rotate-30 group-hover:animate-atom',
          'group-hover:rounded-[50%]',
          // open
          'group-data-[open=true]:scale-0',
          'group-data-[open=true]:opacity-0',
        ),

        /** Hidden → Ellipse 90deg → X */
        fourth: cn(
          'top-1/2 left-1/2 h-0 w-0 opacity-0',
          '-translate-x-1/2 -translate-y-1/2',
          'border-0 border-transparent',
          'group-hover:h-9 group-hover:w-3',
          'group-hover:rotate-90 group-hover:animate-atom',
          'group-hover:rounded-[50%]',
          'group-hover:opacity-100',
          // open
          'group-data-[open=true]:h-0',
          'group-data-[open=true]:w-7.5',
          'group-data-[open=true]:left-1/2',
          'group-data-[open=true]:rotate-45',
          'group-data-[open=true]:animate-division',
          'group-data-[open=true]:rounded-none',
          'group-data-[open=true]:border-slate-500',
          'group-data-[open=true]:dark:border-slate-50',
          'group-data-[open=true]:opacity-100',
        ),
      },
    },
  },
);
