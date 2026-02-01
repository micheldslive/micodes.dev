import { Lottie } from '@/components/common';
import { useLottieAnimation } from '@/hooks';
import { cn } from '@/lib/utils';
import { WorkItemProps } from '@/types';

type WorkItemLinksProps = Pick<WorkItemProps, 'links'>;

export const WorkItemLinks = ({ links }: WorkItemLinksProps) => {
  const github = useLottieAnimation();
  const web = useLottieAnimation();

  const linkClassChange = cn(
    'transition-all duration-300 ease-out xl:pointer-events-none xl:invisible xl:opacity-0',
    'group-hover/work:xl:pointer-events-auto group-hover/work:xl:visible group-hover/work:xl:opacity-100',
  );

  return (
    <div className="mt-2.5 flex min-h-[35px] items-center gap-2">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          onMouseEnter={github.play}
          onMouseLeave={github.stop}
          className={linkClassChange}
          rel="noreferrer"
        >
          <Lottie lottieRef={github.ref} iconName="source" />
        </a>
      )}

      {links.web && (
        <a
          href={links.web}
          target="_blank"
          onMouseEnter={web.play}
          onMouseLeave={web.stop}
          className={linkClassChange}
          rel="noreferrer"
        >
          <Lottie lottieRef={web.ref} iconName="copy-link" />
        </a>
      )}
    </div>
  );
};
