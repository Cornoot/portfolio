import Image from "../image";
import Text from "../typography/text";
import Title from "../typography/title";

export type OverviewCardProps = {
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  meta: {
    title: string;
    items: string[];
    color?: "blue" | "gray";
  }[];
};

const OverviewCard = ({ title, subtitle, image, meta }: OverviewCardProps) => (
  <div className="flex w-full flex-col gap-y-6 rounded-3xl bg-gray-800 px-10 pb-10 pt-6">
    {image && (
      <div className="flex justify-center">
        <Image src={image.src} alt={image.alt} priority className={image.className} />
      </div>
    )}
    <div className="flex flex-col gap-6 pb-6 pr-6 tablet:flex-row">
      <div>
        <Text className="mb-1">{subtitle}</Text>
        <Title as="h2" size="3xl" className="font-monument tablet-sm:text-4xl">
          {title}
        </Title>
      </div>
      <div className="flex grow flex-wrap justify-start gap-12 tablet:flex-nowrap tablet:justify-end">
        {meta.map((item) => (
          <MetaList key={item.title} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const MetaList = ({ title, items, color }: { title: string; color?: "blue" | "gray"; items: string[] }) => (
  <div key={title}>
    <Title as="h3" size="2xl" className="mb-2">
      {title}
    </Title>
    <ul className={color === "blue" ? "text-blue-300" : "text-gray-100"}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default OverviewCard;
