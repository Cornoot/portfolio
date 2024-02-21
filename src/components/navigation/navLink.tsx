import clsx from "clsx";
import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
  active?: boolean;
  asAnchor?: boolean;
  className?: string;
};

const NavLink = ({ label, href, active, asAnchor, className }: NavLinkProps) => {
  const classes = clsx(
    "font-monument",
    active ? "text-blue-500" : "text-white hover:text-gray-200 active:text-gray-400",
    className,
  );

  const Tag = asAnchor ? "a" : Link;

  return (
    <li>
      <Tag href={href} className={classes}>
        {label}
      </Tag>
    </li>
  );
};

export default NavLink;
