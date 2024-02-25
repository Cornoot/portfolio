import Image from "@/components/image";
import Link from "@/components/navigation/link";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const caseStudies = [
  {
    title: "MoreApp - Sending Digital Forms",
    image: "/images/case-studies/moreapp/thumbnail.webp",
    href: "/case-studies/moreapp",
  },
  {
    title: "Workspaces - Help users quickly switch between different accounts",
    image: "/images/case-studies/workspaces/thumbnail.webp",
    href: "/case-studies/workspaces",
  },
  {
    title: "Edit your form - MoreApp case study",
    image: "/images/case-studies/formbuilder-thumbnail.webp",
    href: "/case-studies/form-builder",
  },
];

const Work = () => (
  <section id="selected-work">
    <Title as="h2" size="3xl" className="pt-18">
      Selected work
    </Title>
    <div className="mt-8 border-t border-gray-200 pb-18">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col items-start gap-[72px] py-4 tablet:flex-row tablet:items-center">
          <div className="max-w-[454px] shrink-0">
            <Title as="h3" size="2xl" className="mb-2">
              Ready for forms of the future?
            </Title>
            <Text weight="medium" color="gray/200">
              MoreApp, the application, is a tool for blue-collar workers to fill in forms on their job. These forms can
              be inspection forms, HR forms, declaration forms. You name it, you can fill it in with that app!
              <br />
              <br />
              The tool focus on replacing paper forms in the workplace with a digital tool. Less paper, means more app!
            </Text>
          </div>
          <Image
            src="/images/case-studies/moreapp/phones.webp"
            alt="Phones"
            className="h-[250px] w-full rounded-3xl object-cover tablet-sm:h-[434px]"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 tablet-sm:grid-cols-2 tablet:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

type CaseStudyCardProps = { title: string; image: string; href: string };
const CaseStudyCard = ({ title, image, href }: CaseStudyCardProps) => (
  <div className="flex flex-col items-start gap-y-4">
    <div className="h-[215px] w-full">
      <Image src={image} alt="MoreApp application" className="h-full w-full rounded object-cover" />
    </div>
    <Title as="h4" size="2xl">
      {title}
    </Title>
    <Link variant="ghost" label="Read More" href={href} showIcon />
  </div>
);

export default Work;
