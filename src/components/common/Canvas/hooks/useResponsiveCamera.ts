/* eslint-disable react-hooks/immutability */
'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

const BASE_CAMERA_Z = 10;
const REFERENCE_ASPECT = 16 / 9;
const MIN_ZOOM = 0.6;
const LERP_FACTOR = 0.05;

export const useResponsiveCamera = () => {
  const { camera, viewport } = useThree();
  const targetZ = useRef(BASE_CAMERA_Z);

  const cameraZ = useMemo(() => {
    const currentAspect = viewport.width / viewport.height;
    const aspectRatio = currentAspect / REFERENCE_ASPECT;
    const zoomFactor = Math.max(MIN_ZOOM, Math.min(1, aspectRatio));
    return BASE_CAMERA_Z / zoomFactor;
  }, [viewport.width, viewport.height]);

  targetZ.current = cameraZ;

  useFrame(() => {
    const diff = targetZ.current - camera.position.z;
    if (Math.abs(diff) > 0.01) {
      camera.position.z += diff * LERP_FACTOR;
    }
  });
};
