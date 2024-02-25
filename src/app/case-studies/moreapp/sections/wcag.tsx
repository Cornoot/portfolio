import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const WCAG = () => (
  <section id="wcag" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Accessibility
      </Title>
      <Text weight="medium" color="gray/200">
        Colors
      </Text>
    </div>
    <Image
      src="/images/case-studies/moreapp/button-component.webp"
      alt="Our button component in Figma which meets the wcag guidelines"
      className="h-[250px] w-full object-cover tablet-sm:h-[400px] tablet:h-[424px]"
    />
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

export default WCAG;
