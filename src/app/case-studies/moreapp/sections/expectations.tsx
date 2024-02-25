import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Expectations = () => (
  <section id="expectations" className="flex flex-col items-center gap-y-11 py-18">
    <div className="flex max-w-[849px] flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Expectations to be met
      </Title>
      <Text weight="medium" color="gray/200">
        New Application
      </Text>
      <Text color="gray/200">
        A new and refreshing look, the old design was in line with Guidelines from 2015. Which is nice, but they are
        pretty outdated with today&apos;s standards
      </Text>
    </div>
    <Image
      src="/images/case-studies/moreapp/old-app.webp"
      alt="Overview of the old MoreApp application"
      className="h-[400px] w-full max-w-[1004px] object-cover tablet-sm:h-[555px]"
    />
  </section>
);

export default Expectations;
