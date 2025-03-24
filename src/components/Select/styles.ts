import styled, { css } from "styled-components";

interface SelectProps {
  selected: boolean;
}

export const Select = styled.button<SelectProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  text-transform: uppercase;
  cursor: pointer;

  padding: 1rem;
  border-radius: 0.625rem;

  font-size: ${({ theme }) => theme.size.button.m};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.base.text};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.base.hover};
  }

  ${({ selected }) =>
    selected &&
    css`
      outline: 1px solid ${({ theme }) => theme.product["purple-500"]};
      background-color: ${({ theme }) => theme.product["purple-100"]};
    `}

  &:focus {
    outline: 1px solid ${({ theme }) => theme.product["purple-500"]};
    background-color: ${({ theme }) => theme.product["purple-100"]};
  }

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.product["purple-500"]};
  }
`;
