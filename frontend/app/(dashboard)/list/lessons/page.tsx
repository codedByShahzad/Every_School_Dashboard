import Pagination from '@/src/components/Pagination'
import Table from '@/src/components/Table'
import TableSearch from '@/src/components/TableSearch'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link';
import { classesData, lessonsData, parentsData, role, studentsData, subjectsData, teachersData } from '@/src/lib/data'
import FormModal from '@/src/components/FormModal'


type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};



const page = () => {

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

  const renderRow = (item: Lesson) =>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
      <td className='flex items-center gap-4 p-4'>
        {item.subject}
      </td>

      <td className=''>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && <FormModal table='lesson' type="update"  data={item}  />}
          {role === "admin" && <FormModal table='lesson' type="delete" id={item.id}  />}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white rounded-2xl flex-1 m-4 mt-0 p-4'>
      {/* Top */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="w-full md:w-auto  flex items-center gap-2 px-2 text-xs ring-[1.5px] ring-gray-300 rounded-full">
            <Image src="/images/search.png" alt="" width={14} height={14} />
            <input
              type="text"
              placeholder="Search..."
              className="w-50 bg-transparent outline-none p-2 "
            />
          </div>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/images/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/images/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table='lesson' type="create" />}
          </div>
        </div>
      </div>
      {/* List  */}
      <div>
        <Table columns= {columns} renderRow = {renderRow} data={lessonsData} />
      </div>
      {/* Pagination */}
        <Pagination />
    </div>
  )
}

export default page