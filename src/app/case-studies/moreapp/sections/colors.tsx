import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Colors = () => (
  <section id="color-contrast" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Title as="h2" size="3xl">
        Accessibility
      </Title>
      <Text weight="medium" color="gray/200">
        Colors
      </Text>
    </div>
    <div className="flex h-full min-w-full flex-col items-center rounded-lg bg-gray-700 tablet-sm:max-h-[400px] tablet:max-h-[424px]">
      <Image
        src="/images/case-studies/moreapp/wcag-color-contrast.webp"
        alt="How we use the wcag guidelines to make our application accessible"
        className="h-full w-full object-cover"
      />
    </div>
    <Text>
      We want our product to be as accessible as possible. Meaning: we look into colour morphisms. Not just because our
      app should be accessible for people who are colour-blind, but we also have users who may have light sensitivities
      and other ocular difficulties. Whether in darker environments or in bright daylight, making sure our app is as
      visually friendly as possible is important to us.
    </Text>
  </section>
);

export default Colors;
