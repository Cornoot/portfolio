import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const data = {
  work: [
    {
      title: "MoreApp",
      subtitle: "UX/Product Designer, November 2021 - Recent",
      description:
        "Research, ideate, prototype, validate and design a web-app. Fitted for a new way of delivering a new form experience.",
    },
    {
      title: "We are you / iO",
      subtitle: "UX-designer, bachelor research project, 2019 - 2020",
      description:
        "At the start: working on wireframes and small designs for different companies. At the latter: research project for StayOkay",
    },
    {
      title: "Estate Digital",
      subtitle: "UX-designer, Internship, 2018 - 2019",
      description: "Learned the ropes about being a UX/Interaction Designer.",
    },
  ],
  education: [
    {
      title: "Hogeschool Utrecht",
      subtitle: "Master Data Driven Design, 2020 - 2021",
      description: "Master track with a focus on the data driven feedbackloop, how we can incorporate it in UX Design.",
    },
    {
      title: "Hogeschool Rotterdam",
      subtitle: "Communication and Multimedia Design, 2016 - 2020.",
      description: "Followed a Minor in UX and UI Design. Bachelor Thesis on group reservations.",
    },
    {
      title: "Grafisch Lyceum Rotterdam",
      subtitle: "Graphic Design and Webfrontend Development, 2012 - 2016",
      description: "Two courses in 4 years, from graphic design to webfrontend.",
    },
  ],
};

const CV = () => (
  <div className="py-18">
    <Title as="h2" size="4xl" className="mb-6">
      CV
    </Title>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 tablet-sm:grid-cols-2">
      <CVSection title="Work Experience" data={data.work} />
      <CVSection title="Education" data={data.education} />
    </div>
  </div>
);

type CVSectionProps = { title: string; data: CVItemProps[] };
const CVSection = ({ title, data }: CVSectionProps) => (
  <div>
    <Title as="h3" size="2xl" className="mb-6">
      {title}
    </Title>
    <div className="flex flex-col gap-y-16">
      {data.map((item, i) => (
        <CVItem key={i} title={item.title} subtitle={item.subtitle} description={item.description} />
      ))}
    </div>
  </div>
);

type CVItemProps = { title: string; subtitle: string; description: string };
const CVItem = ({ title, subtitle, description }: CVItemProps) => (
  <div className="space-y-1">
    <Title as="h4" size="lg">
      {title}
    </Title>
    <Text size="xl" color="gray/100" italic>
      {subtitle}
    </Text>
    <Text>{description}</Text>
  </div>
);

export default CV;
