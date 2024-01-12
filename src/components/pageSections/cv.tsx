import Text from "../typography/text";
import Title from "../typography/title";
import cvData from "../../data/cv.json";

const CV = () => (
  <div className="py-18">
    <Title as="h2" size="4xl" className="mb-6">
      CV
    </Title>
    <div className="grid grid-cols-1 gap-x-10 tablet-sm:grid-cols-2 tablet-sm:gap-x-6">
      <CVList title="Work Experience" data={cvData.work} />
      <CVList title="Education" data={cvData.education} />
    </div>
  </div>
);

type CVListProps = {
  title: string;
  data: CVListItemProps[];
};

const CVList = ({ title, data }: CVListProps) => (
  <div>
    <Title as="h3" size="2xl" className="mb-6">
      {title}
    </Title>
    <div className="flex flex-col gap-y-16">
      {data.map((item, i) => (
        <CVListItem key={i} title={item.title} subtitle={item.subtitle} description={item.description} />
      ))}
    </div>
  </div>
);

type CVListItemProps = {
  title: string;
  subtitle: string;
  description: string;
};

const CVListItem = ({ title, subtitle, description }: CVListItemProps) => (
  <div className="space-y-1">
    <Title as="h4" size="lg">
      {title}
    </Title>
    <Text size="xl" color="gray/100">
      {subtitle}
    </Text>
    <Text>{description}</Text>
  </div>
);

export default CV;
