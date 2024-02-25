import Text from "./text";

type QuoteProps = {
  quote: string;
  subText?: string;
};

const Quote = ({ quote }: QuoteProps) => (
  <div className="text-center tablet-sm:text-left">
    <blockquote className="font-serif text-quote italic text-gray-300">{quote}</blockquote>
    <Text color="blue/300" className="mt-2">
      A cheesy quote
    </Text>
  </div>
);

export default Quote;
