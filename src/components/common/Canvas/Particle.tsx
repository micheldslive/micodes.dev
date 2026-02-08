/* eslint-disable react/no-unknown-property */
'use client';

import { MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { useWave } from '@/stores';

import { ParticleProps } from './types';

const BOUNDS = { x: 8, y: 4.5, z: 3 };
const VELOCITY_DAMPING = 0.985;
const MAX_VELOCITY = 0.025;
const COLOR_LERP_FACTOR = 0.05;

export const Particle = ({
  targets,
  initialPosition,
  baseScale,
  floatSpeed,
  distortAmount,
  timeOffset,
  color,
  roughness,
  metalness,
  envMapIntensity,
}: ParticleProps) => {
  const { wave } = useWave();
  const meshRef = useRef<THREE.Mesh | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);
  const currentPos = useRef(new THREE.Vector3(...initialPosition));
  const velocity = useRef(
    new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(0.015),
      THREE.MathUtils.randFloatSpread(0.015),
      THREE.MathUtils.randFloatSpread(0.008),
    ),
  );
  const targetVector = useRef(new THREE.Vector3());
  const targetColor = useRef(new THREE.Color(color as string));
  const currentColor = useRef(new THREE.Color(color as string));
  const isFirstColorChange = useRef(true);

  useEffect(() => {
    targetColor.current.set(color as string);
    if (isFirstColorChange.current) {
      currentColor.current.set(color as string);
      isFirstColorChange.current = false;
    }
  }, [color]);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!mesh) return;

    if (material) {
      currentColor.current.lerp(targetColor.current, COLOR_LERP_FACTOR);
      material.color.copy(currentColor.current);
    }

    if (wave !== 'none') {
      targetVector.current.set(...targets[wave]);
    } else {
      targetVector.current.copy(currentPos.current);

      const t = state.clock.elapsedTime + timeOffset;

      velocity.current.x += Math.sin(t * 0.5) * 0.0003;
      velocity.current.y += Math.cos(t * 0.4) * 0.0003;
      velocity.current.z += Math.sin(t * 0.3) * 0.0001;

      velocity.current.x += THREE.MathUtils.randFloatSpread(0.0008);
      velocity.current.y += THREE.MathUtils.randFloatSpread(0.0008);

      velocity.current.multiplyScalar(VELOCITY_DAMPING);
      velocity.current.clampLength(0, MAX_VELOCITY);

      currentPos.current.add(velocity.current);

      if (Math.abs(currentPos.current.x) > BOUNDS.x) velocity.current.x *= -1;
      if (Math.abs(currentPos.current.y) > BOUNDS.y) velocity.current.y *= -1;
      if (Math.abs(currentPos.current.z) > BOUNDS.z) velocity.current.z *= -1;
    }

    mesh.position.lerp(targetVector.current, wave === 'none' ? 0.015 : 0.06);

    mesh.rotation.x += delta * 0.08 * floatSpeed;
    mesh.rotation.y += delta * 0.12 * floatSpeed;

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + timeOffset) * 0.05;
    mesh.scale.setScalar(baseScale * pulse);
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        ref={materialRef}
        color={color}
        roughness={roughness}
        metalness={metalness}
        envMapIntensity={envMapIntensity}
        distort={distortAmount}
        speed={1.5}
      />
    </mesh>
  );
};
