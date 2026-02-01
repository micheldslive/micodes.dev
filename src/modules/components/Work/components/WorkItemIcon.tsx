import { type LottieRefCurrentProps } from 'lottie-react';
import { type RefObject } from 'react';

import { Lottie } from '@/components/common';
import { type WorkItemProps } from '@/types';

type WorkItemIconProps = Pick<WorkItemProps, 'icon' | 'width' | 'height' | 'margin'> & {
  lottieRef: RefObject<LottieRefCurrentProps | null>;
};

export const WorkItemIcon = ({ icon, width, height, margin, lottieRef }: WorkItemIconProps) => (
  <Lottie
    lottieRef={lottieRef}
    iconName={icon}
    style={{
      width: width || 24,
      height: height || 24,
      margin: margin || '0 0 10px 0',
    }}
  />
);
