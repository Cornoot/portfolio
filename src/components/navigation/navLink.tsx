import clsx from "clsx";
import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
  active?: boolean;
  className?: string;
};

const NavLink = ({ label, href, active, className }: NavLinkProps) => {
  const classes = clsx(
    "font-monument",
    active ? "text-blue-500" : "text-white hover:text-gray-200 active:text-gray-400",
    className,
  );

  return (
    <li>
      <Link href={href} className={classes}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
