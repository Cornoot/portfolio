import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Discover = () => (
  <section id="discover" className="mx-auto max-w-[856px] space-y-10 py-12 tablet-sm:py-18">
    <div>
      <Title as="h2" size="3xl" className="mb-4">
        Discover
      </Title>
      <Text color="gray/200">
        Diverging into our problem space. We don’t know what our users except, and what could be their issues to begin
        with.
      </Text>
    </div>
    <div>
      <Title as="h3" size="lg" className="mb-2">
        Preliminary research
      </Title>
      <Text color="gray/200">
        To understand what the product is, we held internal interviews. Asking the senior developers, customer success
        and our product owner what they all knew about our product. And more important, what they thought the biggest
        pain points were regarding our users. Some insights gained from this process were small pain points (users want
        to see the preview of the form at all times) and big pain points (users are just going to ask for a completely
        new folder structure).
      </Text>
      <Text color="gray/200" className="mt-6">
        We’ve used these insights as a jumping off point for our further research.
      </Text>
    </div>
    <div>
      <Title as="h3" size="lg" className="mb-2">
        User Research
      </Title>
      <Text color="gray/200">
        Together with my UX-colleague, we opted for a research phase before even ideation started to explore different
        solutions. As we wanted to double down on the problem our current users experienced with our current product.
      </Text>
      <Text color="gray/200" className="mt-6">
        We’ve made a shortlist of our biggest (Dutch) clients and some smaller clients, got in contact and set up in
        person meetings to understand the context of our users. Together with the shortlist of the clients, we’ve set up
        some basic open-ended questions to understand their difficulties.
      </Text>
      <Text color="gray/200" className="mt-6">
        Some basic questions:
      </Text>
      <ul className="ml-6 list-inside list-disc -indent-4 text-gray-200">
        <li>
          What are you using our product for? What is your experience with this? What kind of difficulties are you
          encountering, and how do you try to find a workaround for those difficulties?
        </li>
      </ul>
    </div>
    <Image src="/images/case-studies/ux-research/interviews.webp" alt="" className="w-full" />
    <Text color="gray/200">
      We’ve ended up with 12 interviews. All real customers, more than happily share their thought on our product.
    </Text>
  </section>
);

export default Discover;
