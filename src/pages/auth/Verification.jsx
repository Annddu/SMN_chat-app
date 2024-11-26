import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'

export default function Verification() {
  return (
    <div className='overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8'>
        <div className='flex h-screen flex-col items-center justify-center overflow-hidden'>
            <div className='no-scrollbar overflow-y-auto py-20'>

                <div className='mx-auto w-full max-w-[480px]'>
                    <div className='text-center'>
                        <Link to="/" className='mx-auto mb-10 inline-flex'>
                            <Logo/>
                        </Link>

                        <div className='bg-white p-4 shadow-14 rounded-xl dark:bg-boxdark lg:p-7.5 xl:p-12.5'>
                            <h1 className='mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white capitalize'>
                                Verify your account
                            </h1>

                            <p className='mb-7.5 font-medium'>
                                Enter the 4 digit code sent to the registered email id.
                            </p>

                            <form action="">
                                <div className='flex items-center gap-4.5'>
                                    {Array.from({length: 4}).map((_, index) => <input type='text' key={index} className='w-full rounded-md border-[1.5px] border-stroke bg-transparent px-5 py-3 text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'/>)}
                                </div>

                                <p className='mb-5 mt-4 text-left font-medium text-black dark:text-white space-x-2 flex flex-row items-center'>
                                    <div>Did you not receive a code?</div>
                                    <button className='text-primary'>Resend</button>
                                </p>

                                <button className='flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90'>
                                    Verify
                                </button>

                                <span className='mt-5 block text-red'>
                                    Dont't share the verification code with anyone!
                                </span>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
