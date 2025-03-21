import { ComponentPropsWithRef } from "react";

import { Select as SelectComponent } from "./styles";

type SelectProps = Omit<ComponentPropsWithRef<"input">, "type">;

export const Select = ({ ...rest }: SelectProps) => {
  return (
    <SelectComponent {...rest} type="checkbox">
      {rest.children}
    </SelectComponent>
  );
};
