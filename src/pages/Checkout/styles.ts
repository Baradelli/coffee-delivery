import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 100%;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .divider {
      border: 1px solid ${({ theme }) => theme.base.button};
      width: 100%;
    }

    h2 {
      font-size: ${({ theme }) => theme.size.title.xs};
      font-weight: ${({ theme }) => theme.weight.bold};
      color: ${({ theme }) => theme.base.subtitle};
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      background-color: ${({ theme }) => theme.base.card};
      border-radius: 6px;
      padding: 2.5rem;

      header {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        .texts {
          h3 {
            font-size: ${({ theme }) => theme.size.text.m};
            font-weight: ${({ theme }) => theme.weight.regular};
            color: ${({ theme }) => theme.base.subtitle};
          }

          p {
            font-size: ${({ theme }) => theme.size.text.s};
            font-weight: ${({ theme }) => theme.weight.regular};
            color: ${({ theme }) => theme.base.text};
          }
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .zip {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }

        .street {
          input {
            width: 100% !important;
          }
        }

        .number-complement {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0.75rem;
        }

        .neighborhood-city-state {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0.75rem;

          .city-state {
            display: flex;
            gap: 0.75rem;

            #city {
              width: 100%;
            }

            #state {
              max-width: 60px;
            }
          }
        }
      }

      .payment-form-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.75rem;
      }

      .summary-totals {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        p {
          font-size: ${({ theme }) => theme.size.text.s};
          font-weight: ${({ theme }) => theme.weight.regular};
          color: ${({ theme }) => theme.base.text};
        }

        strong {
          font-size: ${({ theme }) => theme.size.text.l};
          font-weight: ${({ theme }) => theme.weight.bold};
          color: ${({ theme }) => theme.base.subtitle};
        }
      }
    }

    .custom-border-radius {
      border-radius: 6px 35px 6px 35px;
    }
  }
`;
