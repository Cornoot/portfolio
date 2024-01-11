import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

const Image = ({ src, alt, priority, className }: ImageProps) => (
  <NextImage src={src} alt={alt} sizes="100vw" width={0} height={0} priority={priority} className={className} />
);

export default Image;
