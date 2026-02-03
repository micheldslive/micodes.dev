'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

import { SCENE_THEMES } from '@/utils/constants';

type ThemeKey = keyof typeof SCENE_THEMES;

const getInitialTheme = (): ThemeKey => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem('theme');
    return stored === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const useCanvasTheme = () => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getInitialTheme);
  const isFirstChange = useRef(true);

  useEffect(() => {
    if (resolvedTheme) {
      const newTheme = resolvedTheme === 'light' ? 'light' : 'dark';
      if (newTheme !== currentTheme) setCurrentTheme(newTheme);

      isFirstChange.current = false;
    }
  }, [resolvedTheme, currentTheme]);

  return {
    theme: SCENE_THEMES[currentTheme],
    themeKey: currentTheme,
    isFirstChange: isFirstChange.current,
  };
};
