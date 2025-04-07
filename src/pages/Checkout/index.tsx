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
import { coffees } from "../../../data.json";
import { CoffeeCard } from "./components/CoffeeCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { z } from "zod";
import { useCart } from "../../hooks/useCart";
import { SubmitHandler, useForm } from "react-hook-form";
import { maskMoney } from "../../utils/mask-money";
import { Select } from "../../components/Select";
import { useEffect, useState } from "react";

type FormInputProps = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export default function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<OrderInfo["paymentMethod"]>("cash");

  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>({
    resolver: zodResolver(newOrder),
  });

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputProps> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    checkout({ ...data, paymentMethod: selectedPaymentMethod });
  };

  useEffect(() => {
    console.log({ errors });
  }, [errors]);

  return (
    <Container>
      <section>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <input
            type="hidden"
            value={selectedPaymentMethod}
            {...register("paymentMethod")}
          />

          <div className="card">
            <header>
              <MapPinLine
                size={22}
                color={defaultTheme.product["yellow-900"]}
              />

              <div className="texts">
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <form action="">
              <div className="zip">
                <Input
                  placeholder="CEP"
                  type="number"
                  error={errors.cep}
                  {...register("cep", { valueAsNumber: true })}
                />
              </div>

              <div className="street">
                <Input
                  placeholder="Rua"
                  error={errors.street}
                  {...register("street")}
                />
              </div>

              <div className="number-complement">
                <Input
                  placeholder="Número"
                  error={errors.number}
                  {...register("number")}
                />

                <Input
                  placeholder="Complemento"
                  error={errors.fullAddress}
                  {...register("fullAddress")}
                />
              </div>

              <div className="neighborhood-city-state">
                <Input
                  placeholder="Bairro"
                  error={errors.neighborhood}
                  {...register("neighborhood")}
                />

                <div className="city-state">
                  <Input
                    placeholder="Cidade"
                    error={errors.city}
                    {...register("city")}
                  />

                  <Input
                    placeholder="UF"
                    maxLength={2}
                    error={errors.state}
                    {...register("state")}
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div className="payment-form-container">
              <Select
                icon={<CreditCard />}
                label="Cartão de crédito"
                selected={selectedPaymentMethod === "credit"}
                onClick={() => setSelectedPaymentMethod("credit")}
              />
              <Select
                icon={<Bank />}
                label="cartão de débito"
                selected={selectedPaymentMethod === "debit"}
                onClick={() => setSelectedPaymentMethod("debit")}
              />
              <Select
                icon={<Money />}
                label="dinheiro"
                selected={selectedPaymentMethod === "cash"}
                onClick={() => setSelectedPaymentMethod("cash")}
              />
            </div>
          </div>
        </form>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div className="card custom-border-radius">
          {coffeesInCart.map((coffee) => (
            <>
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                handleItemDecrement={handleItemDecrement}
                handleItemIncrement={handleItemIncrement}
                handleItemRemove={handleItemRemove}
              />

              <div className="divider" />
            </>
          ))}

          <div className="summary-totals">
            <div className="item">
              <p>Total de itens</p>
              <p>R$ {maskMoney(totalItemsPrice)}</p>
            </div>

            <div className="item">
              <p>Entrega</p>
              <p>R$ {maskMoney(shippingPrice)}</p>
            </div>

            <div className="item">
              <strong>Total</strong>
              <strong>R$ {maskMoney(totalItemsPrice + shippingPrice)}</strong>
            </div>
          </div>

          <Button type="submit" form="order" variant="primary">
            Confirmar Pedido
          </Button>
        </div>
      </section>
    </Container>
  );
}
