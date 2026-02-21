"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    time: "09:00 AM - 11:00 AM",
    location: "Conference Hall A",
    description:
      "Quarterly academic progress discussion between parents and teachers for Grade 8 students.",
    type: "meeting",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Science Exhibition",
    time: "12:00 PM - 03:00 PM",
    location: "Main Auditorium",
    description: "Students will showcase innovative science projects and experiments.",
    type: "event",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Football Practice",
    time: "03:30 PM - 05:00 PM",
    location: "School Ground",
    description: "After-school football training session for the senior team.",
    type: "sports",
    status: "scheduled",
  },
  {
    id: 4,
    title: "Staff Meeting",
    time: "01:00 PM - 02:00 PM",
    location: "Principal’s Office",
    description: "Monthly coordination meeting with department heads.",
    type: "internal",
    status: "ongoing",
  },
  {
    id: 5,
    title: "Mid-Term Exams Start",
    time: "08:30 AM - 11:30 AM",
    location: "All Examination Halls",
    description: "Mid-term examinations begin for Grades 6–10.",
    type: "exam",
    status: "important",
  },
];

const EventCalander = () => {
  const [value, onChange] = useState<Value>(new Date());

  const typeBadge = useMemo(
    () => ({
      meeting: "bg-sky-100 text-sky-700 border-sky-200",
      event: "bg-purple-100 text-purple-700 border-purple-200",
      sports: "bg-yellow-100 text-yellow-800 border-yellow-200",
      internal: "bg-slate-100 text-slate-700 border-slate-200",
      exam: "bg-rose-100 text-rose-700 border-rose-200",
    }),
    []
  );

  const statusBadge = useMemo(
    () => ({
      upcoming: "bg-emerald-50 text-emerald-700 border-emerald-200",
      scheduled: "bg-indigo-50 text-indigo-700 border-indigo-200",
      ongoing: "bg-amber-50 text-amber-700 border-amber-200",
      important: "bg-rose-50 text-rose-700 border-rose-200",
    }),
    []
  );

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100">
      {/* Calendar */}
      <div className="rounded-xl ">
        <Calendar onChange={onChange} value={value} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold text-slate-900">Events</h1>
        <button className="p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition">
          <Image src="/images/moreDark.png" alt="More" width={18} height={18} />
        </button>
      </div>

      {/* Events List */}
      <div className="mt-3 flex flex-col gap-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl border border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple p-4  bg-white"
          >
            {/* top row */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-gray-600 truncate">
                  {event.title}
                </h2>
                <p className="text-xs text-gray-400 mt-1">{event.location}</p>
              </div>

              <div className="flex flex-col md:items-end gap-2 shrink-0">
                <span className="text-xs font-medium text-gray-400">
                  {event.time}
                </span>

                <div className="flex  md:items-center gap-2">
                  <span
                    className={[
                      "text-[11px] px-2 py-1 rounded-full border font-medium capitalize",
                      typeBadge[event.type as keyof typeof typeBadge] ||
                        "bg-slate-50 text-gray-400 border-slate-200",
                    ].join(" ")}
                  >
                    {event.type}
                  </span>

                  <span
                    className={[
                      "text-[11px] px-2 py-1 rounded-full border font-medium capitalize",
                      statusBadge[event.status as keyof typeof statusBadge] ||
                        "bg-slate-50 text-gray-400 border-slate-200",
                    ].join(" ")}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            </div>

            {/* description */}
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalander;