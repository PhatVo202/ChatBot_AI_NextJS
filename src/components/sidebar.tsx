import React from 'react'
import { Button } from './ui/button'

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <Button className="w-full mb-4">New Chat</Button>
            <p className="font-bold text-center">Chat history</p>
            <ul>
                <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Chat 1</li>
                <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Chat 2</li>
            </ul>
        </aside>
    )
}
