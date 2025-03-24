import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    gap: 1rem;

    img {
      width: 64px;
      height: 64px;
    }

    .detail {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .title {
        font-size: ${({ theme }) => theme.size.text.m};
        font-weight: ${({ theme }) => theme.weight.regular};
        color: ${({ theme }) => theme.base.subtitle};
      }

      .actions {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  .price {
    font-size: ${({ theme }) => theme.size.text.m};
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.base.text};

    white-space: nowrap;
  }
`;
