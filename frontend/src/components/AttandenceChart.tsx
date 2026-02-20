"use client";

import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", present: 60, absent: 50 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 65, absent: 70 },
  { name: "Fri", present: 60, absent: 55 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;

  const present = payload.find((p: any) => p.dataKey === "present")?.value ?? 0;
  const absent = payload.find((p: any) => p.dataKey === "absent")?.value ?? 0;

  return (
    <div className="rounded-xl bg-white px-3 py-2 shadow-lg border border-gray-100">
      <div className="text-xs font-semibold text-gray-700 mb-1">{label}</div>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FAE27C" }} />
        Present: <span className="font-semibold text-gray-900">{present}</span>
      </div>
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-600">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#C3EBFA" }} />
        Absent: <span className="font-semibold text-gray-900">{absent}</span>
      </div>
    </div>
  );
};

const AttendanceChart = () => {
  // ✅ simple responsive rules (mobile vs desktop)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const barSize = isMobile ? 18 : 32;
  const barGap = isMobile ? 3 : 3;
  const barCategoryGap = isMobile ? 18 : 42;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Attendance</h1>
        <Image src="/images/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="mt-4 sm:mt-6 w-full h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: isMobile ? 6 : 10,
              left: isMobile ? 0 : 10,
              bottom: 0,
            }}
            barCategoryGap={barCategoryGap}
            barGap={barGap}
          >
            <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="4 6" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: isMobile ? 12 : 16 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#D1D5DB", fontSize: isMobile ? 12 : 14 }}
              width={isMobile ? 28 : 40} // ✅ save space on mobile
            />

            <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip />} />

            <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              wrapperStyle={{ paddingBottom: isMobile ? 16 : 40 }}
            />

            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              radius={[10, 10, 0, 0]}
              barSize={barSize}
              legendType="circle"
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              radius={[10, 10, 0, 0]}
              barSize={barSize}
              legendType="circle"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;