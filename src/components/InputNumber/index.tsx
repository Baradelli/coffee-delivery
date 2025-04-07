import { Container, handleIconButton } from "./styles";
import { Plus, Minus } from "phosphor-react";

interface InputNumberProps {
  handleItemIncrement: () => void;
  handleItemDecrement: () => void;
  quantity: number;
}

export const InputNumber = ({
  handleItemDecrement,
  handleItemIncrement,
  quantity,
}: InputNumberProps) => {
  const PlusIcon = handleIconButton(Plus);
  const MinusIcon = handleIconButton(Minus);

  return (
    <Container>
      <MinusIcon size={22} onClick={handleItemDecrement} />

      <span>{quantity}</span>

      <PlusIcon size={22} onClick={handleItemIncrement} />
    </Container>
  );
};
