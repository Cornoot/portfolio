import CV from "@/components/pageSections/cv";
import ImageGrid from "@/components/pageSections/imageGrid";
import TextNextToImage from "@/components/pageSections/textNextToImage";
import Quote from "@/components/typography/quote";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

const About = () => (
  <main>
    {/* FIXME: Grid doesn't match container size */}
    <div className="grid grid-cols-1 py-18 tablet-sm:grid-cols-2">
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
            Working on complex design systems. As I tinker in the design system Basket UI for MoreApp, and also
            developing a new design system together with our current Product Team. I love to strive with the whole team
            for an elegant solution in systems. Thus resulting in a good Design and Development cooperation in the
            product team.
            <br />
            <br />
            What I also love to do, is be creative in my free time. I play bassguitar, make illustrations, design
            posters for local bands and many more things I like to explore.
          </Text>
        </div>
      </div>
    </div>
    <ImageGrid priority />
    {/* TODO: Check with Corné */}
    <div className="grid grid-cols-1 gap-20 py-18 tablet:grid-cols-2">
      <div className="text-center tablet-sm:text-left">
        <Quote quote="Make difficult things easy, not easy things difficult" />
        <Text color="blue/300" className="mt-2">
          A cheesy quote
        </Text>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <Title as="h3" size="2xl" className="mb-4">
            Product Designer at MoreApp
          </Title>
          <Text color="gray/200">
            Do you design forms? That&apos;s a question I get a lot regarding my work at MoreApp. I always laugh at
            this, because I get the confusing.
            <br />
            <br />
            No, I don&apos;t design forms. I design the tool that our users give them power to create and send forms.
            <br />
            <br />
            Currently I&apos;m starting to go from a “one man design team” to a fleshed out UX-team.
          </Text>
        </div>
        <div>
          <Title as="h3" size="2xl" className="mb-4">
            More Copy Explaining stuff
          </Title>
          <Text color="gray/200">
            Do you design forms? That&apos;s a question I get a lot regarding my work at MoreApp. I always laugh at
            this, because I get the confusing.
            <br />
            <br />
            No, I don&apos;t design forms. I design the tool that our users give them power to create and send forms.
            <br />
            <br />
            Currently I&apos;m starting to go from a “one man design team” to a fleshed out UX-team.
          </Text>
        </div>
      </div>
    </div>
    <Title as="h2" size="3xl" className="pt-18">
      Side-Stuff
    </Title>
    <div className="flex flex-col gap-y-16 py-18">
      <TextNextToImage
        title="Illustrate, everything"
        description="During the everyday humdrum of live I love to sit down, put on some nice relaxing progressive metal and just enjoy the moment with my pencil.
            I mostly draw cats, as you guessed it, I love cats. I also tend to try out different things, as long as it intrigues my own interest and ✨ sparks joy ✨"
        image="/images/personal/drawing.png"
        alt="A part of my lego collection"
      />
      <TextNextToImage
        title="Need more fuzz with your fuzz?"
        description="Playing bass in a band from then Hague is really awesome. Especially adding more fuzz to one single bass
            line then your fuzzy wall can comprehend. Are you fan of any type of rock, alt-rock or just loud-rock? I've got you covered"
        image="/images/personal/with-band.png"
        alt="Group picture with my band"
      />
      <TextNextToImage
        title="Lego my ego"
        description="Playing bass in a band from then Hague is really awesome. Especially adding more fuzz to one single bass
            line then your fuzzy wall can comprehend. Are you fan of any type of rock, alt-rock or just loud-rock? I've got you covered"
        image="/images/personal/lego.jpg"
        alt="A part of my lego collection"
      />
    </div>
    <CV />
  </main>
);

export default About;
