import Image from "@/components/image";
import Link from "@/components/navigation/link";
import CaseStudyGrid from "@/components/pageSections/caseStudyGrid";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Home = () => (
  <main>
    <section className="my-auto grid grid-cols-1 place-items-center gap-x-24 gap-y-6 py-10 tablet:h-[780px] tablet:grid-cols-2 tablet:py-0">
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
    <Title as="h2" size="3xl" className="pt-18">
      Selected work
    </Title>
    <div className="mt-8 border-t border-gray-200 pb-18">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col items-start gap-[72px] py-4 tablet:flex-row tablet:items-center">
          <div className="max-w-[454px] shrink-0">
            <Title as="h3" size="2xl" className="mb-2">
              Ready for forms of the future?
            </Title>
            <Text weight="medium" color="gray/200">
              MoreApp, the application, is a tool for blue-collar workers to fill in forms on their job. These forms can
              be inspection forms, HR forms, declaration forms. You name it, you can fill it in with that app!
              <br />
              <br />
              The tool focus on replacing paper forms in the workplace with a digital tool. Less paper, means more app!
            </Text>
          </div>
          <Image
            src="/images/case-studies/moreapp/phones.webp"
            alt="Phones"
            className="h-[250px] w-full rounded-3xl object-cover tablet-sm:h-[434px]"
          />
        </div>
        <CaseStudyGrid />
      </div>
    </div>
    <div className="py-18">
      <div className="flex flex-col gap-[72px] border-t border-gray-200 py-10 tablet-sm:flex-row tablet-sm:items-center">
        <div className="flex shrink-0 flex-col items-start tablet-sm:w-[454px]">
          <Title as="h3" size="2xl" className="mb-2">
            Some weird clouds, and a lot of if/else
          </Title>
          <Text weight="medium" color="gray/200" className="mb-6">
            This started as a small side project. Just to see if I can read out a openweathermap API and use it to
            recall a random quote from a java library. It worked! Now it&apos;s always in tinkering mode
          </Text>
          <Link variant="secondary" label="Read More" href="/" showIcon />
        </div>
        <Image src="/images/weather-app.webp" alt="Weather App" className="h-[434px] w-full rounded-3xl object-cover" />
      </div>
    </div>
  </main>
);

export default Home;
