type DivSpaceProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const DivSpace = ({ children, ...props }: DivSpaceProps) => {
  return <div {...props}>{children}</div>;
};
