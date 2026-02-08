'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

import { useLoader } from '@/stores';

import { CanvasLoader } from './CanvasLoader';
import { CANVAS_CONFIG } from './config';
import { Scene } from './Scene';

const Canvas = () => {
  const { loading } = useLoader();

  return (
    <motion.div
      className="absolute inset-0 z-0 bg-slate-100 dark:bg-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: loading ? 0 : 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <ThreeCanvas {...CANVAS_CONFIG}>
        <CanvasLoader />
        <Scene />
      </ThreeCanvas>
    </motion.div>
  );
};

export default Canvas;
