import clsx from "clsx";

type TitleSize = "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "default";
export type TitleProps = {
  as: "h1" | "h2" | "h3" | "h4";
  size?: TitleSize;
  className?: string;
  children?: React.ReactNode;
};

const Title = ({ as, size = "default", className, children }: TitleProps) => {
  const Tag = as;
  const classes = clsx("font-monument text-white", textSizes[size], className);

  return <Tag className={classes}>{children}</Tag>;
};

export default Title;

const textSizes: Record<TitleSize, string> = {
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  default: "text-base",
};
