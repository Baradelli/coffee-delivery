import { useState } from "react";
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

export const Header = () => {
  const [counter] = useState(0);

  const navigate = useNavigate();

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

          {counter > 0 && <Counter>{counter}</Counter>}
        </Cart>
      </ActionsContainer>
    </HeaderComponent>
  );
};
