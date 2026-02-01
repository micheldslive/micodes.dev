type WorkItemContentProps = {
  title: string;
  description?: string;
};

export const WorkItemContent = ({ title, description }: WorkItemContentProps) => (
  <>
    <p className="m-0 text-[18px] text-slate-800 dark:text-slate-50">{title}</p>
    <p className="m-0 leading-6 text-slate-500 dark:text-slate-400">{description}</p>
  </>
);
