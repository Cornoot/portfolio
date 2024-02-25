import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Notifications = () => (
  <section id="notifications" className="mx-auto flex max-w-[861px] flex-col gap-y-11 py-18">
    <div>
      <Title as="h2" size="3xl" className="mb-1">
        Notifications and Switching Accounts.
      </Title>
      <Text>
        We quickly discovered that when a users receives a notification for another account, the app doesn&apos;t switch
        right away to the right context. So, as a result of this change in behaviour of our application we delved deeper
        into this problem.
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
  </section>
);

export default Notifications;
