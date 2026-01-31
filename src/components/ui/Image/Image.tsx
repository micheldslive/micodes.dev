'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ComponentProps, HTMLAttributes, RefAttributes, useRef } from 'react';

import { cn } from '@/lib/utils';
import { reactElementToBase64 } from '@/utils/formatters';

import { SkeletonSVG } from '../Skeleton';

export type ImageProps = RefAttributes<HTMLImageElement> &
  Omit<HTMLAttributes<HTMLImageElement>, keyof NextImageProps> &
  NextImageProps & {
    fallback?: ComponentProps<typeof NextImage>['src'];
  };

const parseImageSrc = (src?: ImageProps['src']) => {
  if (!src) return '/';
  const isURL = src?.toString()?.startsWith('http') || src?.toString()?.startsWith('blob');

  if (isURL) return src;

  const parsedSrc = src?.toString()?.startsWith('/') ? `${src}` : `/${src}`;

  return parsedSrc;
};

export const Image = ({
  className,
  placeholder = `data:image/svg+xml;base64,${reactElementToBase64(<SkeletonSVG />)}`,
  fallback,
  src,
  alt,
  onError,
  ...props
}: ImageProps) => {
  const retryCount = useRef<number>(0);

  return (
    <NextImage
      className={cn('pointer-events-none bg-lightpurple-50 select-none', className)}
      quality={100}
      placeholder={placeholder}
      alt={alt}
      src={parseImageSrc(src)}
      data-nimg-error={false}
      onError={(e) => {
        if (retryCount.current === 0 && fallback) {
          retryCount.current += 1;
          e.currentTarget.src = parseImageSrc(fallback) as string;
        }
        e.currentTarget.setAttribute('data-nimg-error', 'true');
        onError?.(e);
      }}
      {...props}
    />
  );
};
