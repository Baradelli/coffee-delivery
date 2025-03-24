import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;

  margin-bottom: 2.5rem;
  max-width: 1120px;

  margin-inline: auto;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;

  font-size: ${({ theme }) => theme.size.text.s};
  font-weight: ${({ theme }) => theme.weight.regular};

  color: ${({ theme }) => theme.product["purple-900"]};
  background-color: ${({ theme }) => theme.product["purple-100"]};
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  background-color: ${({ theme }) => theme.product["yellow-100"]};
  border-radius: 0.5rem;

  padding-inline: 0.5rem;
`;

export const Counter = styled.span`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.product["yellow-900"]};
  color: ${({ theme }) => theme.base.white};

  font-size: ${({ theme }) => theme.size.text.s};
  font-weight: ${({ theme }) => theme.weight.bold};

  width: 1.25rem;
  height: 1.25rem;

  text-align: center;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
