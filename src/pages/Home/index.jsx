import { useState } from "react";
import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { items } from "../../data/items";

export const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="l-section">
        <div className="l-section__container">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              {...item}
              cta="Ver detalhes"
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
