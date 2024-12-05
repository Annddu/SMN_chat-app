import { Sidebar } from '../section/chat'
import React from 'react'
import ChatList from '../section/chat/ChatList'
import Inbox from '../section/chat/Inbox'
import GifModal from '../components/GifModal'

export default function Messages() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm xl:flex
                    border-stroke bg-white shadow-default
                    dark:border-strokedark dark:bg-black">

        {/* Sidebar */}
        <Sidebar />

        {/* ChatList */}
        <ChatList />

        {/* Inbox */}
        <Inbox />
      </div>
      <GifModal/>
    </div>
  )
}
