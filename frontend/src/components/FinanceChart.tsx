"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3490, expense: 4300 },
  { name: "Sep", income: 3490, expense: 4300 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 3490, expense: 4300 },
  { name: "Dec", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Finance</h1>
        <Image src="/images/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="mt-4 w-full h-80 sm:h-95">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            {/* dashed grid like screenshot */}
            <CartesianGrid  stroke="#E5E7EB" strokeDasharray="4 6" />

            <XAxis
              dataKey="name"
               axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF"}}
              tickMargin={10}
            />

            <YAxis
               axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF"}}
              tickMargin={20}
            />

            {/* Tooltip (clean) */}
            <Tooltip
              cursor={{ stroke: "#E5E7EB", strokeDasharray: "4 6" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #F3F4F6",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
              labelStyle={{ fontWeight: 700, color: "#111827" }}
            />

            {/* Legend bottom-center like screenshot */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingTop: 16 }}
              formatter={(value) => (
                <span className="text-base font-medium capitalize">
                  {String(value)}
                </span>
              )}
            />

            {/* expense = green, income = purple (like screenshot) */}
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#C3EBFA"
              strokeWidth={5}
              dot={{ r: 4, strokeWidth: 2, fill: "white" }}
              
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#CFCEFF"
              strokeWidth={5}
              dot={{ r: 4, strokeWidth: 2, fill: "white" }}
             
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;