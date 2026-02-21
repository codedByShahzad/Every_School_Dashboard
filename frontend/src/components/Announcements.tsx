import React from "react";

const announcements = [
  {
    id: 1,
    title: "Mid-Term Exam Schedule Released",
    date: "2026-01-05",
    description:
      "The mid-term examination schedule for Grades 6–10 has been published. Students are advised to check the timetable and prepare accordingly.",
    color: "bg-skyLight",
  },
  {
    id: 2,
    title: "Annual Sports Day Registration Open",
    date: "2026-01-08",
    description:
      "Registration for the Annual Sports Day is now open. Students interested in participating must register before January 15.",
    color: "bg-yellowLight",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Announcement",
    date: "2026-01-10",
    description:
      "The quarterly Parent-Teacher meeting will be held on January 20 in the Main Conference Hall. Attendance is highly encouraged.",
    color: "bg-purpleLight",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-5 rounded-2xl ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg text-gray-800">
          Announcements
        </h1>
        <button className="text-sm text-gray-400 hover:text-gray-600 transition">
          View All
        </button>
      </div>

      {/* Announcement List */}
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className={`${item.color} p-4 rounded-xl `}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800 text-sm">
                {item.title}
              </h2>
              <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1 font-medium">
                {item.date}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;