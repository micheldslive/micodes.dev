import { TargetProps } from '@/types';

import { LETTER_SCALE } from '../constants';

export const scalePositions = (positions: TargetProps[]): TargetProps[] =>
  positions.map(([x, y, z]) => [x * LETTER_SCALE, y * LETTER_SCALE, z]);

export const padToLength = <T>(arr: T[], targetLength: number): T[] => {
  const result = [...arr];
  while (result.length < targetLength) {
    result.push(result[result.length - 1]);
  }
  return result;
};
