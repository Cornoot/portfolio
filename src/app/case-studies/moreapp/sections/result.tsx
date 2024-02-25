import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Result = () => (
  <section id="result" className="mx-auto max-w-[856px] space-y-11 py-18">
    <div className="flex flex-col gap-y-1">
      <Text weight="medium" color="gray/200">
        Project Conclusion
      </Text>
      <Title as="h3" size="2xl">
        Finishing up
      </Title>
    </div>
    <div className="grid grid-cols-1 gap-6 tablet-sm:grid-cols-2">
      <div>
        <div className="mb-6 flex justify-center bg-gray-700 pt-12">
          <Image
            src="/images/case-studies/moreapp/old-app-single.webp"
            alt="The desktop navigation of the new MoreApp application"
            className="h-[490px] w-[270px] object-contain"
          />
        </div>
        <div>
          <Title as="h4" size="lg" className="mb-1">
            Before
          </Title>
          <Text color="gray/50">A clutter Material 2015 design that left more questions.</Text>
        </div>
      </div>
      <div>
        <div className="mb-6 flex justify-center bg-gray-400 pt-10">
          <Image
            src="/images/case-studies/moreapp/new-app-single.webp"
            alt="The desktop navigation of the new MoreApp application"
            className="h-[500px] w-[232px] object-contain"
          />
        </div>
        <div>
          <Title as="h4" size="lg" className="mb-1">
            After
          </Title>
          <Text color="gray/50">
            A neatly organised interface that helps users find everything they need for their form filling experiences.
          </Text>
        </div>
      </div>
    </div>
  </section>
);

export default Result;
