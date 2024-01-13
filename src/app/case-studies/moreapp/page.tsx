import OverviewCard, { type OverviewCardProps } from "@/components/cards/overviewCard";
import Image from "@/components/image";
import Link from "@/components/navigation/link";
import ProductTeamSection from "@/components/pageSections/productTeam";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";
import type { Metadata } from "next";
import data from "@/data/case-studies/moreapp.json";

export const metadata: Metadata = {
  title: "MoreApp Case Study",
};

const MoreAppCaseStudy = () => (
  <main>
    <div className="flex flex-col items-start gap-y-8 py-18">
      <Link variant="ghost" label="Back to projects" href="/" />
      <div className="flex flex-col gap-y-2">
        <Title as="h1" size="3xl" className="tablet-sm:text-4xl">
          {data.title}
        </Title>
        <Text size="2xl" weight="medium" color="gray/100" className="max-w-[648px]">
          {data.description}
        </Text>
        <Text color="gray/100" className="max-w-[648px]">
          {data.description}
        </Text>
      </div>
      <OverviewCard
        title={data.overview.title}
        subtitle={data.overview.subtitle}
        image={{
          ...data.overview.image,
          className: "h-[250px] w-full object-contain mobile:h-[410px] tablet-sm:h-[528px] tablet:h-[720px]",
        }}
        meta={data.overview.meta as OverviewCardProps["meta"]}
      />
    </div>
    <div className="mx-auto max-w-[856px] py-18">
      <Title as="h3" size="2xl" className="mb-4">
        Filling in forms is something that used to be a long and boring process. But now, can be done with a single
        click.
      </Title>
      <Text weight="medium" color="gray/200">
        Filling in forms is an absolutely terribly tedious task. Row after row has to be filled in, looked up and
        thought about and nevermind all the things you have to remember. Oh, and are you sure all the files are
        complete? They&apos;re usually incredibly long and before we&apos;ve passed the first paragraph, we&apos;re
        longing for it to be done so that we can finally send it. The old application of MoreApp needed some love in
        order for it to be completely up to date.
        <br />
        <br />
        The application of MoreApp is a tool for hard working people who&apos;re pressed for time to fill in forms on
        the job. MoreApp has your back; from inspection forms, HR forms, declaration forms and many more. You name it,
        you can fill it in with our app! The tool focuses on replacing paper forms in the workplace with a something
        more manageable and environmentally friendly such as digital forms. Less paper, means more app!
      </Text>
    </div>
    <div className="flex flex-col items-center gap-y-11 py-18">
      <div className="flex max-w-[849px] flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Expectations to be met
        </Title>
        <Text weight="medium" color="gray/200">
          New Application
        </Text>
        <Text color="gray/200">
          A new and refreshing look, the old design was in line with Guidelines from 2015. Which is nice, but they are
          pretty outdated with today&apos;s standards
        </Text>
      </div>
      <Image
        src="/images/case-studies/moreapp/old-app.png"
        alt="Overview of the old MoreApp application"
        className="h-[400px] w-full max-w-[1004px] object-cover tablet-sm:h-[555px]"
      />
    </div>
    <div className="flex flex-col items-center gap-y-11 py-18">
      <div className="flex max-w-[856px] flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Goals of the project
        </Title>
        <Text weight="medium" color="gray/200">
          New Application
        </Text>
        <Text color="gray/200">
          All the information everywhere, all at once.
          <br />
          In the previous situation everything was saved locally. This means logging into one account on multiple
          devices. Forms were only stored on the device you&apos;re logged into. Not your account.
        </Text>
        <Text color="gray/200">
          A new and refreshing Dev-Stack. The current application was built on Angular JS. Which in 2023 is probably
          outdated.
        </Text>
      </div>
      <div className="rounded-lg bg-gray-700 p-10">
        <div className="max-w-[636px]">
          <Title as="h3" font="inter" weight="bold" color="gray/50" size="2xl">
            In short
          </Title>
          <Text color="gray/200" size="xl" className="italic">
            Our users are straightforward, it&apos;s a work application. It&apos;s not meant for entertainment, the
            goals of our users should be brought to completion quickly and swiftly. Therefore, general overview,
            hierarchy and time on tasks for our users are important to incorporate into the product design.
          </Text>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Accessibility
        </Title>
        <Text weight="medium" color="gray/200">
          Colors
        </Text>
      </div>
      <div className="flex h-full min-w-full flex-col items-center rounded-lg bg-gray-700 tablet-sm:max-h-[400px] tablet:max-h-[424px]">
        <Image
          src="/images/case-studies/moreapp/wcag-color-contrast.png"
          alt="How we use the wcag guidelines to make our application accessible"
          className="h-full w-full object-cover"
        />
      </div>
      <Text>
        We want our product to be as accessible as possible. Meaning: we look into colour morphisms. Not just because
        our app should be accessible for people who are colour-blind, but we also have users who may have light
        sensitivities and other ocular difficulties. Whether in darker environments or in bright daylight, making sure
        our app is as visually friendly as possible is important to us.
      </Text>
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Accessibility
        </Title>
        <Text weight="medium" color="gray/200">
          Colors
        </Text>
      </div>
      <Image
        src="/images/case-studies/moreapp/button-component.png"
        alt="Our button component in Figma which meets the wcag guidelines"
        className="h-[250px] w-full object-cover tablet-sm:h-[400px] tablet:h-[424px]"
      />
      <Text>
        This translates even further in our product. Not only are the colors a high contrast. We&apos;ve also added
        extra “active” and “focus states” for our product. To really make sure that we are as accessible as possible.
        <br />
        <br />
        Many changes to our product are being checked by our QA engineer. Whom I have worked together with, to meet
        WCAG2.1 guidelines for the product.
      </Text>
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Refined Navigation Mobile
        </Title>
        <Text weight="medium" color="gray/200">
          New Application
        </Text>
      </div>
      <div className="h-[250px] min-w-full rounded-lg bg-gray-700 tablet-sm:h-[424px]">
        <Image
          src="/images/case-studies/moreapp/mobile-nav.png"
          alt="The mobile navigation of the new MoreApp application"
          className="h-full w-full object-contain"
        />
      </div>
      <Text>
        This translates even further in our product. Not only are the colors a high contrast. We&apos;ve also added
        extra “active” and “focus states” for our product. To really make sure that we are as accessible as possible.
        <br />
        <br />
        Many changes to our product are being checked by our QA engineer. Whom I have worked together with, to meet
        WCAG2.1 guidelines for the product.
      </Text>
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Refined Navigation Desktop
        </Title>
        <Text weight="medium" color="gray/200">
          New Application
        </Text>
      </div>
      <Image
        src="/images/case-studies/moreapp/app-desktop.png"
        alt="The desktop navigation of the new MoreApp application"
        className="h-full w-full rounded-lg"
      />
      <Text>
        The navigation on desktop is just as simple. Working from a port to its very own design. We&apos;ve used this
        design for desktop and tablet.
      </Text>
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Title as="h2" size="3xl">
          Combined customer profiles
        </Title>
        <Text weight="medium" color="gray/200">
          New Application
        </Text>
      </div>
      <div className="h-[250px] min-w-full rounded-lg bg-gray-700 mobile:h-[400px] tablet-sm:h-[769px]">
        <Image
          src="/images/case-studies/moreapp/workspaces.png"
          alt="The desktop navigation of the new MoreApp application"
          className="h-full w-full rounded-lg object-contain"
        />
      </div>
      <Text>
        Before this overhaul, all the forms of your profile were all dumped in one single overview. This means if you
        were connected to multiple accounts, you&apos;d have this endless list of information in front of you with
        barely any guidance of where to look or what to do first. No sorting method or anything was there so most of us
        were left to our own devices.
      </Text>
      <Text>
        How did we solve this in the new app? By introducing workspaces: a concept diverting all forms, tasks, and
        concepts per customer workspace. This will give shape to user profiles, and a clear distinction between
        different customers with the same user profile.
      </Text>
      <Link variant="ghost" label="Read more" href="/case-studies/workspaces" />
    </div>
    <div className="mx-auto max-w-[856px] space-y-11 py-18">
      <div className="flex flex-col gap-y-1">
        <Text weight="medium" color="gray/200">
          Project Conclusion
        </Text>
        <Title as="h3" size="2xl">
          Finishing up
        </Title>
      </div>
      <div className="grid grid-cols-1 gap-6 tablet-sm:grid-cols-2">
        <div>
          <div className="mb-6 flex justify-center bg-gray-700 pt-12">
            <Image
              src="/images/case-studies/moreapp/old-app-single.png"
              alt="The desktop navigation of the new MoreApp application"
              className="h-[490px] w-[270px] object-contain"
            />
          </div>
          <div>
            <Title as="h4" size="lg" className="mb-1">
              Before
            </Title>
            <Text color="gray/50">A clutter Material 2015 design that left more questions.</Text>
          </div>
        </div>
        <div>
          <div className="mb-6 flex justify-center bg-gray-400 pt-10">
            <Image
              src="/images/case-studies/moreapp/new-app-single.png"
              alt="The desktop navigation of the new MoreApp application"
              className="h-[500px] w-[232px] object-contain"
            />
          </div>
          <div>
            <Title as="h4" size="lg" className="mb-1">
              After
            </Title>
            <Text color="gray/50">
              A neatly organised interface that helps users find everything they need for their form filling
              experiences.
            </Text>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto flex flex-col gap-y-11 py-18">
      <Image src="/images/case-studies/moreapp/phones.png" alt="" className="max-h-[624px] w-full object-contain" />
      <Image
        src="/images/case-studies/moreapp/apps-overview.png"
        alt=""
        className="max-h-[624px] w-full object-contain"
      />
      <Image
        src="/images/case-studies/moreapp/phones-tilted.png"
        alt=""
        className="max-h-[700px] w-full object-contain"
      />
    </div>
    <div className="mx-auto flex max-w-[856px] flex-col items-center gap-6 py-18 tablet-sm:flex-row">
      <div className="flex flex-col gap-y-6">
        <Title as="h3" size="2xl">
          Testimonial
        </Title>
        <Text>
          “MoreApp is super intuitive and makes digitising processes so easy. Not only the setting up of the forms is
          effortless, but their use is so smooth that even our older, more conservative employees have been won over
          completely. MoreApp allows us to be very transparent within the organisation and offers great insight into the
          hundreds of forms and all data. I really am very satisfied!”
        </Text>
        <Text weight="medium">• Michel, customer MoreApp</Text>
      </div>
      <div className="h-[250px] w-[205px] shrink-0 mobile:h-[417px] mobile:w-[383px]">
        <Image src="/images/case-studies/moreapp/sent-form.png" alt="" className="h-full w-full" />
      </div>
    </div>
    <div className="mx-auto max-w-[856px] py-18">
      <div className="border-y border-gray-200 py-11">
        <div className="mb-6 space-y-1">
          <Text color="gray/200">Project Conclusion</Text>
          <Title as="h2" size="2xl">
            Lessons learned along the way
          </Title>
        </div>
        <div className="flex max-w-[768px] flex-col gap-y-5">
          <div className="space-y-1">
            <Title as="h3" size="xl" weight="bold">
              Developers are your friends
            </Title>
            <Text>
              Love your devs, especially when you are a junior product designer as you&apos;re learning and building
              your skills. Keep them close, and edit and redesign your designs together. Learn what does and
              doesn&apos;t work for a progressive web application. And use that as a starting point for your ideas.
              Don&apos;t forget to include support, marketing, sales and the PO as you&apos;re making big and important
              changes. This can help you a lot with getting to know the product and the roots of the company while at
              the same time establishing bonds with your coworkers.
            </Text>
          </div>
          <div className="space-y-1">
            <Title as="h3" size="xl" weight="bold">
              Read a lot
            </Title>
            <Text>
              Not just books or blogs, but you can also gather a lot of information from your peers or design friends. I
              read the classic book “Everyday Design of Things” by Don Norman, and I was completely hooked. It&apos;s
              now one of my staples I keep referring back to whenever I need to. Some blogs that helped me were: Bryan
              Lovin, and Nathan Curtis on Design System documentation and handover, refactoring the UI by Adam Whathan
              and Steve Schoger for basic principles for product design and many, many more.
            </Text>
          </div>
          <div className="space-y-1">
            <Title as="h3" size="xl" weight="bold">
              If you die today, design continues tomorrow
            </Title>
            <Text>
              Document everything you do. When I worked alone at the start at MoreApp I quickly wanted to scale up the
              way I was working. So I wrote down everything I did. Added padding to new elements in a design system?
              Wrote it down. Ideas? Wrote it down. Write it down. To get it out of your head, to show it to your fellow
              devs for inspiration and collaboration. By writing it down you can let your ideas see daylight and grow.
            </Text>
          </div>
        </div>
      </div>
      <ProductTeamSection />
    </div>
  </main>
);

export default MoreAppCaseStudy;
