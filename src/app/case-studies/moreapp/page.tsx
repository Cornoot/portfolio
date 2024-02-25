import type { Metadata } from "next";
import Conclusion from "./sections/conclusion";
import Testimonial from "./sections/testimonial";
import Showcase from "./sections/showcase";
import Result from "./sections/result";
import Profiles from "./sections/profiles";
import NavigationDesktop from "./sections/navigation-desktop";
import NavigationMobile from "./sections/navigation-mobile";
import WCAG from "./sections/wcag";
import Colors from "./sections/colors";
import Goals from "./sections/goals";
import Expectations from "./sections/expectations";
import Background from "./sections/background";
import Hero from "./sections/hero";

export const metadata: Metadata = {
  title: "MoreApp Case Study",
};

const MoreAppCaseStudy = () => (
  <main>
    <Hero />
    <Background />
    <Expectations />
    <Goals />
    <Colors />
    <WCAG />
    <NavigationMobile />
    <NavigationDesktop />
    <Profiles />
    <Result />
    <Showcase />
    <Testimonial />
    <Conclusion />
  </main>
);

export default MoreAppCaseStudy;
