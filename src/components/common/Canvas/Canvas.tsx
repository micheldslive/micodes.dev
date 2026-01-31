'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';

import { Scene } from './Scene';

const Canvas = () => (
  <div className="absolute inset-0 z-0">
    <ThreeCanvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
      }}
    >
      <Scene />
    </ThreeCanvas>
  </div>
);

export default Canvas;
