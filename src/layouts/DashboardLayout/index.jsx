import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Dashboard/Sidebar";
import { Header } from "../../components/Dashboard/Header";
import "./styles.scss";

export const DashboardLayout = () => {
  return (
    <div className="l-dashboard">
      <Sidebar />
      <div className="l-dashboard__content">
        <Header />
        <main className="l-dashboard__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
