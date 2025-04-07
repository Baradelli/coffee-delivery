import { Trash } from "phosphor-react";
import { ICoffee } from "../../../../@types/coffee";
import { Button } from "../../../../components/Button";
import { InputNumber } from "../../../../components/InputNumber";
import { Card } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import { maskMoney } from "../../../../utils/mask-money";

type CoffeeCardProps = {
  coffee: ICoffee & { quantity: number };
  handleItemIncrement: (itemId: string) => void;
  handleItemDecrement: (itemId: string) => void;
  handleItemRemove: (itemId: string) => void;
};

export const CoffeeCard = ({
  coffee,
  handleItemDecrement,
  handleItemIncrement,
  handleItemRemove,
}: CoffeeCardProps) => {
  return (
    <Card>
      <div className="info">
        <img src={coffee.image} alt={coffee.title} />

        <div className="detail">
          <h3 className="title">{coffee.title}</h3>

          <div className="actions">
            <InputNumber
              handleItemDecrement={() => handleItemDecrement(coffee.id)}
              handleItemIncrement={() => handleItemIncrement(coffee.id)}
              quantity={coffee.quantity}
            />

            <Button
              variant="secondary"
              onClick={() => handleItemRemove(coffee.id)}
            >
              <Trash size={16} color={defaultTheme.product["purple-500"]} />
              REMOVER
            </Button>
          </div>
        </div>

        <span className="price">R$ {maskMoney(coffee.price)}</span>
      </div>
    </Card>
  );
};
