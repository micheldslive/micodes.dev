import { SVGProps } from 'react';

export type SkeletonSVGProps = SVGProps<SVGSVGElement> & {
  highlightColor?: string;
};

export const SkeletonSVG = ({ highlightColor = '#EEEBF6', ...props }: SkeletonSVGProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <linearGradient id="shimmer" x1="0" x2="100%" y1="0" y2="0">
        <stop offset="25%" stopColor={highlightColor} stopOpacity="0" />
        <stop offset="50%" stopColor={highlightColor} stopOpacity="1" />
        <stop offset="75%" stopColor={highlightColor} stopOpacity="0" />
      </linearGradient>
    </defs>

    <rect width="100%" height="100%" fill="currentColor" opacity={0} />

    <rect width="100%" height="100%" fill="url(#shimmer)">
      <animateTransform
        attributeType="XML"
        attributeName="transform"
        type="translate"
        from="-100 0"
        to="100 0"
        dur="0.75s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);
