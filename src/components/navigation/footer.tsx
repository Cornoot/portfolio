"use client";

import { usePathname } from "next/navigation";
import Text from "../typography/text";
import Title from "../typography/title";
import Link from "./link";
import NavLink from "./navLink";
import ProductTeam from "../pageSections/productTeam";

const Footer = () => {
  const path = usePathname();
  const showContactCTA = !path.includes("case-studies");
  const showProductTeamSection = path.includes("case-studies");

  const emailLink = "mailto:cornevandenboogert@hotmail.com";

  return (
    <footer>
      {showContactCTA && (
        <section id="contact" className="mb-[72px] tablet-sm:mb-[122px]">
          <Link variant="ghost" label="Get in touch" href={emailLink} showIcon />
          <Text color="gray/200" className="mt-4">
            You can currently find me in Rotterdam, where I work.
            <br />
            Want to work together? Have something Illustrated or need a bassline?
            <br />
            Hit me up on my socials
          </Text>
        </section>
      )}
      {showProductTeamSection && <ProductTeam />}
      <div className="pb-10 pt-18 tablet-sm:pb-0">
        <div className="flex flex-col justify-between gap-y-6 border-t border-blue-500 pb-8 pt-6 tablet:flex-row">
          <Title as="h3" size="lg">
            Corné van den Boogert
          </Title>
          <ul className="flex flex-wrap items-center gap-y-6">
            <NavLink href="https://www.linkedin.com/in/corne-van-den-boogert" label="LinkedIn" className="mr-3" />
            <NavLink href="https://www.instagram.com/cornoot/" label="Instagram" className="mx-3" />
            <NavLink href="https://x.com/Cornootje" label="Twitter/X" className="mx-3 hidden tablet-sm:inline" />
            <NavLink href="https://x.com/Cornootje" label="X" className="mx-3 inline tablet-sm:hidden" />
            <NavLink href={emailLink} label="Mail" className="ml-3" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
