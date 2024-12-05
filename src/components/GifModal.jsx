import { PaperPlaneTilt, X } from '@phosphor-icons/react';
import React from 'react'

export default function GifModal() {
  const modalOpen = true;
  
  return (
    <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5
      ${modalOpen ? "block" : "hidden"}
    `}>
      <div className='md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12'>
        <div className='flex flex-row items-center justify-between mb-8 space-x-2'>
          <div className='text-md font-medium text-black dark:text-white'>Send Giphy</div>


          <button onClick={() => {}}>
            <X size={24}/>
          </button>
        </div>


        <img src="https://media4.giphy.com/media/l0ExdMHUDKteztyfe/100w.webp?cid=c134393dac5gio100tnz5g8vjqsstup1gh6fiiw3xzm09fhh&ep=v1_gifs_search&rid=100w.webp&ct=g" 
        alt="Giphy image" className='w-full mx-auto max-h-125 object-cover object-center rounded-lg'/>
      
        <div className='flex flex-row items-center space-x-2 justify-between mt-4'>
          <input type="text" className='border rounded-lg hover:border-primary outline-none w-full p-2.5 border-stroke dark:border-strokedark
          bg-transparent dark:bg-form-input' 
          placeholder='Type your message...'/>

          <button className='p-2.5 border border-primary flex items-center justify-center rounded-lg bg-primary hover:bg-opacity-90 text-white'>
           <PaperPlaneTilt size={24} weight='bold' />
          </button>
        </div>
      </div>
    </div>
  )
}
