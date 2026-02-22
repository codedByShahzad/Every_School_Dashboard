import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center gap-2 px-2 ring-[1.5px] text-xs ring-gray-300 rounded-full' >
          <Image src="/images/search.png" alt='' width={14} height={14} /> 
          <input type="text" placeholder='Search...' className='w-50 bg-transparent outline-none p-2 ' />
      </div>
      <div className='flex items-center justify-end gap-6 w-full'>
        <div className='rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/images/message.png' alt='' width={20} height={20} />
        </div>
        <div className='rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/images/announcement.png" alt='' width={25} height={25} />
          <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className='flex flex-col '> 
          <span className='text-sm leading-3 font-medium'>Shahad Sohail</span>
          <span className='text-xs text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/images/avatar.png" alt='' width={36} height={36} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar