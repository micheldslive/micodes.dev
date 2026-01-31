import { TargetProps } from '@/types';

export const LIGHT_COLOR = '#e8e8ff';
export const PARTICLE_COUNT_GOAL = 80;
export const LETTER_SCALE = 0.9;

export const SCENE_THEMES = {
  dark: {
    background: '#2b2b33',
    fog: '#2b2b33',
    main: '#8288a0',
    preset: 'night',
  },
  light: {
    background: '#f8f9ff',
    fog: '#f8f9ff',
    main: '#f0e4ff',
    preset: 'warehouse',
  },
} as const;

export const LETTER_M_POSITIONS: TargetProps[] = [
  // vertical esquerda
  [-3, 2, 0],
  [-3, 1, 0],
  [-3, 0, 0],
  [-3, -1, 0],
  [-3, -2, 0],
  // diagonal esquerda
  [-2.5, 1.5, 0],
  [-2, 1, 0],
  [-1.5, 0.5, 0],
  // meio
  [-1, 0, 0],
  // diagonal direita
  [-0.5, 0.5, 0],
  [0, 1, 0],
  [0.5, 1.5, 0],
  // vertical direita
  [1, 2, 0],
  [1, 1, 0],
  [1, 0, 0],
  [1, -1, 0],
  [1, -2, 0],
];

export const LETTER_D_POSITIONS: TargetProps[] = [
  // vertical
  [3, 2, 0],
  [3, 1, 0],
  [3, 0, 0],
  [3, -1, 0],
  [3, -2, 0],
  // curva superior
  [3.5, 2, 0],
  [4, 1.8, 0],
  [4.5, 1.5, 0],
  // curva meio
  [5, 1, 0],
  [5.2, 0.5, 0],
  [5.2, 0, 0],
  [5.2, -0.5, 0],
  [5, -1, 0],
  // curva inferior
  [4.5, -1.5, 0],
  [4, -1.8, 0],
  [3.5, -2, 0],
];

export const LETTER_C_POSITIONS: TargetProps[] = [
  // curva superior
  [5, 1.8, 0],
  [4.5, 2, 0],
  [4, 2, 0],
  [3.5, 1.8, 0],
  // parte esquerda
  [3, 1.5, 0],
  [2.8, 1, 0],
  [2.8, 0.5, 0],
  [2.8, 0, 0],
  [2.8, -0.5, 0],
  [2.8, -1, 0],
  [3, -1.5, 0],
  // curva inferior
  [3.5, -1.8, 0],
  [4, -2, 0],
  [4.5, -2, 0],
  [5, -1.8, 0],
];

export const LETTER_H_POSITIONS: TargetProps[] = [
  [-3, 2, 0],
  [-3, 1, 0],
  [-3, 0, 0],
  [-3, -1, 0],
  [-3, -2, 0],
  [-2, 0, 0],
  [-1, 0, 0],
  [0, 2, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, -1, 0],
  [0, -2, 0],
];

// ================== W ==================
export const LETTER_W_POSITIONS: TargetProps[] = [
  [-3, 2, 0],
  [-3, 1, 0],
  [-3, 0, 0],
  [-3, -1, 0],
  [-3, -2, 0],
  [-2, -1, 0],
  [-1, 0, 0],
  [0, -1, 0],
  [1, 0, 0],
  [2, 2, 0],
  [2, 1, 0],
  [2, 0, 0],
  [2, -1, 0],
  [2, -2, 0],
];

// ================== A ==================
export const LETTER_A_POSITIONS: TargetProps[] = [
  [-4, 2, 0],
  [-3.5, 1, 0],
  [-3, 0, 0],
  [-2.5, -1, 0],
  [-2, -2, 0],
  [1, 2, 0],
  [0.5, 1, 0],
  [0, 0, 0],
  [-0.5, -1, 0],
  [-1, -2, 0],
  [-2.5, 0, 0],
  [-2, 0, 0],
  [-1.5, 0, 0],
];

export const COMBINATIONS = {
  MD: [LETTER_M_POSITIONS, LETTER_D_POSITIONS],
  MC: [LETTER_M_POSITIONS, LETTER_C_POSITIONS],
  HM: [LETTER_H_POSITIONS],
  WK: [LETTER_W_POSITIONS],
  AB: [LETTER_A_POSITIONS],
  CT: [LETTER_C_POSITIONS],
} as const;
