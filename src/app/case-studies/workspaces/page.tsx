import type { Metadata } from "next";
import Hero from "./sections/hero";
import AccountSwitchers from "./sections/account-switchers";
import DesignIteration from "./sections/design-iteration";
import Notifications from "./sections/notifications";
import Conclusion from "./sections/conclusion";

export const metadata: Metadata = {
  title: "Workspaces Case Study",
};

const WorkspacesCaseStudy = () => (
  <main>
    <Hero />
    <AccountSwitchers />
    <DesignIteration />
    <Notifications />
    <Conclusion />
  </main>
);

export default WorkspacesCaseStudy;
