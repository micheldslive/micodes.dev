import type { SVGProps } from 'react';

import { Animated } from './Animated';
import { Base } from './Base';

export type LogoProps = SVGProps<SVGSVGElement>;

export const Logo = Object.assign(Base, {
  Animated,
});
