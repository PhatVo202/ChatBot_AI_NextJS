"use client"
import React from 'react'
import { Button } from './ui/button'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from './ui/sidebar'
import { MessageSquare, Plus } from 'lucide-react'
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
        </Sidebar>

    )
}
