import { FaWhatsapp } from "react-icons/fa";
import "./styles.scss";

export const Button = ({ link, label }) => {
  return (
    <a className="c-button c-button--whatsapp" href={link}>
      <FaWhatsapp />
      {label}
    </a>
  );
};
