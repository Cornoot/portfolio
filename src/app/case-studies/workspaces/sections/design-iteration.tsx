import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const DesignIteration = () => (
  <section id="design-iteration" className="mx-auto flex max-w-[849px] flex-col gap-y-11 py-18">
    <div>
      <Title as="h2" size="3xl" className="mb-1">
        Switching Things Up
      </Title>
      <Text color="gray/200">
        Looking into these above mentioned solutions, I identified the affordances for our users that they need to be
        informed about:
      </Text>
      <ul className="list-inside list-disc text-gray-200">
        <li>
          Accounts are grouped under their name, an account number that has been assigned to an account is not relevant.
          <ul className="ml-8 list-inside list-disc -indent-4">
            <li>
              After release it turned out that we dropped this, as there were no issues coming into support regarding
              Customer ID&apos;s.
            </li>
          </ul>
        </li>
        <li>
          Added a space for profile pictures. This isn&apos;t an available feature at the moment, but may be added in
          the future in the editor environment.
        </li>
        <li>Available tasks or drafts are displayed underneath the account names, if they are any.</li>
      </ul>
    </div>
    <div>
      <Title as="h3" size="lg" className="mb-2">
        Iterating on design
      </Title>
      <Text color="gray/200">Starting out with the list item quickly transformed into the drawer.</Text>
    </div>
    <Image
      src="/images/case-studies/workspaces/iteration-1.webp"
      className="h-[250px] w-full object-cover mobile:h-[450px] tablet:h-[610px]"
      alt="Iterating on context menu's and drawers"
    />
    <Image
      src="/images/case-studies/workspaces/iteration-2.webp"
      className="h-[250px] w-full object-cover object-right mobile:h-[450px] tablet-sm:h-[530px] tablet:h-[610px]"
      alt="Iterating on profile squared within the drawer"
    />
    <Image
      src="/images/case-studies/workspaces/iteration-3.webp"
      className="h-[250px] w-full object-cover mobile:h-[450px] tablet-sm:h-[547px] tablet:h-[624px]"
      alt="Iterating on selecting a workspace within the drawer"
    />
  </section>
);

export default DesignIteration;
