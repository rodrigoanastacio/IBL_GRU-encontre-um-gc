import { RiNotificationLine, RiUserLine } from "react-icons/ri";
// import { MobileMenu } from "../MobileMenu";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="c-dashboard-header">
      <div className="c-dashboard-header__content">
        {/* <MobileMenu /> */}
        <div className="c-dashboard-header__actions">
          <button
            className="c-dashboard-header__button"
            aria-label="Notificações"
          >
            <RiNotificationLine />
          </button>
          <button
            className="c-dashboard-header__button"
            aria-label="Perfil do usuário"
          >
            <RiUserLine />
          </button>
        </div>
      </div>
    </header>
  );
};
