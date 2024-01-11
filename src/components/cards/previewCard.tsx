import Image from "../image";
import Link from "../navigation/link";
import Title from "../typography/title";

type PreviewCardProps = {
  title: string;
  image: string;
  href: string;
};

const PreviewCard = ({ title, image, href }: PreviewCardProps) => (
  <div className="flex flex-col items-start gap-y-4">
    <div className="h-[215px] w-full">
      <Image src={image} alt="MoreApp application" className="h-full w-full rounded object-cover" />
    </div>
    <Title as="h4" size="2xl">
      {title}
    </Title>
    <Link variant="ghost" label="Read More" href={href} showIcon />
  </div>
);

export default PreviewCard;
