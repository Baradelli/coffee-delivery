import { ComponentPropsWithRef } from "react";

import { IconButton, PrimaryButton, SecondaryButton } from "./styles";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "icon";
}

export const Button = ({ variant = "primary", ...rest }: ButtonProps) => {
  const components = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    icon: IconButton,
  };

  const Component = components[variant];

  return <Component {...rest}>{rest.children}</Component>;
};
