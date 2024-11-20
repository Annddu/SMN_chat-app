import { Moon, Sun } from '@phosphor-icons/react'
import React from 'react'

export default function DarkModeSwitcher() {
  return (
    <li className='list-none'>
        <label htmlFor="" className='relative m-0 block h-7.5 w-14 rounded-full bg-stroke'>
            <input type="checkbox" className='absolute z-50 top-0 m-0 h-full w-full cursor-pointer opacity-0'/>
        
            <span className='absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2  translate-x-0 items-center justify-center rounded-full bg-white duration-75 ease-linear'>
                <span className='dark:hidden'>
                    <Sun/>
                </span>
                <span className='hidden dark:inline-block'>
                    <Moon/>
                </span>
            </span>
        </label>
    </li>
  )
}
