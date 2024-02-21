import Image from "../image";

type ImageGridProps = {
  priority?: boolean;
};

const ImageGrid = ({ priority }: ImageGridProps) => {
  const firstImageClasses =
    "h-[411px] w-full tablet:w-[416px] shrink-0 tablet:rounded-l-3xl tablet:rounded-r-none object-cover rounded-3xl object-center";
  const secondImageClasses = "h-[411px] w-full object-cover tablet:rounded-none rounded-2xl";
  const thirdImageClasses =
    "h-[411px] w-full tablet:w-[416px] shrink-0 tablet:rounded-r-3xl object-cover object-right rounded-2xl";

  return (
    <div className="flex flex-col gap-6 pb-18 pt-10 tablet:flex-row">
      <Image
        src="/images/personal/with-brother.webp"
        alt="Me and my twin brother"
        priority={priority}
        className={firstImageClasses}
      />
      <Image
        src="/images/personal/with-band-concert.webp"
        alt="Performing with my band, Crashing Bats"
        priority={priority}
        className={secondImageClasses}
      />
      <Image
        src="/images/personal/iceland.webp"
        alt="Trip to Iceland"
        priority={priority}
        className={thirdImageClasses}
      />
    </div>
  );
};

export default ImageGrid;
