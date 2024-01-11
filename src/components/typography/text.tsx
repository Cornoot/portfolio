import clsx from "clsx";

type TextSize = "2xl" | "xl" | "default";
type TextColor = "white" | "gray/100" | "gray/200" | "gray/300" | "blue/300";
type TextWeight = "default" | "medium";

type TextProps = {
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  children: React.ReactNode;
};

const Text = ({ size = "default", color = "white", weight = "default", className, children }: TextProps) => {
  const classes = clsx("whitespace-pre-line", textSizes[size], textColors[color], textWeights[weight], className);

  return <p className={classes}>{children}</p>;
};

export default Text;

const textSizes: Record<TextSize, string> = {
  "2xl": "text-2xl",
  xl: "text-xl",
  default: "text-base",
};

const textColors: Record<TextColor, string> = {
  white: "text-white",
  "gray/100": "text-gray-100",
  "gray/200": "text-gray-200",
  "gray/300": "text-gray-300",
  "blue/300": "text-blue-300",
};

const textWeights: Record<TextWeight, string> = {
  default: "font-normal",
  medium: "font-medium",
};
