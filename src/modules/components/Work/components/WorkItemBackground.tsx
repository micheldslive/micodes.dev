import { motion } from 'framer-motion';

type WorkItemBackgroundProps = {
  active: boolean;
};

export const WorkItemBackground = ({ active }: WorkItemBackgroundProps) => {
  if (!active) return null;

  return (
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
      className="absolute inset-0 -z-10 rounded-xl bg-slate-200 dark:bg-slate-700"
    />
  );
};
