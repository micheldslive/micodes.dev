'use client';

import { motion } from 'framer-motion';
import { type LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';

import { Lottie } from '@/components/common';
import { cn } from '@/lib/utils';
import type { WorkProps } from '@/types';

export const WorkItem = ({ work, onHover, isHovered }: WorkProps) => {
  const { title, links, description, icon, width, height, margin } = work;

  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const githubIconRef = useRef<LottieRefCurrentProps | null>(null);
  const webIconRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <motion.a
      onHoverStart={() => onHover(title)}
      onHoverEnd={() => onHover('')}
      data-testid="featuredProject"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      aria-label="featuredProject"
      className="group/Lottie cursor-hover relative flex flex-col rounded-xl p-5 no-underline transition-opacity duration-300 ease-in-out hover:opacity-100 md:w-[180px] md:max-w-35"
    >
      <Lottie
        lottieRef={iconRef}
        iconName={icon}
        style={{
          width: width || 24,
          height: height || 24,
          margin: margin || '0 0 10px 0',
        }}
      />

      <div className="flex-1">
        <p className="m-0 text-[18px] text-slate-800 dark:text-slate-50">{title}</p>

        <p className="m-0 leading-6 text-slate-500 dark:text-slate-400">{description}</p>

        <div className="mt-2.5 flex min-h-[35px] items-center gap-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              onMouseEnter={() => githubIconRef.current?.play()}
              onMouseLeave={() => githubIconRef.current?.stop()}
              className={cn(
                'transition-all duration-300 ease-out xl:pointer-events-none xl:invisible xl:opacity-0',
                isHovered && 'xl:pointer-events-auto xl:visible xl:opacity-100',
              )}
              rel="noreferrer"
            >
              <Lottie lottieRef={githubIconRef} iconName="source" />
            </a>
          )}

          {links.web && (
            <a
              href={links.web}
              target="_blank"
              onMouseEnter={() => webIconRef.current?.play()}
              onMouseLeave={() => webIconRef.current?.stop()}
              className={cn(
                'transition-all duration-300 ease-out xl:pointer-events-none xl:invisible xl:opacity-0',
                isHovered && 'xl:pointer-events-auto xl:visible xl:opacity-100',
              )}
              rel="noreferrer"
            >
              <Lottie lottieRef={webIconRef} iconName="copy-link" />
            </a>
          )}
        </div>
      </div>

      {isHovered && (
        <motion.span
          layoutId="projects"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: 5,
            transition: {
              type: 'tween',
              repeat: 1,
              repeatType: 'reverse',
            },
          }}
          exit={{ y: 0, opacity: 0 }}
          className="absolute inset-0 -z-10 rounded-xl bg-slate-50 dark:bg-slate-900"
        />
      )}
    </motion.a>
  );
};
