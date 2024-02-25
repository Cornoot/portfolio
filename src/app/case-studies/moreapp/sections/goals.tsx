import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Goals = () => (
  <section id="goals" className="flex flex-col items-center gap-y-11 py-18">
    <div className="flex max-w-[856px] flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Goals of the project
      </Title>
      <Text weight="medium" color="gray/200">
        New Application
      </Text>
      <Text color="gray/200">
        All the information everywhere, all at once.
        <br />
        In the previous situation everything was saved locally. This means logging into one account on multiple devices.
        Forms were only stored on the device you&apos;re logged into. Not your account.
      </Text>
      <Text color="gray/200">
        A new and refreshing Dev-Stack. The current application was built on Angular JS. Which in 2023 is probably
        outdated.
      </Text>
    </div>
    <div className="rounded-lg bg-gray-700 p-10">
      <div className="max-w-[636px]">
        <Title as="h3" font="inter" weight="bold" color="gray/50" size="2xl">
          In short
        </Title>
        <Text color="gray/200" size="xl" className="italic">
          Our users are straightforward, it&apos;s a work application. It&apos;s not meant for entertainment, the goals
          of our users should be brought to completion quickly and swiftly. Therefore, general overview, hierarchy and
          time on tasks for our users are important to incorporate into the product design.
        </Text>
      </div>
    </div>
  </section>
);

export default Goals;
