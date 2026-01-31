import { MeshDistortMaterialProps } from '@react-three/drei';

import { TargetInitials, TargetProps } from '@/types';

export type HoverStateProps = Pick<MeshDistortMaterialProps, 'color'>;

type ParticleTargets = Record<TargetInitials, TargetProps>;

export type ParticleProps = {
  index: number;
  initialPosition: TargetProps;
  targets: ParticleTargets;
  baseScale: number;
  floatSpeed: number;
  distortAmount: number;
  timeOffset: number;
} & HoverStateProps;
