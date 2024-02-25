import Image from "@/components/image";

const Gallery = () => (
  <section id="gallery" className="flex flex-col gap-6 pb-18 pt-10 tablet:flex-row">
    <Image
      src="/images/personal/with-brother.webp"
      alt="Me and my twin brother"
      priority
      className="h-[411px] w-full shrink-0 rounded-3xl object-cover object-center tablet:w-[416px] tablet:rounded-l-3xl tablet:rounded-r-none"
    />
    <Image
      src="/images/personal/with-band-concert.webp"
      alt="Performing with my band, Crashing Bats"
      priority
      className="h-[411px] w-full overflow-hidden rounded-2xl object-cover tablet:rounded-none"
    />
    <Image
      src="/images/personal/iceland.webp"
      alt="Trip to Iceland"
      priority
      className="h-[411px] w-full shrink-0 rounded-2xl object-cover object-right tablet:w-[416px] tablet:rounded-l-none tablet:rounded-r-3xl"
    />
  </section>
);

export default Gallery;
