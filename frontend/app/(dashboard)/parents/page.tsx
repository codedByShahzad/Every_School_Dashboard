import Announcements from "@/src/components/Announcements";
import BigCalendar from "@/src/components/BigCalendar";
import EventCalander from "@/src/components/EventCalander";

const ParentsPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 " >
        <div className="h-full bg-white rounded-2xl p-4">
          <h1 className="text-xl font-semibold">Schedule (Jhon Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
           <Announcements />
      </div>
    </div>
  )
}

export default ParentsPage