import styled, { WebTarget } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.base.button};
`;

export const Input = styled.input`
  background-color: transparent;

  width: 100%;
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;

  border: none;

  appearance: textfield;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  color: ${({ theme }) => theme.base.title};
`;

export const handleIconButton = (Component: WebTarget) => styled(Component)`
  color: ${({ theme }) => theme.product["purple-500"]};

  cursor: pointer;
  transition: color 0.3s;

  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.product["purple-900"]};
  }
`;
