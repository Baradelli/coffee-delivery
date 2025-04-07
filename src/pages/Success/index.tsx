import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Container } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export default function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <Container>
      <section>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <div className="order-info custom-border-radius">
          <div className="item">
            <div
              className="icon"
              style={{ background: defaultTheme.product["purple-500"] }}
            >
              <MapPin weight="fill" />
            </div>

            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </p>
              <p>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
              </p>
            </div>
          </div>
          <div className="item">
            <div
              className="icon"
              style={{ background: defaultTheme.product["yellow-500"] }}
            >
              <Timer weight="fill" />
            </div>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </div>
          </div>

          <div className="item">
            <div
              className="icon"
              style={{ background: defaultTheme.product["yellow-900"] }}
            >
              <CurrencyDollar weight="fill" />
            </div>

            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <img src="/images/Illustration.svg" alt="" />
    </Container>
  );
}
