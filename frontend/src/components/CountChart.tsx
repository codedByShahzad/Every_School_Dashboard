"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const BOYS_COUNT = 2234;
const GIRLS_COUNT = 1524;

const TOTAL = BOYS_COUNT + GIRLS_COUNT;

const BOYS_PERCENT = (BOYS_COUNT / TOTAL) * 100;
const GIRLS_PERCENT = (GIRLS_COUNT / TOTAL) * 100;

const data = [
  { name: "Girls", value: GIRLS_PERCENT, fill: "#FAE27C" },
  { name: "Boys", value: BOYS_PERCENT, fill: "#C3EBFA" },
];

const CountChart = () => {
  return (
    <div className="w-full h-full p-4 bg-white rounded-xl">
      <style jsx global>{`
        .recharts-wrapper:focus,
        .recharts-surface:focus {
          outline: none !important;
        }
      `}</style>

      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/images/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="95%"
            barSize={18}
            data={data}
            startAngle={90}
            endAngle={-270}   // full circle
          >
            {/* ✅ This is IMPORTANT */}
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}  // force 0–100 scale
              tick={false}
            />

            <RadialBar
              dataKey="value"
              background={{ fill: "#EEF2F7" }}
              cornerRadius={999}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center icon */}
        <Image
          src="/images/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16 mt-2">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full" style={{ background: "#C3EBFA" }} />
          <h1 className="font-bold">{BOYS_COUNT.toLocaleString()}</h1>
          <h2 className="text-xs text-gray-400 font-semibold">
            Boys ({BOYS_PERCENT.toFixed(0)}%)
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full" style={{ background: "#FAE27C" }} />
          <h1 className="font-bold">{GIRLS_COUNT.toLocaleString()}</h1>
          <h2 className="text-xs text-gray-400 font-semibold">
            Girls ({GIRLS_PERCENT.toFixed(0)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;