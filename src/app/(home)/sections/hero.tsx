import Image from "@/components/image";
import Link from "@/components/navigation/link";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Hero = () => (
  <section
    id="hero"
    className="my-auto grid grid-cols-1 place-items-center gap-x-24 gap-y-6 py-10 tablet:h-[780px] tablet:grid-cols-2 tablet:py-0"
  >
    <div className="flex flex-col items-start justify-center gap-y-6">
      <Text size="2xl" weight="medium">
        Howdy!
      </Text>
      <Title as="h1" size="5xl">
        I&apos;m Corné
      </Title>
      <Text color="gray/300" size="2xl" className="pb-2">
        Product designer, I love to solve problems with (bad) humour. I strive to solve complex problems to enable
        others to work efficiently. Get to know me and hear everything about my work and cats
      </Text>
      <Link variant="primary" label="About Me" href="/about" showIcon />
    </div>
    <div className="my-auto h-[370px] tablet-sm:h-[585px] tablet-sm:w-[426px]">
      <Image
        src="/images/personal/corné.webp"
        alt="Corné van den Boogert"
        priority
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
  </section>
);

export default Hero;
