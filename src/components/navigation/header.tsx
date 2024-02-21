"use client";

import Link from "next/link";
import NavLink from "./navLink";
import InitialIcon from "../icons/initialIcon";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const pathname = usePathname();

  return (
    <header className="pt-11 tablet:pt-8">
      <div className="flex flex-col justify-between gap-y-4 border-b border-blue-500 pb-4 tablet-sm:gap-y-8 tablet:flex-row tablet:items-center">
        <div className="flex items-center gap-x-2">
          <InitialIcon />
          <Link href="/" className="font-monument text-gray-100 tablet-sm:text-lg">
            Corné van den Boogert
          </Link>
        </div>
        <nav>
          <ul className="flex gap-x-6">
            <NavLink href="/" label="Work" active={pathname.includes("case-studies")} />
            <NavLink href="/about" label="About Me" active={pathname.includes("about")} />
            <NavLink href="#contact" label="Contact" asAnchor />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
