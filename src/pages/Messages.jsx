import { Sidebar } from '../section/chat'
import React from 'react'
import ChatList from '../section/chat/ChatList'

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
        
      </div>
    </div>
  )
}
