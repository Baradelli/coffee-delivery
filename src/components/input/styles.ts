import styled from "styled-components";

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.625rem;

  color: ${({ theme }) => theme.base.text};
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.base.label};
  }

  &:active,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.product["yellow-900"]};
  }
`;
