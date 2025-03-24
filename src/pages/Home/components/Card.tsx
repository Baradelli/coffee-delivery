import { ShoppingCart } from "phosphor-react";
import { Button } from "../../../components/Button";
import { InputNumber } from "../../../components/InputNumber";
import { defaultTheme } from "../../../styles/themes/default";
import { maskMoney } from "../../../utils/mask-money";

interface CardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export const Card = (coffee: CardProps) => {
  return (
    <div className="card">
      <div className="container-image">
        <img src={coffee.image} alt={coffee.title} />
      </div>

      <div className="tags">
        {coffee.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>

      <div className="buy">
        <span className="price">{maskMoney(coffee.price)}</span>

        <div className="actions">
          <InputNumber />

          <Button variant="icon">
            <ShoppingCart
              weight="fill"
              size={22}
              color={defaultTheme.base.white}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
