type QuoteProps = {
  quote: string;
};

const Quote = ({ quote }: QuoteProps) => (
  <blockquote className="font-serif text-quote italic text-gray-300">{quote}</blockquote>
);

export default Quote;
