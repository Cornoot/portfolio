import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Insights = () => (
  <section id="insights-sharing" className="mx-auto max-w-[856px] space-y-10 py-12 tablet-sm:py-18">
    <div>
      <Title as="h4" font="inter" weight="bold" className="mb-6">
        Sharing these insights
      </Title>
      <Text>
        Up until this point, this was all a two-man show. We didn’t share any insights up until this point. We shared
        some through company-wide updates. Others through smaller meetings with less overhead. The word got out very
        quickly that the “UX team were working on the next project” in the company, and some colleagues started
        messaging us through Slack and asking for some previews. Which we didn’t have at the time.
      </Text>
    </div>
    <Image
      src="/images/case-studies/ux-research/research-insights.webp"
      alt="Flowchart and Testimonial from a user who works at Wildlands Zoo"
      className="w-full"
    />
  </section>
);

export default Insights;
