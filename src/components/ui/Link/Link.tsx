'use client';
import { LinkProps } from 'next/link';
import { ComponentProps } from 'react';

import { Base } from './Base';
import { Tooltip } from './Tooltip';
import { Underline } from './Underline';

export type AnchorProps = Omit<LinkProps, 'target'> &
  Pick<ComponentProps<'a'>, 'className' | 'children' | 'target'>;
export type AnchorTooltipProps = ComponentProps<'a'> & Pick<ComponentProps<'option'>, 'label'>;

export const Link = Object.assign(Base, {
  Underline,
  Tooltip,
});
