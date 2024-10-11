import { useState } from "react";
import Card from "./components/Card";
import { address } from "framer-motion/client";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "GC Alternativo",
      leaders: "Eufrasio e Elaine",
      contact: "11977589364",
      data: "Quinta",
      time: "21h",
      address: "Rua Dona Tecla, 230 - Jardim Flôr da Montanha",
      isOnline: true,
    },
    {
      id: 2,
      title: "GC Bela Vista",
      leaders: "Suzy e Pamela",
      contact: "11977738669",
      data: "Quinta",
      time: "20h",
      address: "Rua Laranjal, 87 - Jardim Bela Vista",
      isOnline: false,
    },
    {
      id: 3,
      title: "GC Centro I",
      leaders: "Paulo e Rosana",
      contact: "11967760016",
      data: "Quinta",
      time: "20h",
      address: "Avenida Antônio de Souza, 779 - Jardim Santa Francisca",
      isOnline: false,
    },
    {
      id: 4,
      title: "GC Centro II",
      leaders: "Emerson e Veruska",
      contact: "11947742157",
      data: "Quinta",
      time: "20h",
      address: "Avenida Antônio de Souza, 779 - Jardim Santa Francisca",
      isOnline: false,
    },
    {
      id: 5,
      title: "GC Centro III",
      leaders: "Odilon e Evelayne",
      contact: "11974476721",
      data: "Quinta",
      time: "20h",
      address: "Avenida Antônio de Souza, 779 - Jardim Santa Francisca",
      isOnline: false,
    },
    {
      id: 6,
      title: "GC Centro IV",
      leaders: "Reginaldo e Vera",
      contact: "11980330860",
      data: "Quinta",
      time: "20h",
      address: "Avenida Antônio de Souza, 779 - Jardim Santa Francisca",
      isOnline: false,
    },
    {
      id: 7,
      title: "GC Cumbica",
      leaders: "Ériton e Joyce",
      contact: "11994030417",
      data: "Quinta",
      time: "20h",
      address:
        "Av. Sargento da aeronaútica Plínio Fernandes Gonçalves, 1670 - APTO 42 Bloco 4 Fiumicino",
      isOnline: false,
    },
    {
      id: 8,
      title: "GC de Casais",
      leaders: "Marcelo e Andréia",
      contact: "11989285106",
      data: "Quinta",
      time: "20h",
      address: "Online",
      isOnline: true,
    },
  ];

  return (
    <div className="l-section">
      <div className="l-section__container">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            leaders={item.leaders}
            data={item.data}
            time={item.time}
            address={item.address}
            isOnline={item.isOnline}
            cta="Ver detalhes"
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
