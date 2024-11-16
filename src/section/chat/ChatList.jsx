import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

export default function ChatList() {
  return (
    <div className='hidden h-full flex-col xl:flex xl:w-1/4'>

      {/* Number of active conversations */}
      <div className='sticky border-b px-6 py-7.5 flex flex-row
                    border-stroke
                    dark:border-strokedark'>
        <h3 className='text-lg font-medium text-black dark:text-white 2xl:text-xl'>
          Active Conversations
        </h3>
        <span className='rounded-md border-[.5px] border-stroke dark:border-strokedark
        bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white 2xl:ml-4'>
          3
        </span>
      </div>

      {/* List of active conversations */}
      <div className='flex max-h-full flex-col overflow-auto p-5'>
        <form className='sticky mb-7'>
          <input  placeholder='Search...'
                  type='text'
                  className=' w-full rounded border py-2.5 pl-5 pr-10 text-sm outline-none
                            border-stroke bg-gray-2
                            focus:border-primary
                            dark:border-strokedark dark:bg-boxdark-2'/>

          <button className='absolute right-4 top-1/2 -translate-y-1/2'>
            <MagnifyingGlass size={20}/>
          </button>
        </form>
      </div>

    </div>
  )
}