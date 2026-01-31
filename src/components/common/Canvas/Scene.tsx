/* eslint-disable react/no-unknown-property */
'use client';

import { Environment } from '@react-three/drei';
import { useTheme, UseThemeProps } from 'next-themes';

import { SCENE_THEMES } from '@/utils/constants';

import { Particles } from './Particles';
import { PointLights } from './PointLights';

export const Scene = () => {
  const { theme } = useTheme();
  const scene = SCENE_THEMES[(theme as Required<UseThemeProps>['systemTheme']) ?? 'dark'];

  console.log('scene', scene);

  return (
    <>
      <color attach="background" args={[scene.background]} />
      <fog attach="fog" args={[scene.fog, 8, 25]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#f0f0ff" />
      <directionalLight position={[-10, -5, -5]} intensity={0.3} color={scene.main} />
      <spotLight position={[0, 15, 5]} angle={0.4} penumbra={1} intensity={0.6} color="#ffffff" />
      <Environment preset={scene.preset} />
      <PointLights />
      <Particles color={scene.main} />
    </>
  );
};
