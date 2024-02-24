import Image from "@/components/image";
import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const ProductClarity = () => (
  <section id="product-clarity" className="mx-auto max-w-[856px] space-y-10 pb-10 pt-12 tablet-sm:py-18">
    <div>
      <Title as="h2" size="3xl" className="mb-1">
        This is the part where its get hairy
      </Title>
      <Text>
        We’ve shared our insights with the whole team, and even our management layers. We’ve set up clear arguments to
        go with a “workflow structure tool” instead of our “Form editor Tool”. However, the initial idea was met with
        great enthusiasm, but further nit-picking the concept raised concerns with our CTO and Product Owner.
      </Text>
      <Text className="mt-6">
        Unmatching expectations. <br />
        We, from the UX-team, set up research to see what we wanted to improve about our product as a whole. However,
        from the perspective of our management layer. They were expecting a far off vision to executed over five years.
        They expected a complete new iteration of our current product. Something that was more in line with modern
        standards, but still is the same core product.
      </Text>
      <Text className="mt-6">
        To me, this felt jarring. As I was too focused on improving the complete UX as a whole, not focusing on
        iterating on our core product. However, after discussing this with our CTO and PO. We've come to a mutual
        agreement that for now it’s important to launch the new product ASAP. The current product runs on end of life
        code, which overtime becomes a very big security risk.
      </Text>
    </div>
    <div>
      <Title as="h3" size="lg" className="mb-2">
        From HMW to product clarity
      </Title>
      <Text>
        We now understood the problems our users encountered with our product, we also knew what direction to go with
        the ideas. We can structure this part of the process as:
      </Text>
    </div>
    <div>
      <Title as="h4" className="mb-1">
        Ideation
      </Title>
      <Text>
        Ideating new ideas into the same product felt like it was taking forever. I didn't know how to properly set up
        this process. So to involve our development team as quick as possible, I've set up a moment to let our work be
        seen and validated by our dev’s.
      </Text>
    </div>
    <div>
      <Title as="h4" className="mb-1">
        Platform Q&A’s
      </Title>
      <Text>
        Initially it were just white-boarding sessions with our CTO, who loves to toy with new ideas for the product,
        quickly became the place to share thoughts and ideas.
      </Text>
      <Text className="mt-6">
        The first sessions were in the afternoon, every last Friday of a sprint. The best place to ideate with a couple
        of beers and just let the imagination go. For us, this meant a way of validating our assumptions regarding
        product ideas. It was also a great way to learn the product we’re dissecting. To learn more about the priorities
        of our users, we’ve set up a new workshop.
      </Text>
    </div>
    <div>
      <Title as="h4" className="mb-1">
        Card Sorting, a way through the start of the process
      </Title>
      <Text>
        We understood our users to a level that we knew what they were like, what they prioritize in their work and what
        kind of apps they’re using in their free time. Understanding what our user prioritize in our core product? That
        was a big question for us. We knew designing forms fast was a priority.
      </Text>
      <Text className="mt-6">
        To understand what our users' priority in our product, we've set up Card sorting sessions. Understanding what
        and why helped us understand what to implement, and maybe what to remove from our product.
      </Text>
      <Text className="mt-6">We’ve set up the workshop as followed:</Text>
      <ul className="mt-6 flex list-inside list-disc flex-col gap-y-6 text-white">
        <li>
          Introduction <br />
          This was the moment the user could introduce themselves and tell about their selves and how they interacted
          with our product.
        </li>
        <li>
          Card sorting <br />
          Prioritize different features of our product. What do they use the most (top green) and what is something they
          never use, or just find utterly irritating to use (low red)?{" "}
        </li>
        <li>
          Site Map <br />
          Place different features together and group them with their own label.
          <div className="mb-4 mt-10 flex gap-x-4">
            <Image
              src="/images/case-studies/ux-research/functionalities-ordered.webp"
              alt=""
              className="w-full object-cover"
            />
            <Image
              src="/images/case-studies/ux-research/workflows.webp"
              alt=""
              className="w-full tablet-sm:w-[285px]"
            />
          </div>
        </li>
        <li>
          Form Flow <br />
          Last, we’ve asked our users to lay out the workflow of a form. So for example if a form has been filled in,
          through which department of the company does it go through, and how many people will see it? This was to
          reinvestigate our assumption about form usage, and what the process is of a form in a company.
        </li>
      </ul>
    </div>
  </section>
);

export default ProductClarity;
