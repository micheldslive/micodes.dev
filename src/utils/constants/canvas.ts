import { TargetProps } from '@/types';

export const LIGHT_COLOR = '#e8e8ff';
export const PARTICLE_COUNT_GOAL = 80;
export const LETTER_SCALE = 0.9;

export const SCENE_THEMES = {
  dark: {
    background: '#2b2b33',
    fog: '#2b2b33',
    main: '#8288a0',
    envMapIntensity: 1,
    ambientIntensity: 0.25,
    roughness: 0.5,
    metalness: 0.9,
  },
  light: {
    background: '#f8f9ff',
    fog: '#f8f9ff',
    main: '#f8f9ff',
    envMapIntensity: 0.1,
    ambientIntensity: 10,
    roughness: 0.4,
    metalness: 0.8,
  },
} as const;

type LetterDefinition = TargetProps[];

const createLetter = (points: TargetProps[], offsetX: number = 0): LetterDefinition =>
  points.map(([x, y, z]) => [x + offsetX, y, z]);

const LETTER_M: LetterDefinition = [
  [-2, 2, 0],
  [-2, 1, 0],
  [-2, 0, 0],
  [-2, -1, 0],
  [-2, -2, 0],
  [-1.5, 1.5, 0],
  [-1, 1, 0],
  [-0.5, 0.5, 0],
  [0, 0, 0],
  [0.5, 0.5, 0],
  [1, 1, 0],
  [1.5, 1.5, 0],
  [2, 2, 0],
  [2, 1, 0],
  [2, 0, 0],
  [2, -1, 0],
  [2, -2, 0],
];

const LETTER_D: LetterDefinition = [
  [-1.5, 2, 0],
  [-1.5, 1, 0],
  [-1.5, 0, 0],
  [-1.5, -1, 0],
  [-1.5, -2, 0],
  [-1, 2, 0],
  [-0.5, 1.8, 0],
  [0, 1.5, 0],
  [0.5, 1, 0],
  [0.7, 0.5, 0],
  [0.7, 0, 0],
  [0.7, -0.5, 0],
  [0.5, -1, 0],
  [0, -1.5, 0],
  [-0.5, -1.8, 0],
  [-1, -2, 0],
];

const LETTER_C: LetterDefinition = [
  [0.5, 1.8, 0],
  [1, 2, 0],
  [1.5, 2, 0],
  [2, 1.8, 0],
  [0, 1.5, 0],
  [-0.3, 1, 0],
  [-0.3, 0.5, 0],
  [-0.3, 0, 0],
  [-0.3, -0.5, 0],
  [-0.3, -1, 0],
  [0, -1.5, 0],
  [0.5, -1.8, 0],
  [1, -2, 0],
  [1.5, -2, 0],
  [2, -1.8, 0],
];

const LETTER_H: LetterDefinition = [
  [-1.5, 2, 0],
  [-1.5, 1, 0],
  [-1.5, 0, 0],
  [-1.5, -1, 0],
  [-1.5, -2, 0],
  [-0.5, 0, 0],
  [0.5, 0, 0],
  [1.5, 2, 0],
  [1.5, 1, 0],
  [1.5, 0, 0],
  [1.5, -1, 0],
  [1.5, -2, 0],
];

const LETTER_W: LetterDefinition = [
  [-2, 2, 0],
  [-1.8, 1, 0],
  [-1.6, 0, 0],
  [-1.4, -1, 0],
  [-1.2, -2, 0],
  [-0.8, -1, 0],
  [-0.5, 0, 0],
  [0, 0.5, 0],
  [0.5, 0, 0],
  [0.8, -1, 0],
  [1.2, -2, 0],
  [1.4, -1, 0],
  [1.6, 0, 0],
  [1.8, 1, 0],
  [2, 2, 0],
];

const LETTER_A: LetterDefinition = [
  [0, 2, 0],
  [-0.5, 1, 0],
  [-1, 0, 0],
  [-1.5, -1, 0],
  [-2, -2, 0],
  [0.5, 1, 0],
  [1, 0, 0],
  [1.5, -1, 0],
  [2, -2, 0],
  [-1, -0.5, 0],
  [-0.5, -0.5, 0],
  [0, -0.5, 0],
  [0.5, -0.5, 0],
  [1, -0.5, 0],
];

const LETTER_E: LetterDefinition = [
  [-1.5, 2, 0],
  [-1.5, 1, 0],
  [-1.5, 0, 0],
  [-1.5, -1, 0],
  [-1.5, -2, 0],
  [-0.5, 2, 0],
  [0.5, 2, 0],
  [1.5, 2, 0],
  [-0.5, 0, 0],
  [0.5, 0, 0],
  [-0.5, -2, 0],
  [0.5, -2, 0],
  [1.5, -2, 0],
];

// Position offsets for letter combinations
const MD_OFFSET = { M: -7, D: -1.5 };
const MC_OFFSET = { M: 3, C: 7 };

export const LETTER_M_LEFT_POSITIONS = createLetter(LETTER_M, MD_OFFSET.M);
export const LETTER_D_POSITIONS = createLetter(LETTER_D, MD_OFFSET.D);
export const LETTER_M_RIGHT_POSITIONS = createLetter(LETTER_M, MC_OFFSET.M);
export const LETTER_C_RIGHT_POSITIONS = createLetter(LETTER_C, MC_OFFSET.C);
export const LETTER_H_POSITIONS = createLetter(LETTER_H, -5.5);
export const LETTER_W_POSITIONS = createLetter(LETTER_W, -5);
export const LETTER_A_POSITIONS = createLetter(LETTER_A, -5.5);
export const LETTER_E_POSITIONS = createLetter(LETTER_E, -5.5);

export const COMBINATIONS = {
  MD: [LETTER_M_LEFT_POSITIONS, LETTER_D_POSITIONS],
  MC: [LETTER_M_RIGHT_POSITIONS, LETTER_C_RIGHT_POSITIONS],
  HM: [LETTER_H_POSITIONS],
  WK: [LETTER_W_POSITIONS],
  AB: [LETTER_A_POSITIONS],
  CT: [LETTER_E_POSITIONS],
} as const;
