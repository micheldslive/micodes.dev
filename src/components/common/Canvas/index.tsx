'use client';

import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(() => import('./Canvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-slate-100 dark:bg-slate-800" />,
});

export const Canvas = () => <DynamicCanvas />;
