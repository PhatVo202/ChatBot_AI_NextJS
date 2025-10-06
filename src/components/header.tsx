import React from 'react'
import { SidebarTrigger } from './ui/sidebar'

export default function Header() {
    return (
        <header className=" p-4 border-b flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-lg font-bold">My AI Chatbot</h1>
        </header>
    )
}
