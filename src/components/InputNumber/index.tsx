import { useState } from "react";
import { Container, handleIconButton, Input } from "./styles";
import { Plus, Minus } from "phosphor-react";

export const InputNumber = () => {
  const [value, setValue] = useState(1);

  const PlusIcon = handleIconButton(Plus);
  const MinusIcon = handleIconButton(Minus);

  const onChangeValue = (e: string) => {
    const nE = Number(e);

    if (nE > 0 && nE < 100) setValue(Number(e));
  };

  const handleMinus = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handlePlus = () => {
    if (value < 99) {
      setValue(value + 1);
    }
  };

  return (
    <Container>
      <MinusIcon size={14} onClick={handleMinus} />

      <Input
        type="number"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />

      <PlusIcon size={14} onClick={handlePlus} />
    </Container>
  );
};
