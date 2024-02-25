import Text from "@/components/typography/text";
import Title from "@/components/typography/title";

const Conclusion = () => (
  <section id="conclusion" className="mx-auto max-w-[856px] pt-18">
    <div className="mb-6 space-y-1 border-t border-gray-500 pt-11">
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
          Love your devs, especially when you are a junior product designer as you&apos;re learning and building your
          skills. Keep them close, and edit and redesign your designs together. Learn what does and doesn&apos;t work
          for a progressive web application. And use that as a starting point for your ideas. Don&apos;t forget to
          include support, marketing, sales and the PO as you&apos;re making big and important changes. This can help
          you a lot with getting to know the product and the roots of the company while at the same time establishing
          bonds with your coworkers.
        </Text>
      </div>
      <div className="space-y-1">
        <Title as="h3" size="xl" weight="bold">
          Read a lot
        </Title>
        <Text>
          Not just books or blogs, but you can also gather a lot of information from your peers or design friends. I
          read the classic book “Everyday Design of Things” by Don Norman, and I was completely hooked. It&apos;s now
          one of my staples I keep referring back to whenever I need to. Some blogs that helped me were: Bryan Lovin,
          and Nathan Curtis on Design System documentation and handover, refactoring the UI by Adam Whathan and Steve
          Schoger for basic principles for product design and many, many more.
        </Text>
      </div>
      <div className="space-y-1">
        <Title as="h3" size="xl" weight="bold">
          If you die today, design continues tomorrow
        </Title>
        <Text>
          Document everything you do. When I worked alone at the start at MoreApp I quickly wanted to scale up the way I
          was working. So I wrote down everything I did. Added padding to new elements in a design system? Wrote it
          down. Ideas? Wrote it down. Write it down. To get it out of your head, to show it to your fellow devs for
          inspiration and collaboration. By writing it down you can let your ideas see daylight and grow.
        </Text>
      </div>
    </div>
  </section>
);

export default Conclusion;
