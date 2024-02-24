import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Define = () => (
  <section id="define" className="mx-auto max-w-[856px] space-y-10 py-12 tablet-sm:py-18">
    <div>
      <Title as="h2" size="3xl" className="mb-1">
        Define
      </Title>
      <Text color="gray/200">
        Converging the concerns and pain points of our users into insight statement cards. Keeping stakeholders in check
        and managing expectations, internally in MoreApp and externally with our users.
      </Text>
    </div>
    <div>
      <Title as="h3" size="lg" className="mb-2">
        Synthesizing results
      </Title>
      <Text color="gray/200">From these interviews, the most common frustration, pain points and needs were:</Text>
    </div>
    <Image
      src="/images/case-studies/ux-research/user-research-cards.webp"
      alt="Most common frustration, pain points, and needs from the user"
      className="w-full"
    />
    <Image
      src="/images/case-studies/ux-research/user-research-cards-2.webp"
      alt="Most common interactions with the MoreApp form-builder"
      className="w-full"
    />
    <div>
      <Text>
        What we derived from this information was that the product in the current state was actually “good enough” for
        most. Even one user went so far in their interview they didn’t know how we could improve the product we’re
        researching. “It’s perfectly fine as it is”. Which felt odd, as the same user later complained about one or more
        features.
      </Text>
      <Text className="mt-6">
        The biggest need our users had was that they don’t want to spend too much time in our product. They’ve found the
        experience of making a form fine. They liked the feeling of seeing a form with their own logo on top, very neat.
        Furthermore, they also were very busy people, thus speed and time is of upmost importance.
      </Text>
    </div>
  </section>
);

export default Define;
