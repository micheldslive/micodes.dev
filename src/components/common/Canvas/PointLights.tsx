/* eslint-disable react/no-unknown-property */
'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

import { LIGHT_COLOR } from '@/utils/constants';

export const PointLights = () => {
  const lightsData = useMemo(() => {
    const lights: {
      position: readonly [number, number, number];
      intensity: number;
    }[] = [];

    for (let i = 0; i < 6; i++) {
      lights.push({
        position: [
          THREE.MathUtils.randFloatSpread(14),
          THREE.MathUtils.randFloatSpread(8),
          1 + THREE.MathUtils.randFloat(0, 2),
        ],
        intensity: 0.3 + THREE.MathUtils.randFloat(0, 0.4),
      });
    }

    return lights;
  }, []);

  return (
    <>
      {lightsData.map((l, i) => (
        <pointLight
          key={i}
          position={l.position}
          intensity={l.intensity}
          color={LIGHT_COLOR}
          distance={8}
          decay={2}
        />
      ))}
    </>
  );
};
