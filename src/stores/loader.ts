'use client';

import { createStore, useStore } from 'zustand';

interface LoadingState {
  loading: boolean;
}

interface LoadingActions {
  setLoading: (loading: LoadingState['loading']) => void;
}

type LoadingStore = LoadingState & LoadingActions;

const LoadingStore = createStore<LoadingStore>()((set) => ({
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
}));

export const useLoader = () => useStore(LoadingStore);

export type { LoadingState };
