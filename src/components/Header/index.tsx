import { defaultTheme } from "../../styles/themes/default";

import {
  ActionsContainer,
  Location,
  Header as HeaderComponent,
  Cart,
  Counter,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";

export const Header = () => {
  const { cart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("cart", cart);
  }, []);

  return (
    <HeaderComponent>
      <img
        style={{ cursor: "pointer" }}
        src="/images/logo.svg"
        alt={
          'Logo com um ícone roxo de copo de café com um foguete dentro e o texto "Coffee Delivery" ao lado, em preto.'
        }
        onClick={() => navigate("/")}
      />

      <ActionsContainer>
        <Location>
          <MapPin size={22} color={defaultTheme.product["purple-500"]} />

          <span>Porto Alegre, RS</span>
        </Location>

        <Cart onClick={() => navigate("/checkout")}>
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme.product["yellow-900"]}
          />

          {cart?.length > 0 && <Counter>{cart.length}</Counter>}
        </Cart>
      </ActionsContainer>
    </HeaderComponent>
  );
};
