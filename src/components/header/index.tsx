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

export const Header = () => {
  const [counter] = useState(0);

  return (
    <HeaderComponent>
      <img
        src="/images/logo.png"
        alt={
          'Logo com um ícone roxo de copo de café com um foguete dentro e o texto "Coffee Delivery" ao lado, em preto.'
        }
      />

      <ActionsContainer>
        <Location>
          <MapPin size={22} color={defaultTheme.product["purple-500"]} />

          <span>Porto Alegre, RS</span>
        </Location>

        <Cart>
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
