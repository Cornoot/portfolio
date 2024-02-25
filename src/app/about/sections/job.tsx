import Quote from "@/components/typography/quote";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Job = () => (
  <section id="job" className="grid grid-cols-1 gap-20 py-18 tablet:grid-cols-2">
    <Quote quote="Make difficult things easy, not easy things difficult" subText="A cheesy quote" />
    <div className="flex flex-col gap-20">
      <div>
        <Title as="h3" size="2xl" className="mb-4">
          Product Designer at MoreApp
        </Title>
        <Text color="gray/200">
          Do you design forms? That's a question I get a lot regarding my work at MoreApp. I always laugh at this,
          because I get the confusing.
        </Text>
        <Text color="gray/200" className="mt-6">
          No, I don't design forms. I design the tool that our users give them power to create and send forms.
        </Text>
        <Text color="gray/200" className="mt-6">
          Currently I'm starting to go from a “one man design team” to a fleshed out UX-team.
        </Text>
      </div>
      <div>
        <Title as="h3" size="2xl" className="mb-4">
          Not only busy with pixels
        </Title>
        <Text color="gray/200">
          Besides coming up with “the next big thing” for MoreApp, I’m also focusing on how to improve the current
          hand-off with our developers. This means intense sessions about our current components and screens.
        </Text>
      </div>
    </div>
  </section>
);

export default Job;
