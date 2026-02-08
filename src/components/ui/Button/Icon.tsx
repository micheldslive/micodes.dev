import { cn } from '@/lib/utils';

import { Tooltip } from '../Tooltip';

import { Base } from './Base';
import { ButtonIconProps } from './Button';

export const Icon = ({ label, children, className, ...props }: ButtonIconProps) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      {children && (
        <Base
          variant="transparent"
          size="icon"
          className={cn('cursor-hover', className)}
          {...props}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Base>
      )}
    </Tooltip.Trigger>
    {label && (
      <Tooltip.Content side={'bottom'} sideOffset={4}>
        <span>{label}</span>
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);
