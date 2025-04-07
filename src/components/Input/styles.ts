import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.625rem;

  color: ${({ theme }) => theme.base.text};
  font-weight: 400;

  background-color: ${({ theme }) => theme.base.input};
  border: 1px solid ${({ theme }) => theme.base.button};

  &::placeholder {
    color: ${({ theme }) => theme.base.label};
  }

  &:active,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.product["yellow-900"]};
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.size.text.xs};
  font-weight: 400;
  color: red;
`;
