import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Conclusion = () => (
  <section id="conclusion" className="mx-auto flex max-w-[856px] flex-col gap-y-6 pt-18">
    <div>
      <Text className="mb-1">Project Conclusion</Text>
      <Title as="h2" size="2xl">
        Wrapping Up
      </Title>
    </div>
    <Image
      src="/images/case-studies/workspaces/account-switcher-final.webp"
      alt="Final showcase of the account switcher"
      className="w-full"
    />
    <Image
      src="/images/case-studies/workspaces/account-switcher-final-2.webp"
      alt="Final showcase of the account switcher on a real mobile device"
      className="w-full"
    />
    <Text>
      After discussing all the changes that have been made with the flow of presenting notifications and workspaces to
      the rest of the product team. The account switcher has been implemented. Switching between multiple accounts in
      the app has never been easier.
    </Text>
    <Text>
      What I wanted to further explore is creating tasks for users in the form editor environment, however this was
      completely out of scope for this project. And therefore I&apos;ll revisit this on a later moment or in a new case
      study
    </Text>
  </section>
);

export default Conclusion;
