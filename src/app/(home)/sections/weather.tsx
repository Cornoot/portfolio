import Image from "@/components/image";
import Link from "@/components/navigation/link";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Weather = () => (
  <section id="weather-app" className="py-18">
    <div className="flex flex-col gap-[72px] border-t border-gray-200 py-10 tablet-sm:flex-row tablet-sm:items-center">
      <div className="flex shrink-0 flex-col items-start tablet-sm:w-[454px]">
        <Title as="h3" size="2xl" className="mb-2">
          Some weird clouds, and a lot of if/else
        </Title>
        <Text weight="medium" color="gray/200" className="mb-6">
          This started as a small side project. Just to see if I can read out a openweathermap API and use it to recall
          a random quote from a java library. It worked! Now it&apos;s always in tinkering mode
        </Text>
        <Link variant="secondary" label="Read More" href="/" showIcon />
      </div>
      <Image src="/images/weather-app.webp" alt="Weather App" className="h-[434px] w-full rounded-3xl object-cover" />
    </div>
  </section>
);

export default Weather;
