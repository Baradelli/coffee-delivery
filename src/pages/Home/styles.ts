import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
      font-size: ${({ theme }) => theme.size.title.xl};
      font-weight: ${({ theme }) => theme.weight.extraBold};
      color: ${({ theme }) => theme.base.title};
    }

    .subtitle {
      font-size: ${({ theme }) => theme.size.text.l};
      font-weight: ${({ theme }) => theme.weight.regular};
      color: ${({ theme }) => theme.base.subtitle};
    }
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;

    margin-top: 4.125rem;

    .item {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .icon {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.base.white};
      }

      .text {
        font-size: ${({ theme }) => theme.size.text.m};
        font-weight: ${({ theme }) => theme.weight.regular};
        color: ${({ theme }) => theme.base.text};
      }
    }
  }
`;
