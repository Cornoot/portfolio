import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const AccountSwitchers = () => (
  <section id="account-switchers" className="mx-auto flex max-w-[856px] flex-col gap-y-10 py-18">
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
        Talking with our Customer Support and PO, I've quickly discoverd that our partners, or big customers, they have
        multiple accounts in one MoreApp Application. <br /> This issue was stored as a Feature Request on our backlog
        by our PO. Adding more context to this FR was needed to design solutions.
      </Text>
    </div>
    <div>
      <Title as="h4" size="lg" className="mb-2">
        Social Switchers
      </Title>
      <Text color="gray/200">
        With knowledge that our users mostly use social media outside our application, I quickly looked to industry
        standard switchers. Such as Instagram, Facebook and Outlook. I&apos;ve noticed that a list item or a drawer are
        most common practices for switching accounts.
      </Text>
    </div>
  </section>
);

export default AccountSwitchers;
