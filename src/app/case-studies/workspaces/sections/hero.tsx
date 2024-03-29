import Link from "@/components/navigation/link";
import CaseStudyOverviewCard from "@/components/overviewCard";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Hero = () => (
  <section id="hero" className="flex flex-col items-start gap-y-8 py-18">
    <Link variant="ghost" label="Back to projects" href="/" />
    <div>
      <Title as="h1" size="3xl" className="mb-2 tablet-sm:text-4xl">
        Workspaces - Help users quickly switch between different accounts, all in the same app.
      </Title>
      <Text size="2xl" weight="medium" color="gray/200">
        When working internally with our product, or our users with multiple accounts, they wanted a way to quickly see
        what accounts are logged into their MoreApp accounts. One of the challenges we faced during designing the app
        was adding “all user accounts” into the new application
      </Text>
    </div>
    <CaseStudyOverviewCard
      title="MoreApp"
      subtitle="Product Designer, at"
      image={{
        src: "/images/case-studies/workspaces/overview.webp",
        alt: "Workspaces",
        className: "h-[250px] w-full object-contain mobile:h-[410px] tablet-sm:h-[528px] tablet:h-[720px]",
      }}
      meta={[
        {
          title: "Responsibilities",
          items: ["Interaction Design", "User Interface Design", "Prototyping", "Design Systems"],
        },
        { title: "Platforms", color: "blue", items: ["iOS", "Android", "Web-application"] },
        {
          title: "Duration",
          items: ["1 sprint (2 weeks)", "Launched: 4th of July '23", "Complete roll out: 11th '23"],
        },
      ]}
    />
  </section>
);

export default Hero;
