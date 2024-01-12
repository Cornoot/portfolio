import Text from "../typography/text";
import Title from "../typography/title";
import members from "../../data/product-team.json";

const ProductTeamSection = () => (
  <div className="py-11">
    <div className="mb-2">
      <Title as="h3" size="lg" className="mb-1">
        The product team
      </Title>
      <Text>
        You never make a product alone. It takes a designer to sketch out a wireframe, but a village to complete an app.
      </Text>
    </div>
    <ul className="list-inside list-disc text-white">
      {members.map((member) => (
        <li key={member.name}>
          {member.name} - {member.function}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductTeamSection;
