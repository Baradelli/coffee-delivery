import { ComponentPropsWithRef } from "react";
import { Container, ErrorMessage, Input as InputComponent } from "./styles";
import { FieldError } from "react-hook-form";

type InputProps = ComponentPropsWithRef<"input"> & {
  error?: FieldError;
};

export const Input = ({ error, ...rest }: InputProps) => {
  return (
    <Container>
      <InputComponent {...rest} />

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Container>
  );
};
