'use client';

import { motion } from 'framer-motion';

import { useLottieAnimation } from '@/hooks';
import { type WorkProps } from '@/types';

import { WorkItemBackground, WorkItemContent, WorkItemIcon, WorkItemLinks } from './components';

export const WorkItem = ({ work, onHover, isHovered }: WorkProps) => {
  const { title, links, description, icon, width, height, margin } = work;
  const { ref, play, stop } = useLottieAnimation();

  return (
    <motion.a
      onHoverStart={() => onHover(title)}
      onHoverEnd={() => onHover('')}
      data-testid="featuredProject"
      onMouseEnter={play}
      onMouseLeave={stop}
      aria-label="featuredProject"
      className="group/work cursor-hover relative flex flex-col rounded-xl p-5 no-underline transition-opacity duration-300 ease-in-out hover:opacity-100 md:w-[180px] md:max-w-35"
    >
      <WorkItemIcon lottieRef={ref} icon={icon} width={width} height={height} margin={margin} />

      <div className="flex-1">
        <WorkItemContent title={title} description={description} />
        <WorkItemLinks links={links} />
      </div>

      <WorkItemBackground active={isHovered} />
    </motion.a>
  );
};
