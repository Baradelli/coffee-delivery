import styled from "styled-components";

export const Select = styled.input`
  padding: 1rem;
  border-radius: 0.625rem;

  color: ${({ theme }) => theme.base.text};
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.base.hover};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.product["purple-500"]};
  }
`;
