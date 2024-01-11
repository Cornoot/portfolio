"use client";

import { usePathname } from "next/navigation";
import Text from "../typography/text";
import Title from "../typography/title";
import Link from "./link";
import NavLink from "./navLink";

const Footer = () => {
  const path = usePathname();
  const showContactCTA = !path.includes("case-studies");

  return (
    <footer className="pb-10 pt-18 tablet-sm:pb-0">
      {showContactCTA && (
        <div className="mb-[72px] tablet-sm:mb-[122px]">
          <Link variant="ghost" label="Get in touch" href="mailto:cornevandenboogert@hotmail.com " showIcon />
          <Text color="gray/200" className="mt-4">
            You can currently find me in Rotterdam, where I work.
            <br></br>
            Want to work together? Have something Illustrated or need a bassline?
            <br></br>
            Hit me up on my socials
          </Text>
        </div>
      )}
      <div className="flex flex-col justify-between gap-y-6 border-t border-blue-500 pb-8 pt-6 tablet:flex-row">
        <Title as="h3" size="lg">
          Corné van den Boogert
        </Title>
        <nav>
          <ul className="flex items-center gap-x-6">
            <NavLink href="https://www.linkedin.com/in/corne-van-den-boogert" label="LinkedIn" />
            <NavLink href="https://www.instagram.com/cornoot/" label="Instagram" />
            <NavLink href="https://x.com/Cornootje" label="Twitter/X" className="hidden tablet-sm:inline" />
            <NavLink href="https://x.com/Cornootje" label="X" className="inline tablet-sm:hidden" />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
