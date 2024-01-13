import Image from "../image";
import Text from "../typography/text";
import Title from "../typography/title";

type TextNextToImageProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TextNextToImage = ({ title, description, image, alt }: TextNextToImageProps) => (
  <div className="grid grid-cols-1 gap-x-[134px] gap-y-6 tablet:grid-cols-2">
    <div className="flex flex-col items-start justify-center gap-y-1">
      <Title as="h3" size="lg">
        {title}
      </Title>
      <Text color="gray/300" className="pb-2">
        {description}
      </Text>
    </div>
    <Image
      src={image}
      alt={alt}
      className="h-[250px] w-full rounded object-cover tablet-sm:h-[413px] tablet:rounded-lg"
    />
  </div>
);

export default TextNextToImage;
