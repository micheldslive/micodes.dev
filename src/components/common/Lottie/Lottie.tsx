'use client';

import LottieRender, { LottieComponentProps } from 'lottie-react';
import { useEffect, useState } from 'react';

import { loadLottie } from '@/utils/functions';

type LottieProps = Pick<LottieComponentProps, 'lottieRef' | 'style'> & {
  iconName?: string;
};

export const Lottie = ({ iconName, lottieRef, style }: LottieProps) => {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;
    const loadIcon = async () => {
      if (mounted) setAnimationData((await loadLottie(iconName)).default);
    };
    loadIcon();
    return () => {
      mounted = false;
    };
  }, [iconName]);

  if (!animationData) return null;

  return (
    <LottieRender
      lottieRef={lottieRef}
      style={style ?? { width: 24, height: 24 }}
      animationData={animationData}
      loop={false}
      autoplay={false}
    />
  );
};
