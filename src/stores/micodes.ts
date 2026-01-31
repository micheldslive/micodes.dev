'use client';

import { createStore, useStore } from 'zustand';

import { TargetInitials } from '@/types';

interface States {
  isOpen: boolean;
}

interface Actions {
  onToggle(): void;
  onClose(): void;
}

export interface WaveStoreProps {
  wave: TargetInitials | 'none';
  setWave(wave: WaveStoreProps['wave']): void;
}

const micodesStore = createStore<States & Actions & WaveStoreProps>()((set) => ({
  isOpen: false,
  wave: 'none',
  onToggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  onClose: () => set(() => ({ isOpen: false })),
  setWave: (wave) => {
    set(() => ({ wave }));
  },
}));

export const useMicodes = () => useStore(micodesStore);
