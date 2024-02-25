import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const NavigationDesktop = () => (
  <section id="navigation-desktop" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Refined Navigation Desktop
      </Title>
      <Text weight="medium" color="gray/200">
        New Application
      </Text>
    </div>
    <Image
      src="/images/case-studies/moreapp/app-desktop.webp"
      alt="The desktop navigation of the new MoreApp application"
      className="h-full w-full rounded-lg"
    />
    <Text>
      The navigation on desktop is just as simple. Working from a port to its very own design. We&apos;ve used this
      design for desktop and tablet.
    </Text>
  </section>
);

export default NavigationDesktop;
