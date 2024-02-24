import Text from "../typography/text";
import Title from "../typography/title";

type SummaryCardProps = {
  title: string;
  description: string;
};

const SummaryCard = ({ title, description }: SummaryCardProps) => (
  <div className="mt-11 max-w-[716px] rounded-lg bg-gray-700 p-10">
    <Title as="h3" font="inter" weight="bold" color="gray/50" size="2xl">
      {title}
    </Title>
    <Text color="gray/200" size="xl" className="italic">
      {description}
    </Text>
  </div>
);

export default SummaryCard;
