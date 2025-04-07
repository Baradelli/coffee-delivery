import { ShoppingCart, Check } from "phosphor-react";
import { Button } from "../../../components/Button";
import { InputNumber } from "../../../components/InputNumber";
import { defaultTheme } from "../../../styles/themes/default";
import { maskMoney } from "../../../utils/mask-money";
import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";

interface CardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export const Card = (coffee: CardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

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
        <span className="price">R$ {maskMoney(coffee.price)}</span>

        <div className="actions">
          <InputNumber
            quantity={quantity}
            handleItemDecrement={decrementQuantity}
            handleItemIncrement={incrementQuantity}
          />

          <Button variant="icon" disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check weight="fill" size={22} color={defaultTheme.base.white} />
            ) : (
              <ShoppingCart
                weight="fill"
                size={22}
                color={defaultTheme.base.white}
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
