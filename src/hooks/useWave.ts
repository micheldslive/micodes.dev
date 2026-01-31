'use client'

import { animate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

import { useMicodes, WaveStoreProps } from '@/stores';

export const useWave = () => {
  const { setWave } = useMicodes();
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const backgroundPositionX = useMotionValue(0);

  const startWave = (wave: WaveStoreProps['wave']) => {
    if (animationRef.current) return;

    animationRef.current = animate(backgroundPositionX, backgroundPositionX.get() + 2000, {
      duration: 40,
      ease: 'linear',
      repeat: Infinity,
    });

    setWave(wave);
  };

  const startBullets = (wave: WaveStoreProps['wave']) => setWave(wave);
  const stopBullets = () => setWave('none');

  const stopWave = () => {
    setWave('none');
    animationRef.current?.stop();
    animationRef.current = null;
  };

  return { startWave, stopWave, startBullets, stopBullets, animationRef, backgroundPositionX };
};
