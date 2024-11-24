import React from 'react'
import { Chat, SignOut } from '@phosphor-icons/react'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'

export default function Sidebar() {
  return (
    <div className='  flex flex-col border-r p-2
                    border-stroke
                    dark:border-strokedark'>
      <div className='  mx-auto border rounded-md p-2
                        border-stroke  hover:bg-stone-100
                        dark:border-strokedark dark:hover:bg-meta-4'>
        <Chat size={24} />
      </div>

      <div className='flex flex-col grow'></div>

      <div className='space-y-4.5'>

        <DarkModeSwitcher />

        <div className='  mx-auto border rounded-md hover:cursor-pointer
                            border-stroke p-2 hover:bg-stone-100
                            dark:border-strokedark dark:hover:bg-meta-4'>
          <SignOut size={24} />
        </div>
      </div>
    </div>
  )
}
