/* eslint-disable react/no-unknown-property */
'use client';

import { Environment } from '@react-three/drei';
import { memo } from 'react';

import { useCanvasTheme, useResponsiveCamera, useThemeTransition } from './hooks';
import { Lighting } from './Lighting';
import { Particles } from './Particles';

// Memoizar Particles para evitar rerenderização quando Environment muda
const MemoizedParticles = memo(Particles);

export const Scene = () => {
  useResponsiveCamera();
  const { theme } = useCanvasTheme();

  useThemeTransition(theme);

  return (
    <>
      <color attach="background" args={[theme.background]} />
      <fog attach="fog" args={[theme.fog, 8, 25]} />
      <Lighting mainColor={theme.main} ambientIntensity={theme.ambientIntensity} />
      <Environment preset="night" />
      <MemoizedParticles
        color={theme.main}
        roughness={theme.roughness}
        metalness={theme.metalness}
        envMapIntensity={theme.envMapIntensity}
      />
    </>
  );
};
