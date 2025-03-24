import { ComponentPropsWithRef, ReactNode } from "react";

import { Select as SelectComponent } from "./styles";

type SelectProps = ComponentPropsWithRef<"button"> & {
  icon: ReactNode;
  label: string;
  selected?: boolean;
};

export const Select = ({ icon, label, selected, ...rest }: SelectProps) => {
  return (
    <SelectComponent {...rest} selected={Boolean(selected)}>
      {icon}
      {label}
    </SelectComponent>
  );
};
