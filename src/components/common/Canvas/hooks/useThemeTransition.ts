'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { SCENE_THEMES } from '@/utils/constants';

type SceneTheme = (typeof SCENE_THEMES)[keyof typeof SCENE_THEMES];

const LERP_FACTOR = 0.08;

export const useThemeTransition = (theme: SceneTheme) => {
  const { scene } = useThree();
  const isFirstRender = useRef(true);

  const targetBackground = useRef(new THREE.Color(theme.background));
  const targetFog = useRef(new THREE.Color(theme.fog));
  const targetMain = useRef(new THREE.Color(theme.main));

  const currentBackground = useRef(new THREE.Color(theme.background));
  const currentFog = useRef(new THREE.Color(theme.fog));
  const currentMain = useRef(new THREE.Color(theme.main));

  useEffect(() => {
    targetBackground.current.set(theme.background);
    targetFog.current.set(theme.fog);
    targetMain.current.set(theme.main);

    if (isFirstRender.current) {
      currentBackground.current.set(theme.background);
      currentFog.current.set(theme.fog);
      currentMain.current.set(theme.main);
      isFirstRender.current = false;
    }
  }, [theme.background, theme.fog, theme.main]);

  useFrame(() => {
    currentBackground.current.lerp(targetBackground.current, LERP_FACTOR);
    currentFog.current.lerp(targetFog.current, LERP_FACTOR);
    currentMain.current.lerp(targetMain.current, LERP_FACTOR);

    if (scene.background instanceof THREE.Color) {
      scene.background.copy(currentBackground.current);
    }

    if (scene.fog instanceof THREE.Fog) {
      scene.fog.color.copy(currentFog.current);
    }
  });

  return {
    background: currentBackground.current,
    fog: currentFog.current,
    main: currentMain.current,
  };
};
