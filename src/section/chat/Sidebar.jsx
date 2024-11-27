import React, { useState } from 'react'
import { Chat, DotsThreeCircle, Shapes, SignOut, UserCircle, Users } from '@phosphor-icons/react'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'

const NAVIGATION = [
  {
    key: 0,
    title: "DMs",
    icon: <Chat size={24}/>
  },
  {
    key: 1,
    title: "Groups",
    icon: <Users size={24}/>
  },
  {
    key: 2,
    title: "Profile",
    icon: <UserCircle size={24}/>
  },
  {
    key: 3,
    title: "More",
    icon: <DotsThreeCircle size={24}/>
  }
];

export default function Sidebar() {

  const [selected, setSelected] = useState(0);

  const handleClick = (key) => {
    setSelected(key);
  };

  return (
    <div className='flex flex-col border-r p-2 border-stroke dark:border-strokedark'>
      {/* <div className='  mx-auto border rounded-md p-2 border-stroke  hover:bg-stone-100 dark:border-strokedark dark:hover:bg-meta-4'>
        <Chat size={24} />
      </div> */}

      <div className='flex flex-col items-center space-y-5'>
        <div className='space-y-2 flex flex-col text-center'>
          <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark'>
            <Shapes size={24}/>
          </div>
          <span className='font-medium text-sm'>Workspace</span>
        </div>

        {NAVIGATION.map(({icon, key, title}) => (
          <div key={key} className='space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary' onClick={() => {handleClick(key)}}>
            <div className={`mx-auto border rounded-md border-stroke p-2 dark:border-strokedark ${selected === key && "bg-primary bg-opacity-90 text-white"} hover:border-primary dark:hover:border-primary`}>
              {icon}
            </div>
            <span className={`font-medium text-sm ${selected === key && "text-primary"}`}>{title}</span>
          </div>))}
      </div>

      <div className='flex flex-col grow'></div>

      <div className='space-y-4.5'>
        <div className='flex flex-row items-center justify-center'>
          <DarkModeSwitcher />
        </div>

        <div className='flex flex-row items-center justify-center border rounded-md hover:cursor-pointer border-stroke p-2 hover:bg-stone-100 dark:border-strokedark dark:hover:bg-meta-4'>
          <SignOut size={24} />
        </div>
      </div>
    </div>
  )
}
