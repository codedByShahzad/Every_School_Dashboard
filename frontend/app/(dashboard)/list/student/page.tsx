import Pagination from '@/src/components/Pagination'
import Table from '@/src/components/Table'
import TableSearch from '@/src/components/TableSearch'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link';
import { role, studentsData, teachersData } from '@/src/lib/data'


type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: string[];
  class: string;
  address: string;
};



const page = () => {

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Email",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

  const renderRow = (item: Student) =>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt="" height={40} width={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/student/${item.id}`} >
            <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-sky">
              <Image src="/images/view.png" alt="" width={16} height={16}  />
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
        <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
        <TableSearch />
      </div>
      {/* List  */}
      <div>
        <Table columns= {columns} renderRow = {renderRow} data={studentsData} />
      </div>
      {/* Pagination */}
        <Pagination />
    </div>
  )
}

export default page