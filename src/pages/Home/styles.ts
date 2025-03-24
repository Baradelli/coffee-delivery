import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .intro-container {
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
  }

  .list-container {
    margin-top: 4rem;

    .title {
      font-size: ${({ theme }) => theme.size.title.l};
      font-weight: ${({ theme }) => theme.weight.extraBold};
      color: ${({ theme }) => theme.base.title};
    }

    .list {
      margin-top: 2rem;

      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      .card {
        position: relative;

        text-align: center;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1.25rem;
        border-radius: 6px 35px 6px 35px;

        background-color: ${({ theme }) => theme.base.card};

        .container-image {
          width: 120px;
          height: 80px;

          img {
            position: absolute;
            top: -1.25rem;
            left: 50%;
            transform: translateX(-50%);

            width: 120px;
            height: 120px;
          }
        }

        .tags {
          display: flex;
          gap: 0.25rem;

          align-items: center;
          justify-content: center;

          .tag {
            font-size: ${({ theme }) => theme.size.tag};
            font-weight: ${({ theme }) => theme.weight.bold};
            color: ${({ theme }) => theme.product["yellow-900"]};

            background-color: ${({ theme }) => theme.product["yellow-100"]};
            padding: 0.25rem 0.5rem;
            border-radius: 100px;

            text-transform: uppercase;
          }
        }

        h3 {
          font-size: ${({ theme }) => theme.size.title.s};
          font-weight: ${({ theme }) => theme.weight.bold};
          color: ${({ theme }) => theme.base.subtitle};
        }

        p {
          font-size: ${({ theme }) => theme.size.text.s};
          font-weight: ${({ theme }) => theme.weight.regular};
          color: ${({ theme }) => theme.base.label};
        }

        .buy {
          margin-top: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          white-space: nowrap;

          .price {
            font-size: ${({ theme }) => theme.size.text.l};
            font-weight: ${({ theme }) => theme.weight.bold};
            color: ${({ theme }) => theme.base.text};
            font-family: "Baloo 2", sans-serif;

            &::before {
              content: "R$ ";
              font-size: ${({ theme }) => theme.size.text.xs};
              font-weight: ${({ theme }) => theme.weight.regular};
              color: ${({ theme }) => theme.base.label};
              font-family: "Roboto", sans-serif;
            }
          }

          .actions {
            display: flex;
            gap: 0.5rem;
          }
        }
      }
    }
  }
`;
