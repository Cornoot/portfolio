import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Background = () => (
  <section id="background-info" className="mx-auto max-w-[856px] py-18">
    <Title as="h3" size="2xl" className="mb-4">
      Filling in forms is something that used to be a long and boring process. But now, can be done with a single click.
    </Title>
    <Text weight="medium" color="gray/200">
      Filling in forms is an absolutely terribly tedious task. Row after row has to be filled in, looked up and thought
      about and nevermind all the things you have to remember. Oh, and are you sure all the files are complete? They're
      usually incredibly long and before we've passed the first paragraph, we're longing for it to be done so that we
      can finally send it. The old application of MoreApp needed some love in order for it to be completely up to date.
    </Text>
    <Text weight="medium" color="gray/200" className="mt-6">
      The application of MoreApp is a tool for hard working people who're pressed for time to fill in forms on the job.
      MoreApp has your back; from inspection forms, HR forms, declaration forms and many more. You name it, you can fill
      it in with our app! The tool focuses on replacing paper forms in the workplace with a something more manageable
      and environmentally friendly such as digital forms. Less paper, means more app!
    </Text>
  </section>
);

export default Background;
