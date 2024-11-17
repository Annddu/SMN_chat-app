import React from 'react'
import user01 from "../../images/user/user-01.png"
import { DotsThree } from '@phosphor-icons/react'
export default function Inbox() {
  return (
    <div className='  flex h-full flex-col border-l xl:w-3/4
                    border-stroke
                    dark:border-strokedark'>
        
        {/* Top bar */}
        <div className='sticky flex items-center flex-row justify-between border-b px-6 py-4.5
                        border-stroke
                        dark:border-strokedark'>
            <div className='flex items-center'>
                <div className='mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full'>
                    <img src={user01} alt="avatar" className='h-full object-cover object-center'/>
                </div>

                <div>
                    <h5 className='font-medium text-black dark:text-white'>
                        Andu Andu
                    </h5>

                    <p className='text-sm'>Reply to message</p>
                </div>
            </div>

            <div>
                <DotsThree weight='bold' size={34}/>
            </div>
        </div>

        {/* List of messages */}
        <div>

        </div>

        {/* Input */}
        <div>
            
        </div>
    </div>
  )
}
