import { useState } from "react";
import { motion } from "framer-motion";
import { items } from "../../../data/items";
// import { SearchFilter } from "../../../components/SearchFilter";
import "./styles.scss";

export const GCList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-gc-list">
      <h1 className="p-gc-list__title">Lista de GCs</h1>
      {/* <SearchFilter onFilterChange={setSearchTerm} /> */}

      <div className="p-gc-list__table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Líderes</th>
              {/* <th>Horário</th> */}
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td>{item.title}</td>
                <td>{item.leaders}</td>
                {/* <td>
                  {item.data} às {item.time}
                </td> */}
                <td>{item.isOnline ? "Online" : "Presencial"}</td>
                <td>
                  <button className="p-gc-list__button">Editar</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
