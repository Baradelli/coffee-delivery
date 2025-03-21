import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
  transition: background-color 0.3s;

  background-color: ${({ theme }) => theme.product["yellow-500"]};
  color: ${({ theme }) => theme.base.white};

  &:hover {
    background-color: ${({ theme }) => theme.product["yellow-900"]};
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  cursor: pointer;
  transition: background-color 0.3s;

  background-color: ${({ theme }) => theme.base.button};
  color: ${({ theme }) => theme.base.subtitle};

  &:hover {
    background-color: ${({ theme }) => theme.base.hover};
  }
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: background-color 0.3s;

  background-color: ${({ theme }) => theme.product["purple-900"]};
  color: ${({ theme }) => theme.base.subtitle};

  &:hover {
    background-color: ${({ theme }) => theme.product["purple-500"]};
  }
`;
