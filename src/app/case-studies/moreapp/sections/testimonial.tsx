import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Testimonial = () => (
  <section id="testimonial" className="mx-auto flex max-w-[856px] flex-col items-center gap-6 py-18 tablet-sm:flex-row">
    <div className="flex flex-col gap-y-6">
      <Title as="h3" size="2xl">
        Testimonial
      </Title>
      <Text>
        “MoreApp is super intuitive and makes digitising processes so easy. Not only the setting up of the forms is
        effortless, but their use is so smooth that even our older, more conservative employees have been won over
        completely. MoreApp allows us to be very transparent within the organisation and offers great insight into the
        hundreds of forms and all data. I really am very satisfied!”
      </Text>
      <Text weight="medium">• Michel, customer MoreApp</Text>
    </div>
    <div className="h-[250px] w-[205px] shrink-0 mobile:h-[417px] mobile:w-[383px]">
      <Image src="/images/case-studies/moreapp/sent-form.webp" alt="" className="h-full w-full" />
    </div>
  </section>
);

export default Testimonial;
