import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Hero = () => (
  <section id="hero" className="grid grid-cols-1 py-18 tablet-sm:grid-cols-2">
    <div className="flex flex-col items-start gap-y-4">
      <Title as="h1" size="5xl">
        About me
      </Title>
      <Text weight="medium" color="gray/200">
        I&apos;m a designer who loves to solves complex problems with (bad) humour, yes really trust me on this one. I
        work and live in and near Rotterdam, The Netherlands. I have 2+ years of experience as a product designer at
        MoreApp.
        <br />
        <br />
        Currently I&apos;m working on a great way to evolve the design team. Started out on my own, now focusing on
        making it scalable with multiple designers.
        <br />
        <br />I thrive in multi discipliner team situations, as my core philosophy on products is that it is a team
        effort. Therefore, you can&apos;t solve this alone.
      </Text>
      <div>
        <Title as="h2" size="2xl" className="mb-2">
          I love...
        </Title>
        <Text weight="medium" color="gray/200">
          Working on complex design systems. As I tinker in the design system Basket UI for MoreApp, and also developing
          a new design system together with our current Product Team. I love to strive with the whole team for an
          elegant solution in systems. Thus resulting in a good Design and Development cooperation in the product team.
          <br />
          <br />
          What I also love to do, is be creative in my free time. I play bassguitar, make illustrations, design posters
          for local bands and many more things I like to explore.
        </Text>
      </div>
    </div>
  </section>
);

export default Hero;
