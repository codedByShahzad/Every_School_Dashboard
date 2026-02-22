"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMemo, useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const events = useMemo(
    () =>
      calendarEvents.map((e: any) => ({
        ...e,
        start: new Date(e.start),
        end: new Date(e.end),
      })),
    []
  );

  const [date, setDate] = useState<Date>(events?.[0]?.start ?? new Date());

  return (
    <div style={{ height: 800 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        onView={(v) => setView(v)}
        date={date}
        onNavigate={(d) => setDate(d)}
        min={new Date(2026, 1, 0, 8, 0, 0)}
        max={new Date(2026, 1, 0, 15, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;