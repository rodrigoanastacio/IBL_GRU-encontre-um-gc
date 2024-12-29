import { RiGroupLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./styles.scss";

const data = [
  { name: "Jan", total: 40 },
  { name: "Fev", total: 45 },
  { name: "Mar", total: 42 },
  { name: "Abr", total: 48 },
  { name: "Mai", total: 50 },
  { name: "Jun", total: 55 },
];

export const Dashboard = () => {
  return (
    <div className="p-dashboard">
      <h1 className="p-dashboard__title">Dashboard</h1>

      <div className="p-dashboard__stats">
        <div className="p-dashboard__stat-card">
          <div className="p-dashboard__stat-icon">
            <RiGroupLine />
          </div>
          <div className="p-dashboard__stat-info">
            <span>Total de GCs</span>
            <strong>42</strong>
          </div>
        </div>

        <div className="p-dashboard__stat-card">
          <div className="p-dashboard__stat-icon">
            <RiMapPinLine />
          </div>
          <div className="p-dashboard__stat-info">
            <span>GCs Presenciais</span>
            <strong>35</strong>
          </div>
        </div>

        <div className="p-dashboard__stat-card">
          <div className="p-dashboard__stat-icon">
            <RiTimeLine />
          </div>
          <div className="p-dashboard__stat-info">
            <span>GCs Online</span>
            <strong>7</strong>
          </div>
        </div>
      </div>

      <div className="p-dashboard__chart">
        <h2>Crescimento de GCs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#fece00"
              fill="#fece00"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
