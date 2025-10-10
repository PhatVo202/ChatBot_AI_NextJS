"use client"
import React from 'react'
import { Button } from './ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from './ui/sidebar'
import { CircleUser, MessageSquare, Plus } from 'lucide-react'
import { useChatStore } from '@/store/chat-store'

export default function ChatSidebar() {
    const chats = useChatStore((s) => s.chats)
    const activeChatId = useChatStore((s) => s.activeChatId)
    const createChat = useChatStore((s) => s.createChat)
    const setActiveChat = useChatStore((s) => s.setActiveChat)
    console.log(chats)
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

            <SidebarFooter className='flex-row items-start bg-white hover:bg-gray-600 hover:text-white hover:transition-all hover:ease-in'><CircleUser size={30} />
                <div>
                    <div>Phat Vo</div>
                    <div>free</div>
                </div>
            </SidebarFooter>
        </Sidebar>

    )
}
