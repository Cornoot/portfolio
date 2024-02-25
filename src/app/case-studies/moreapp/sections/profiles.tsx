import Image from "@/components/image";
import Link from "@/components/navigation/link";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Profiles = () => (
  <section id="customer-profiles" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Combined customer profiles
      </Title>
      <Text weight="medium" color="gray/200">
        New Application
      </Text>
    </div>
    <div className="h-[250px] min-w-full rounded-lg bg-gray-700 mobile:h-[400px] tablet-sm:h-[769px]">
      <Image
        src="/images/case-studies/moreapp/workspaces.webp"
        alt="The desktop navigation of the new MoreApp application"
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
    <Text>
      Before this overhaul, all the forms of your profile were all dumped in one single overview. This means if you were
      connected to multiple accounts, you&apos;d have this endless list of information in front of you with barely any
      guidance of where to look or what to do first. No sorting method or anything was there so most of us were left to
      our own devices.
    </Text>
    <Text>
      How did we solve this in the new app? By introducing workspaces: a concept diverting all forms, tasks, and
      concepts per customer workspace. This will give shape to user profiles, and a clear distinction between different
      customers with the same user profile.
    </Text>
    <Link variant="ghost" label="Read more" href="/case-studies/workspaces" />
  </section>
);

export default Profiles;
