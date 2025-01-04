import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
import { GCList } from "../pages/Dashboard/GCList";
import { NearestGC } from "../pages/NearestGC";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encontrar-gc" element={<NearestGC />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="gcs" element={<GCList />} />
      </Route>
    </Routes>
  );
};
