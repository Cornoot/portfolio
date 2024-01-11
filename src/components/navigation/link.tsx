import clsx from "clsx";
import NextLink from "next/link";

type LinkProps = {
  variant: "primary" | "secondary" | "ghost";
  label: string;
  showIcon?: boolean;
  href: string;
};

const Link = ({ variant, label, showIcon, href }: LinkProps) => {
  const classes = clsx(
    "inline-flex h-10 min-w-0 max-w-full items-center gap-x-1 rounded-[40px] px-4 py-1 font-monument text-2xl",
    {
      "text-gray-900 bg-blue-500 hover:bg-blue-600 active:text-white active:bg-blue-900": variant === "primary",
      "text-gray-700 bg-white hover:bg-gray-100 active:text-white active:bg-blue-900": variant === "secondary",
      "text-white bg-transparent border-2 border-white hover:border-gray-300 active:bg-blue-900": variant === "ghost",
    },
  );

  return (
    <NextLink href={href} className={classes}>
      <span className="truncate">{label}</span>
      {showIcon && <ArrowIcon />}
    </NextLink>
  );
};

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M23.7377 8.92895L23.7377 7.42895L25.2377 7.42895L25.2377 8.92895L23.7377 8.92895ZM12.394 22.394L11.3333 23.4547L9.21198 21.3334L10.2726 20.2727L12.394 22.394ZM12.424 7.42895H23.7377L23.7377 10.4289H12.424L12.424 7.42895ZM25.2377 8.92895L25.2377 20.2427L22.2377 20.2427L22.2377 8.92895L25.2377 8.92895ZM24.7984 9.98961L12.394 22.394L10.2726 20.2727L22.6771 7.86829L24.7984 9.98961Z"
      fill="currentColor"
    />
  </svg>
);

export default Link;
