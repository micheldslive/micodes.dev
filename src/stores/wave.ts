'use client';

import { createStore, useStore } from 'zustand';

import { TargetInitials } from '@/types';

interface WaveState {
  wave: TargetInitials | 'none';
}

interface WaveActions {
  setWave: (wave: WaveState['wave']) => void;
}

type WaveStore = WaveState & WaveActions;

const waveStore = createStore<WaveStore>()((set) => ({
  wave: 'none',
  setWave: (wave) => set(() => ({ wave })),
}));

export const useWave = () => useStore(waveStore);

export type { WaveState };
