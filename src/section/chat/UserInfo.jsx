import { X, Clock, Chat, VideoCamera, DotsThreeVertical } from '@phosphor-icons/react'
import React from 'react'
import image1 from "../../images/user/user-01.png"

export default function UserInfo({ handleToggleUserInfo }) {
    return (
        <div className='border-l flex flex-col h-full border-stroke dark:border-strokedark'>
            <div className='sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5'>
                <div className='text-black dark:text-white font-semibold text-lg'>
                    Profile
                </div>

                <button onClick={handleToggleUserInfo}>
                    <X size={24} />
                </button>
            </div>

            <div className='mx-auto my-8'>
                <img src={image1} alt="profile=image" className='w-44 h-44 rounded-lg object-cover object-center' />
            </div>

            <div className='px-6 space-y-1'>
                <div className='text-black dark:text-white'>
                    Andu Andu
                </div>

                <span className='text-body text-md'>Seful la saracie</span>
            </div>

            <div className='px-6 my-6'>
                <div className='flex flex-row items-center space-x-2'>
                    <Clock size={20}/>
                    <div>12.12 PM local time</div>
                </div>
            </div>

            <div className='px-6 flex flex-row space-x-2'>
                <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
                    <Chat size={20} className='mr-3'/>
                    Message
                </button>
                <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
                    <VideoCamera size={20} className='mr-3'/>
                    Call
                </button>
                <button className='border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
                    <DotsThreeVertical size={20}/>
                </button>
            </div>
        </div>
    )
}
