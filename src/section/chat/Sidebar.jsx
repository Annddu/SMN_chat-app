import React from 'react'
import { Chat, SignOut } from '@phosphor-icons/react'

export default function Sidebar() {
  return (
    <div className='  flex flex-col border-r p-2
                    border-stroke
                    dark:border-strokedark'>
        <div className='  mx-auto border rounded-md p-2
                        border-stroke
                        dark:border-strokedark'>
            <Chat size={24}/>
        </div>

        <div className='flex flex-col grow'></div>

        <div className=''>

            <div className='  mx-auto border rounded-md hover:cursor-pointer
                            border-stroke p-2 hover:bg-stone-100
                            dark:border-strokedark'>
                <SignOut size={24}/>
            </div>
        </div>
    </div>
  )
}
