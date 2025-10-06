"use client"
import React from 'react'
import { Button } from './ui/button'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from './ui/sidebar'
import { MessageSquare, Plus } from 'lucide-react'
import { useChatStore } from '@/store/chat-store'

const chats = [
    {
        id: "c1",
        title: "Project idea1"
    },
    {
        id: "c2",
        title: "Project idea2"
    },
    {
        id: "c3",
        title: "Project idea3"
    }
]

export default function ChatSidebar() {
    const chats = useChatStore((s) => s.chats)
    const activeChatId = useChatStore((s) => s.activeChatId)
    const createChat = useChatStore((s) => s.createChat)
    const setActiveChat = useChatStore((s) => s.setActiveChat)
    return (
        <Sidebar>
            <SidebarHeader className='p-4'>
                <Button onClick={createChat}><Plus />New Chat</Button>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {
                            chats.map((chat) => {
                                return <Button
                                    key={chat.id}
                                    variant="ghost"
                                    className={`w-full flex justify-start gap-2 ${chat.id === activeChatId ? "bg-gray-200" : ""
                                        }`}
                                    onClick={() => setActiveChat(chat.id)}>
                                    <MessageSquare />
                                    <span className='truncate'>{chat.title}</span>
                                </Button>
                            })
                        }
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>

        // <aside className="w-64 bg-gray-100 p-4">
        //     {/* <Sidebar>

        //     </Sidebar> */}
        //     <Button className="w-full mb-4">New Chat</Button>
        //     <p className="font-bold text-center">Chat history</p>
        //     <ul>
        //         <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Chat 1</li>
        //         <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Chat 2</li>
        //     </ul>
        // </aside>
    )
}
