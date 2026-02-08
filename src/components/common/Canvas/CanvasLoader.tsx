'use client';

import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';

import { useLoader } from '@/stores';

export const CanvasLoader = () => {
  const { active, progress } = useProgress();
  const { setLoading } = useLoader();

  useEffect(() => {
    if (progress === 100 || !active) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, active, setLoading]);

  return null;
};
