import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const NewGC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    leaders: "",
    contact: "",
    data: "",
    time: "",
    isOnline: false,
    isCouple: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar o novo GC
    navigate("/dashboard/gcs");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="p-new-gc">
      <h1 className="p-new-gc__title">Novo GC</h1>

      <form onSubmit={handleSubmit} className="p-new-gc__form">
        <div className="p-new-gc__field">
          <label htmlFor="title">Nome do GC</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="p-new-gc__field">
          <label htmlFor="leaders">Líderes</label>
          <input
            type="text"
            id="leaders"
            name="leaders"
            value={formData.leaders}
            onChange={handleChange}
            required
          />
        </div>

        <div className="p-new-gc__field">
          <label htmlFor="contact">Contato</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="p-new-gc__row">
          <div className="p-new-gc__field">
            <label htmlFor="data">Dia</label>
            <select
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="Segunda">Segunda</option>
              <option value="Terça">Terça</option>
              <option value="Quarta">Quarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>
          </div>

          <div className="p-new-gc__field">
            <label htmlFor="time">Horário</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="p-new-gc__checkboxes">
          <label>
            <input
              type="checkbox"
              name="isOnline"
              checked={formData.isOnline}
              onChange={handleChange}
            />
            GC Online
          </label>

          <label>
            <input
              type="checkbox"
              name="isCouple"
              checked={formData.isCouple}
              onChange={handleChange}
            />
            GC de Casais
          </label>
        </div>

        <button type="submit" className="p-new-gc__submit">
          Criar GC
        </button>
      </form>
    </div>
  );
};
