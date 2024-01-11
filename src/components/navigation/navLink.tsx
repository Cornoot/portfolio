"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  label: string;
  href: string;
  className?: string;
};

const NavLink = ({ label, href, className }: NavLinkProps) => {
  const pathname = usePathname();
  const active = pathname.includes(href);

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
