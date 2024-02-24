import clsx from "clsx";

type TitleTag = "h1" | "h2" | "h3" | "h4";
type TitleSize = "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "default";
type TitleWeight = "normal" | "bold";
type TitleFont = "monument" | "inter";
type TitleColor = "white" | "gray/50";

export type TitleProps = {
  as: TitleTag;
  size?: TitleSize;
  color?: TitleColor;
  weight?: TitleWeight;
  font?: TitleFont;
  className?: string;
  children?: React.ReactNode;
};

const Title = ({
  as,
  size = "default",
  color = "white",
  weight = "normal",
  font = "monument",
  className,
  children,
}: TitleProps) => {
  const Tag = as;
  const classes = clsx(
    "break-words",
    titleSizes[size],
    titleColors[color],
    titleWeights[weight],
    titleFonts[font],
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Title;

const titleSizes: Record<TitleSize, string> = {
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  default: "text-base",
};

const titleColors: Record<TitleColor, string> = {
  white: "text-white",
  "gray/50": "text-gray-50",
};

const titleWeights: Record<TitleWeight, string> = {
  normal: "font-normal",
  bold: "font-bold",
};

const titleFonts: Record<TitleFont, string> = {
  monument: "font-monument",
  inter: "font-inter",
};
