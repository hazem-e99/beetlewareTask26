import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

export function SpendOverviewCard({ data }) {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
          Spend Overview
        </h3>
        <div className="flex gap-1 sm:gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0 `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%" minHeight={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2C" />
          <XAxis
            dataKey="time"
            stroke="#666"
            tick={{
              fill: "#4F4F4F",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#666666"
            tick={{
              fill: "#4F4F4F",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1C",
              border: "1px solid #2A2A2C",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#14B8A6"
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

SpendOverviewCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};
