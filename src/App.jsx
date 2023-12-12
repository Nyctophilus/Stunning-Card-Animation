import "./App.css";
import { useState } from "react";
import Card from "./Card";
import { cards_info } from "../data";

function App() {
  const [active, setActive] = useState(1);
  return (
    <main>
      {cards_info.map((card) => (
        <Card
          key={card.id}
          {...card}
          active={active}
          setActive={setActive}
        />
      ))}
    </main>
  );
}

export default App;
