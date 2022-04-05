import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="chart-container">
        <div className="bar-chart">
          <h2>BAR CHART</h2>
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#FF0000" />
            <Bar dataKey="revenue" fill="#000000" />
          </BarChart>
        </div>
        <div className="line-chart">
          <h2>LINE CHART</h2>
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#FF0000" />
            <Line type="monotone" dataKey="revenue" stroke="#000000" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
