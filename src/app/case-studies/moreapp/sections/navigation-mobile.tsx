import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const NavigationMobile = () => (
  <section id="navigation-mobile" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Refined Navigation Mobile
      </Title>
      <Text weight="medium" color="gray/200">
        New Application
      </Text>
    </div>
    <div className="h-[250px] min-w-full rounded-lg bg-gray-700 tablet-sm:h-[424px]">
      <Image
        src="/images/case-studies/moreapp/mobile-nav.webp"
        alt="The mobile navigation of the new MoreApp application"
        className="h-full w-full object-contain"
      />
    </div>
    <Text>
      This translates even further in our product. Not only are the colors a high contrast. We&apos;ve also added extra
      “active” and “focus states” for our product. To really make sure that we are as accessible as possible.
      <br />
      <br />
      Many changes to our product are being checked by our QA engineer. Whom I have worked together with, to meet
      WCAG2.1 guidelines for the product.
    </Text>
  </section>
);

export default NavigationMobile;
