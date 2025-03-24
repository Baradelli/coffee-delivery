import { Container } from "./styles";

import { Intro } from "./components/Intro";

import coffeeData from "../../../data.json";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <Container>
      <Intro />

      <div className="list-container">
        <h2 className="title">Nossos cafés</h2>

        <div className="list">
          {coffeeData.coffees.map((coffee) => (
            <Card key={coffee.id} {...coffee} />
          ))}
        </div>
      </div>
    </Container>
  );
}
