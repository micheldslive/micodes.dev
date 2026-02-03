'use client';

import { memo, useMemo } from 'react';
import * as THREE from 'three';

import { TargetInitials, TargetProps } from '@/types';
import { COMBINATIONS, PARTICLE_COUNT_GOAL } from '@/utils/constants';
import { padToLength, scalePositions } from '@/utils/functions';

import { Particle } from './Particle';
import { ParticleColorProps } from './types';

const processTargets = () =>
  Object.entries(COMBINATIONS).reduce<Record<TargetInitials, TargetProps[]>>(
    (acc, [key, letterArrays]) => {
      const combined = letterArrays.flat();
      const scaled = scalePositions(combined);
      acc[key as TargetInitials] = padToLength(scaled, PARTICLE_COUNT_GOAL);
      return acc;
    },
    {} as Record<TargetInitials, TargetProps[]>,
  );

const generateParticles = () =>
  Array.from({ length: PARTICLE_COUNT_GOAL }, () => ({
    position: [
      THREE.MathUtils.randFloatSpread(16),
      THREE.MathUtils.randFloatSpread(9),
      THREE.MathUtils.randFloatSpread(5) - 1,
    ] as TargetProps,
    baseScale: 0.35 + THREE.MathUtils.randFloat(0, 0.25),
    floatSpeed: 0.3 + THREE.MathUtils.randFloat(0, 0.4),
    distortAmount: 0.25 + THREE.MathUtils.randFloat(0, 0.2),
    timeOffset: THREE.MathUtils.randFloat(0, Math.PI * 2),
  }));

// Pré-calcular targets para cada partícula uma vez
const createParticleTargets = (targets: Record<TargetInitials, TargetProps[]>, index: number) =>
  Object.entries(targets).reduce<Record<TargetInitials, TargetProps>>(
    (acc, [key, targetArray]) => {
      acc[key as TargetInitials] = targetArray[index];
      return acc;
    },
    {} as Record<TargetInitials, TargetProps>,
  );

const MemoizedParticle = memo(Particle);

export const Particles = ({ color, roughness, metalness, envMapIntensity }: ParticleColorProps) => {
  const { particles, particleTargets } = useMemo(() => {
    const generatedParticles = generateParticles();
    const processedTargets = processTargets();
    const allTargets = generatedParticles.map((_, index) =>
      createParticleTargets(processedTargets, index),
    );
    return {
      particles: generatedParticles,
      targets: processedTargets,
      particleTargets: allTargets,
    };
  }, []);

  return (
    <>
      {particles.map((particle, index) => (
        <MemoizedParticle
          key={index}
          targets={particleTargets[index]}
          initialPosition={particle.position}
          baseScale={particle.baseScale}
          floatSpeed={particle.floatSpeed}
          distortAmount={particle.distortAmount}
          timeOffset={particle.timeOffset}
          color={color}
          roughness={roughness}
          metalness={metalness}
          envMapIntensity={envMapIntensity}
        />
      ))}
    </>
  );
};
