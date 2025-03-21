import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { defaultTheme } from "../../../styles/themes/default";

export const Intro = () => {
  return (
    <>
      <div style={{ maxWidth: 588 }}>
        <div className="title-container">
          <h1 className="title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="items">
          <div className="item">
            <div
              className="icon"
              style={{ backgroundColor: defaultTheme.product["yellow-900"] }}
            >
              <ShoppingCart weight="fill" size={16} />
            </div>
            <p className="text">Compra simples e segura</p>
          </div>

          <div className="item">
            <div
              className="icon"
              style={{ backgroundColor: defaultTheme.base.text }}
            >
              <Package weight="fill" size={16} />
            </div>
            <p className="text">Embalagem mantém o café intacto</p>
          </div>

          <div className="item">
            <div
              className="icon"
              style={{ backgroundColor: defaultTheme.product["yellow-500"] }}
            >
              <Timer weight="fill" size={16} />
            </div>
            <p className="text">Entrega rápida e rastreada</p>
          </div>

          <div className="item">
            <div
              className="icon"
              style={{ backgroundColor: defaultTheme.product["purple-500"] }}
            >
              <Coffee weight="fill" size={16} />
            </div>
            <p className="text">O café chega fresquinho até você</p>
          </div>
        </div>
      </div>

      <img src="/images/coffee-delivery.svg" alt="Café" />
    </>
  );
};
