import { UserCards } from '@/src/components/UserCards'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      <div className='w-full lg:w-2/3'>
        <div className='flex gap-2 lg:gap-4 justify-between flex-wrap'>
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
      </div>
      <div className='bg-green-300 w-full lg:w-1/3'>right</div>
    </div>
  )
}

export default AdminPage