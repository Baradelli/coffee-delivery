import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  width: 100%;

  section {
    h2 {
      font-size: ${({ theme }) => theme.size.title.l};
      font-weight: ${({ theme }) => theme.weight.bold};
      color: ${({ theme }) => theme.product["yellow-900"]};
    }

    span {
      font-size: ${({ theme }) => theme.size.text.l};
      font-weight: ${({ theme }) => theme.weight.regular};
      color: ${({ theme }) => theme.base.subtitle};
    }

    .order-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      margin-top: 2.5rem;
      padding: 2.5rem;

      border: 1px solid transparent;

      background: linear-gradient(
            ${({ theme }) => theme.base.background},
            ${({ theme }) => theme.base.background}
          )
          padding-box,
        linear-gradient(
            to right,
            ${({ theme }) => theme.product["yellow-500"]},
            ${({ theme }) => theme.product["purple-500"]}
          )
          border-box;

      .item {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            color: ${({ theme }) => theme.base.white};
            font-size: 1rem;
          }
        }

        p {
          font-size: ${({ theme }) => theme.size.text.m};
          font-weight: ${({ theme }) => theme.weight.regular};
          color: ${({ theme }) => theme.base.subtitle};
        }
      }
    }
  }
`;
