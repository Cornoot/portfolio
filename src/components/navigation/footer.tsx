"use client";

import { usePathname } from "next/navigation";
import Text from "../typography/text";
import Title from "../typography/title";
import Link from "./link";
import NavLink from "./navLink";

const EMAIL_LINK = "mailto:cornevandenboogert@hotmail.com";

const Footer = () => {
  const path = usePathname();
  const showContactCTA = !path.includes("case-studies");
  const showProductTeamSection = path.includes("case-studies");

  return (
    <footer>
      {showContactCTA && <ContactSection />}
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
            <NavLink href={EMAIL_LINK} label="Mail" className="ml-3" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

const ContactSection = () => (
  <section id="contact" className="mb-[72px] tablet-sm:mb-[122px]">
    <Link variant="ghost" label="Get in touch" href={EMAIL_LINK} showIcon />
    <Text color="gray/200" className="mt-4">
      You can currently find me in Rotterdam, where I work. <br />
      Want to work together? Have something Illustrated or need a bassline? <br />
      Hit me up on my socials
    </Text>
  </section>
);

const productTeamMembers = [
  { name: "Corné", function: "UX/Product Designer" },
  { name: "Dirk-Jan", function: "CTO/Software Developer" },
  { name: "Maaike", function: "PO" },
  { name: "Maarten", function: "Software Developer" },
  { name: "Tomas", function: "Software Developer" },
  { name: "Ryan", function: "Software Developer" },
  { name: "Glenn", function: "QA Engineer" },
];
const ProductTeam = () => (
  <section id="product-team" className="mx-auto max-w-[856px] space-y-10 pt-12 tablet-sm:pt-18">
    <div className="border-t border-gray-500 py-11">
      <div className="mb-2">
        <Title as="h3" size="lg" className="mb-1">
          The product team
        </Title>
        <Text>
          You never make a product alone. It takes a designer to sketch out a wireframe, but a village to complete an
          app.
        </Text>
      </div>
      <ul className="list-inside list-disc text-white">
        {productTeamMembers.map((member) => (
          <li key={member.name}>
            {member.name} - {member.function}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Footer;
