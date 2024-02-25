import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const hobbies = [
  {
    title: "Illustrate, everything",
    description:
      "During the everyday humdrum of live I love to sit down, put on some nice relaxing progressive metal and just enjoy the moment with my pencil. I mostly draw cats, as you guessed it, I love cats. I also tend to try out different things, as long as it intrigues my own interest and ✨ sparks joy ✨",
    image: "/images/personal/drawing.webp",
    alt: "A nice drawing I made",
  },
  {
    title: "Need more fuzz with your fuzz?",
    description:
      "Playing bass in a band from then Hague is really awesome. Especially adding more fuzz to one single bass line then your fuzzy wall can comprehend. Are you fan of any type of rock, alt-rock or just loud-rock? I've got you covered",
    image: "/images/personal/with-band.webp",
    alt: "Group picture with my band",
  },
  {
    title: "Lego my ego",
    description:
      "Playing bass in a band from then Hague is really awesome. Especially adding more fuzz to one single bass line then your fuzzy wall can comprehend. Are you fan of any type of rock, alt-rock or just loud-rock? I've got you covered",
    image: "/images/personal/lego.webp",
    alt: "A part of my lego collection",
  },
];

const Hobbies = () => (
  <section id="hobbies">
    <Title as="h2" size="3xl" className="pt-18">
      Side-Stuff
    </Title>
    <div className="flex flex-col gap-y-16 py-18">
      {hobbies.map((hobby) => (
        <Hobby key={hobby.title} {...hobby} />
      ))}
    </div>
  </section>
);

type HobbyProps = { title: string; description: string; image: string; alt: string };
const Hobby = ({ title, description, image, alt }: HobbyProps) => (
  <div className="grid grid-cols-1 gap-x-[134px] gap-y-6 tablet:grid-cols-2">
    <div className="flex flex-col items-start justify-center gap-y-1">
      <Title as="h3" size="lg">
        {title}
      </Title>
      <Text color="gray/300" className="pb-2">
        {description}
      </Text>
    </div>
    <Image
      src={image}
      alt={alt}
      className="h-[250px] w-full rounded object-cover tablet-sm:h-[413px] tablet:rounded-lg"
    />
  </div>
);

export default Hobbies;
