import Link from "@/components/navigation/link";
import CaseStudyOverviewCard from "@/components/overviewCard";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Hero = () => (
  <section id="hero" className="flex flex-col items-start gap-y-8 py-18">
    <Link variant="ghost" label="Back to projects" href="/" />
    <div className="flex flex-col gap-y-2">
      <Title as="h1" size="3xl" className="tablet-sm:text-4xl">
        MoreApp - Sending Digital Forms
      </Title>
      <Text size="2xl" color="gray/100">
        The tool focus on replacing paper forms in the workplace with a digital tool.\nMoreApp, the application, is a
        tool for employee to fill in forms on their job. These forms can be inspection forms, HR forms, declaration
        forms. You name it, you can fill it in with that app!
      </Text>
    </div>
    <CaseStudyOverviewCard
      title="MoreApp"
      subtitle="Product Designer, at"
      image={{
        src: "/images/case-studies/moreapp/phones.webp",
        alt: "Workspaces",
        className: "h-[250px] w-full object-contain mobile:h-[400px] tablet-sm:h-[583px] tablet:h-[628px]",
      }}
      meta={[
        {
          title: "Responsibilities",
          items: ["Interaction Design", "User Interface Design", "Design System", "Stakeholder Management"],
        },
        { title: "Platforms", color: "blue", items: ["iOS", "Android", "Web-application"] },
        {
          title: "Duration",
          items: ["12 till 15 months.", "Launched: 4th of July '23", "Complete roll out: 11th '23"],
        },
      ]}
    />
  </section>
);

export default Hero;
