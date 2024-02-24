import OverviewCard from "@/components/cards/overviewCard";
import Link from "@/components/navigation/link";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Hero = () => (
  <div className="flex flex-col items-start gap-y-8 py-12 tablet-sm:py-18">
    <Link variant="ghost" label="Back to projects" href="/" />
    <div>
      <Title as="h1" size="3xl" className="mb-2 tablet-sm:text-4xl">
        Understanding our Users for our core product: The Form editor dissected
      </Title>
      <Text size="2xl" weight="medium" color="gray/200">
        When you want to quickly gather data. One of the fastest ways to do this for your company is with a digital form
        that is specifically set to your needs. A form editor that you can use for every scenario that you encounter.
        The tool is global to use for many scenario’s. This is the biggest challenge we face with the Form Editor,
        understanding our varied target audience and understanding their needs for a digital form editor with logic and
        integrations baked into the experience. This could only mean one thing: scope creep.
      </Text>
    </div>
    <OverviewCard
      title="MoreApp"
      subtitle="Product Designer, at"
      meta={[
        { title: "Responsibilities", items: ["UX Research", "Stakeholder Management"] },
        { title: "Platforms", items: ["Currently not launched"], color: "blue" },
        { title: "Duration", items: ["3 months"] },
      ]}
    />
  </div>
);

export default Hero;
