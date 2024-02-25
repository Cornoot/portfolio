import Hero from "./sections/hero";
import Discover from "./sections/discover";
import Define from "./sections/define";
import HMW from "./sections/hmw";
import Insights from "./sections/insights";
import ProductClarity from "./sections/product-clarity";
import Conclusion from "./sections/conclusion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Research Case Study",
};

const UXResearchPage = () => (
  <main>
    <Hero />
    <Discover />
    <Define />
    <HMW />
    <Insights />
    <ProductClarity />
    <Conclusion />
  </main>
);

export default UXResearchPage;
