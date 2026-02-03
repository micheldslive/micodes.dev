import { MeshDistortMaterialProps } from '@react-three/drei';

import { TargetInitials, TargetProps } from '@/types';

export type ParticleColorProps = Pick<
  MeshDistortMaterialProps,
  'color' | 'roughness' | 'metalness' | 'envMapIntensity'
>;

type ParticleTargets = Record<TargetInitials, TargetProps>;

export type ParticleProps = {
  initialPosition: TargetProps;
  targets: ParticleTargets;
  baseScale: number;
  floatSpeed: number;
  distortAmount: number;
  timeOffset: number;
} & ParticleColorProps;
