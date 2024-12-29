import { NavLink } from "react-router-dom";
import { RiDashboardLine, RiGroupLine, RiAddLine } from "react-icons/ri";
import "./styles.scss";

export const Sidebar = ({ isMobile, onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <aside className={`c-sidebar ${isMobile ? "c-sidebar--mobile" : ""}`}>
      {!isMobile && (
        <div className="c-sidebar__logo">
          <img src="/logo-gc.svg" alt="Logo GC" />
        </div>
      )}

      <nav className="c-sidebar__nav" role="navigation">
        <NavLink
          to="/dashboard"
          className="c-sidebar__link"
          end
          onClick={handleClick}
        >
          <RiDashboardLine aria-hidden="true" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/dashboard/gcs"
          className="c-sidebar__link"
          onClick={handleClick}
        >
          <RiGroupLine aria-hidden="true" />
          <span>GCs</span>
        </NavLink>
        <NavLink
          to="/dashboard/gcs/new"
          className="c-sidebar__link"
          onClick={handleClick}
        >
          <RiAddLine aria-hidden="true" />
          <span>Novo GC</span>
        </NavLink>
      </nav>
    </aside>
  );
};
