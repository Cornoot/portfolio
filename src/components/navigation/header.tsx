import Link from "next/link";
import NavLink from "./navLink";
import InitialIcon from "../icons/initialIcon";

const TopNav = () => (
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
          <NavLink href="/work" label="Work" />
          <NavLink href="/about" label="About Me" />
          <NavLink href="/contact" label="Contact" />
        </ul>
      </nav>
    </div>
  </header>
);

export default TopNav;
