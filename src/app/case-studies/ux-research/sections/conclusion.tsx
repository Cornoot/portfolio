import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Conclusion = () => (
  <section id="conclusion" className="mx-auto flex max-w-[856px] flex-col gap-y-6 pb-12 ">
    <div>
      <Title as="h2" size="3xl" className="mb-1">
        Wrapping up our research
      </Title>
      <Text>
        After 3 months of interviews, workshops and internal meetings we’ve reached the end of the research phase. Our
        users felt notable that we’ve come to them, and asked them about their experience. Some users were hesitant to
        share some insights beforehand. We’ve made sure that we want to hear their feedback to the fullest.
      </Text>
      <Text className="mt-6">The key takeaway from this research was:</Text>
    </div>
    <div>
      <Title as="h3" weight="bold" font="inter">
        Our users are quick
      </Title>
      <Text>
        Most users want to quickly design a form, they don’t want or need any hassle with ironing out certain details.
        Most forms are set up once, and slightly improved overtime. They rather start with something fresh instead of
        iterating on their current form.
      </Text>
    </div>
    <div>
      <Title as="h3" weight="bold" font="inter">
        Understanding needs from dev and users are key
      </Title>
      <Text>
        Reflecting on the process, we could’ve brought different stakeholders earlier into the fold of the process. I
        was very gate-keeping the first part of the process, because well, that’s just what UX-designers do. Right?
        Bringing in different departments earlier into the process means that they also gain more empathy for the end
        user of our product. This became apparent much later during a usability test with a user.
      </Text>
    </div>
    <div>
      <Title as="h3" weight="bold" font="inter">
        The design process is wacky
      </Title>
      <Text>
        I thought the double-diamond method would be a perfect framework for this project. Designing the right thing,
        designing things right. I thought this in combination with our agile work method would be a beautiful marriage.
        However, after our research and starting ideating. I’ve quickly noticed this project has become a waterfall
        project, with a dedicated “hand-off” phase.
      </Text>
    </div>
    <div>
      <Title as="h3" weight="bold" font="inter">
        Focus on requirements and MVP first, features comes next
      </Title>
      <Text>
        We started designing with users goals in mind. With the amount of work that comes with a CRUD operation on a
        high level, requirements for different parts of the product was a must. We discovered this after we were struck
        by feature and scope creep after a couple of months. Setting up and writing requirements meant hacking away at
        “fluff” in features and design.
      </Text>
    </div>
  </section>
);

export default Conclusion;
