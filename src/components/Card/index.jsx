import { motion, AnimatePresence } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import iconGC from "../../assets/label-gc.svg";

import { Map } from "../Map";
import { Button } from "../Button";

import "./style.scss";

const Card = ({
  id,
  title,
  leaders,
  contact,
  data,
  time,
  address,
  addressDetails,
  isOnline,
  isCouple,
  cta,
  selectedId,
  setSelectedId,
}) => {
  const fullAddress = `${addressDetails.street}, ${addressDetails.number}, ${addressDetails.neighborhood}, ${addressDetails.city}`;

  // Montando o link do WhatsApp dinamicamente
  const whatsappLink = `https://api.whatsapp.com/send?phone=55${contact}&text=Ol%C3%A1%20${leaders},%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20${title}`;

  return (
    <>
      <motion.article
        layoutId={id}
        className="c-card"
        onClick={() => setSelectedId(id)}
      >
        <div className="c-card__label">
          {isOnline && <span className="label">Online</span>}
          {isCouple && <span className="label label--couple">Casal</span>}
        </div>
        <header className="c-card__header">
          <img src={iconGC} alt="Ícone que ilustra o GC" />
          <motion.h2 className="c-card__title">{title}</motion.h2>
        </header>
        <span>{cta}&rarr;</span>
        {/* <motion.p className="c-card__description">{body}</motion.p> */}
      </motion.article>

      <AnimatePresence>
        {selectedId === id && (
          <motion.div layoutId={id} className="c-card--expanded">
            <motion.div className="c-card--expanded-container">
              <div className="c-card--expanded-header">
                <img src={iconGC} alt="Ícone que ilustra o GC" />
                <div>
                  <h2>{title}</h2>
                  <small>
                    <strong>Liderança:</strong> {leaders}
                  </small>
                  <Button link={whatsappLink} label="Contato" />
                </div>
              </div>
              <p>
                <CiCalendarDate size={20} />
                {data} às {time}
              </p>
              <p>
                <TfiLocationPin size={20} />
                {isOnline ? "Online" : fullAddress}
              </p>

              {isOnline ? null : (
                <Map address={address} addressDetails={addressDetails} />
              )}

              <button
                className="close-btn"
                onClick={() => setSelectedId(null)} // Fecha o card ao clicar
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiCloseLargeFill size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
