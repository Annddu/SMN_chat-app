import React, { useEffect, useRef, useState } from 'react'
import user01 from "../../images/user/user-01.png"
import { DotsThree, Gif, LinkSimple, PaperPlaneTilt, Phone, Smiley, VideoCamera } from '@phosphor-icons/react'
import Dropdown from '../../components/Dropdown'
import EmojiPicker from '../../components/EmojiPicker'
import UserInfo from './UserInfo'
import Giphy from '../../components/Giphy'
export default function Inbox() {
    const [userInfoOpen, setUserInfoOpen] = useState(false);

    const [gifOpen, setGifOpen] = useState(false);

    const handleToggleGif = (e) => {
        e.preventDefault();
        setGifOpen((prev) => !prev);
    }

    const handleToggleUserInfo = () => {
        setUserInfoOpen((prev) => !prev);
    }

    const gifsPicker = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(gifsPicker.current && !gifsPicker.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)){
                setGifOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <>
            <div className={`flex h-full flex-col border-l xl:w-3/4
                        border-stroke
                        dark:border-strokedark ${userInfoOpen ? "xl:w-1/2" : "xl:w-3/4"}`}>

                {/* Top bar */}
                <div className='sticky flex items-center flex-row justify-between border-b px-6 py-4.5
                            border-stroke
                            dark:border-strokedark'>
                    <div className='flex items-center' onClick={handleToggleUserInfo}>
                        <div className='mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full cursor-pointer'>
                            <img src={user01} alt="avatar" className='h-full object-cover object-center' />
                        </div>

                        <div>
                            <h5 className='font-medium text-black dark:text-white'>
                                Andu Andu
                            </h5>

                            <p className='text-sm'>Reply to message</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center space-x-8'>
                        <button>
                            <VideoCamera size={24} />
                        </button>
                        <button>
                            <Phone size={24} />
                        </button>
                        <Dropdown />
                    </div>
                </div>

                {/* List of messages */}
                <div className='max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow'>

                    <div className='max-w-125'>
                        <p className='mb-2.5 text-sm font-medium'>Andu Andu</p>
                        <div className='mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125 ml-auto'>

                        <div className='mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3'>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125'>
                        <p className='mb-2.5 text-sm font-medium'>Andu Andu</p>
                        <div className='mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125 ml-auto'>

                        <div className='mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3'>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125'>
                        <p className='mb-2.5 text-sm font-medium'>Andu Andu</p>
                        <div className='mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125 ml-auto'>

                        <div className='mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3'>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125'>
                        <p className='mb-2.5 text-sm font-medium'>Andu Andu</p>
                        <div className='mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>

                    <div className='max-w-125 ml-auto'>

                        <div className='mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3'>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam neque iste dolorum exercitationem nesciunt reiciendis perspiciatis quis, maiores tempore quae, nisi inventore molestiae doloribus officia cumque vitae et eaque.</p>
                        </div>
                        <p className='text-xs'>4:32pm</p>
                    </div>
                </div>

                {/* Input */}
                <div ref={gifsPicker} className='sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark'>
                    <form className='flex items-center justify-between space-x-4.5'>
                        <div className='relative w-full'>
                            <input type="text" placeholder='Type something here' className='h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:bg-boxdark-2 dark:border-strokedark dark:text-white' />

                            <div className='absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4'>
                                <button className='hover:text-primary'>
                                    <LinkSimple size={20} />
                                </button>
                                <button onClick={handleToggleGif} ref={buttonRef} className='hover:text-primary'>
                                    <Gif size={20} />
                                </button>
                                <button className='hover:text-primary'>
                                    <EmojiPicker />
                                </button>
                            </div>
                        </div>

                        <button className='flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90'>
                            <PaperPlaneTilt size={24} weight='bold' />
                        </button>
                    </form>

                    {gifOpen && <Giphy />}
                </div>
            </div>

            {userInfoOpen && (
                <div className='w-1/4'>
                    <UserInfo handleToggleUserInfo={handleToggleUserInfo}/>
                </div>
            )}
        </>
    )
}
