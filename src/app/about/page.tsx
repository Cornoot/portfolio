import type { Metadata } from "next";
import Hero from "./sections/hero";
import Gallery from "./sections/gallery";
import CV from "./sections/cv";
import Job from "./sections/job";
import Hobbies from "./sections/hobbies";

export const metadata: Metadata = {
  title: "About me",
};

const About = () => (
  <main>
    <Hero />
    <Gallery />
    <Job />
    <Hobbies />
    <CV />
  </main>
);

export default About;
