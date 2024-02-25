import Image from "@/components/image";

const Showcase = () => (
  <section id="product-showcase" className="mx-auto flex flex-col gap-y-11 py-18">
    <Image src="/images/case-studies/moreapp/phones.webp" alt="" className="max-h-[624px] w-full object-contain" />
    <Image
      src="/images/case-studies/moreapp/apps-overview.webp"
      alt=""
      className="max-h-[624px] w-full object-contain"
    />
    <Image
      src="/images/case-studies/moreapp/phones-tilted.webp"
      alt=""
      className="max-h-[700px] w-full object-contain"
    />
  </section>
);

export default Showcase;
