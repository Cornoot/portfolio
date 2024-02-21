import OverviewCard, { type OverviewCardProps } from "@/components/cards/overviewCard";
import Image from "@/components/image";
import Link from "@/components/navigation/link";
import ProductTeamSection from "@/components/pageSections/productTeam";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";
import type { Metadata } from "next";
import data from "@/data/case-studies/workspaces.json";

export const metadata: Metadata = {
  title: "Workspaces Case Study",
};

const WorkspacesCaseStudy = () => (
  <main>
    <div className="flex flex-col items-start gap-y-8 py-18">
      <Link variant="ghost" label="Back to projects" href="/" />
      <div>
        <Title as="h1" size="3xl" className="mb-2 tablet-sm:text-4xl">
          {data.title}
        </Title>
        <Text size="2xl" weight="medium" color="gray/200">
          {data.description}
        </Text>
      </div>
      <OverviewCard {...(data.overview as OverviewCardProps)} />
    </div>
    <div className="mx-auto flex max-w-[856px] flex-col gap-y-10 py-18">
      <div>
        <Title as="h3" size="2xl" className="mb-4">
          Context about Account Switchers
        </Title>
        <Text color="gray/200">
          Starting this small project, I started to learn the context about our account switcher.
        </Text>
      </div>
      <div>
        <Title as="h4" size="lg" className="mb-2">
          Gaining Knowledge about our current situation
        </Title>
        <Text color="gray/200">
          {`Talking with our Customer Support and PO, I've quickly discoverd that our partners, or big customers, they have multiple accounts in one MoreApp Application.
          This issue was stored as a Feature Request on our backlog by our PO. Adding more context to this FR was needed to design solutions.`}
        </Text>
      </div>
      <div>
        <Title as="h4" size="lg" className="mb-2">
          Social Switchers
        </Title>
        <Text color="gray/200">
          With knowledge that our users mostly use social media outside our application, I quickly looked to industry
          standard switchers. Such as Instagram, Facebook and Outlook. I&apos;ve noticed that a list item or a drawer
          are most common practices for switching accounts.
        </Text>
      </div>
    </div>
    <div className="mx-auto flex max-w-[849px] flex-col gap-y-11 py-18">
      <div>
        <Title as="h2" size="3xl" className="mb-1">
          Switching Things Up
        </Title>
        <Text color="gray/200">
          Looking into these above mentioned solutions, I identified the affordances for our users that they need to be
          informed about:
        </Text>
        <ul className="list-inside list-disc text-gray-200">
          <li>
            Accounts are grouped under their name, an account number that has been assigned to an account is not
            relevant.
            <ul className="ml-8 list-inside list-disc -indent-4">
              <li>
                After release it turned out that we dropped this, as there were no issues coming into support regarding
                Customer ID&apos;s.
              </li>
            </ul>
          </li>
          <li>
            Added a space for profile pictures. This isn&apos;t an available feature at the moment, but may be added in
            the future in the editor environment.
          </li>
          <li>Available tasks or drafts are displayed underneath the account names, if they are any.</li>
        </ul>
      </div>
      <div>
        <Title as="h3" size="lg" className="mb-2">
          Iterating on design
        </Title>
        <Text color="gray/200">Starting out with the list item quickly transformed into the drawer.</Text>
      </div>
      <Image
        src="/images/case-studies/workspaces/iteration-1.webp"
        className="h-[250px] w-full object-cover mobile:h-[450px] tablet:h-[610px]"
        alt="Iterating on context menu's and drawers"
      />
      <Image
        src="/images/case-studies/workspaces/iteration-2.webp"
        className="h-[250px] w-full object-cover object-right mobile:h-[450px] tablet-sm:h-[530px] tablet:h-[610px]"
        alt="Iterating on profile squared within the drawer"
      />
      <Image
        src="/images/case-studies/workspaces/iteration-3.webp"
        className="h-[250px] w-full object-cover mobile:h-[450px] tablet-sm:h-[547px] tablet:h-[624px]"
        alt="Iterating on selecting a workspace within the drawer"
      />
    </div>
    <div className="mx-auto flex max-w-[861px] flex-col gap-y-11 py-18">
      <div>
        <Title as="h2" size="3xl" className="mb-1">
          Notifications and Switching Accounts.
        </Title>
        <Text>
          We quickly discovered that when a users receives a notification for another account, the app doesn&apos;t
          switch right away to the right context. So, as a result of this change in behaviour of our application we
          delved deeper into this problem.
        </Text>
      </div>
      <Image
        src="/images/case-studies/workspaces/flow-notifications.webp"
        className="h-full w-full"
        alt="Flowchart notifications"
      />
      <Text>
        We wanted to be really sure the user can automatically switch account when receiving a new notification. The
        endpoint should be that they can open the form in the right workspace when opening the notification.
      </Text>
      <Image
        src="/images/case-studies/workspaces/flowchart-notifications.webp"
        className="h-full w-full"
        alt="Push notification flow"
      />
    </div>
    <div className="mx-auto flex max-w-[856px] flex-col py-18">
      <div className="flex flex-col gap-y-6 border-y border-gray-200 py-11">
        <div>
          <Text className="mb-1">Project Conclusion</Text>
          <Title as="h2" size="2xl">
            Wrapping Up
          </Title>
        </div>
        <Text>
          After discussing all the changes that have been made with the flow of presenting notifications and workspaces
          to the rest of the product team. The account switcher has been implemented. Switching between multiple
          accounts in the app has never been easier. What I wanted to further explore is creating tasks for users in the
          form editor environment, however this was completely out of scope for this project. And therefore I&apos;ll
          revisit this on a later moment or in a new case study
        </Text>
      </div>
      <ProductTeamSection />
    </div>
  </main>
);

export default WorkspacesCaseStudy;
