import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Container } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import coffeeData from "../../../data.json";
import { CoffeeCard } from "./components/CoffeeCard";
import { Button } from "../../components/Button";

export default function Checkout() {
  return (
    <Container>
      <section>
        <h2>Complete seu pedido</h2>

        <div className="card">
          <header>
            <MapPinLine size={22} color={defaultTheme.product["yellow-900"]} />

            <div className="texts">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <form action="">
            <div className="zip">
              <Input id="zip" name="zip" placeholder="CEP" />
            </div>

            <div className="street">
              <Input
                id="street"
                name="street"
                placeholder="Rua"
                className="w-100"
              />
            </div>

            <div className="number-complement">
              <Input id="number" name="number" placeholder="Número" />

              <Input
                id="complement"
                name="complement"
                placeholder="Complemento"
              />
            </div>

            <div className="neighborhood-city-state">
              <Input
                id="neighborhood"
                name="neighborhood"
                placeholder="Bairro"
              />

              <div className="city-state">
                <Input id="city" name="city" placeholder="Cidade" />

                <Input
                  id="state"
                  name="state"
                  placeholder="UF"
                  max={2}
                  maxLength={2}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="card">
          <header>
            <CurrencyDollar
              size={22}
              color={defaultTheme.product["purple-500"]}
            />

            <div className="texts">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <div className="payment-form-container">
            <Select icon={<CreditCard />} label="Cartão de crédito" />
            <Select icon={<Bank />} label="cartão de débito" />
            <Select icon={<Money />} label="dinheiro" />
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div className="card custom-border-radius">
          {coffeeData.coffees
            .filter(({ id }) => id < 3)
            .map((coffee) => (
              <>
                <CoffeeCard key={coffee.id} {...coffee} />

                <div className="divider" />
              </>
            ))}

          <div className="summary-totals">
            <div className="item">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>

            <div className="item">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>

            <div className="item">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </div>

          <Button variant="primary">Confirmar Pedido</Button>
        </div>
      </section>
    </Container>
  );
}
