'use client';

import { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';

export const reactElementToBase64 = (element: ReactNode): string => {
  const str = renderToString(element);

  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
};
