import React from 'react'
import Header from './header'
import ChatMessages from './chat-messages'
import ChatInput from './chat-input'

export default function ChatArea() {
    return (
        <main className="flex flex-col flex-1 ">
            <Header />
            <ChatMessages />
            <ChatInput />
        </main>
    )
}
