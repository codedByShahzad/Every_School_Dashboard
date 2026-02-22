import Pagination from '@/src/components/Pagination'
import TableSearch from '@/src/components/TableSearch'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white rounded-2xl flex-1 m-4 mt-0 p-4'>
      {/* Top */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        <TableSearch />
      </div>
      {/* List  */}
      <div></div>
      {/* Pagination */}
        <Pagination />
    </div>
  )
}

export default page