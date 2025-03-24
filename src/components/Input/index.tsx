import { ComponentPropsWithRef } from "react";
import { Input as InputComponent } from "./styles";

type InputProps = Omit<ComponentPropsWithRef<"input">, "type">;

export const Input = ({ ...rest }: InputProps) => {
  return <InputComponent {...rest} />;
};
