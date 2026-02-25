import Pagination from '@/src/components/Pagination'
import Table from '@/src/components/Table'
import TableSearch from '@/src/components/TableSearch'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link';
import { parentsData, role, studentsData, subjectsData, teachersData } from '@/src/lib/data'


type Subject = {
  id: number;
  name: string;
  teachers: string[];
};



const page = () => {

const columns = [
  {
    header: "Subject Name",
    accessor: "info",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

  const renderRow = (item: Subject) =>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
      <td className='flex items-center gap-4 p-4'>
        {item.name}
      </td>

      <td className='hidden md:table-cell'>{item?.teachers.join(", ")}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`} >
            <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-sky">
              <Image src="/images/edit.png" alt="" width={16} height={16}  />
            </button>
          </Link>
          {role === "admin" && (
             <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-purple">
              <Image src="/images/delete.png" alt="" width={16} height={16}  />
            </button>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white rounded-2xl flex-1 m-4 mt-0 p-4'>
      {/* Top */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
        <TableSearch />
      </div>
      {/* List  */}
      <div>
        <Table columns= {columns} renderRow = {renderRow} data={subjectsData} />
      </div>
      {/* Pagination */}
        <Pagination />
    </div>
  )
}

export default page