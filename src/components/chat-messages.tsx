"use client"
import { useChatStore } from '@/store/chat-store'
import ChatMessage from './chat-message'
import { useEffect, useRef } from 'react'

export default function ChatMessages() {
    const { chats, activeChatId } = useChatStore()
    const activeChat = chats.find((chat) => chat.id === activeChatId)

    const containerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Khi tin nhắn thay đổi, tự động scroll xuống cuối
    useEffect(() => {
        if (!containerRef.current) return
        containerRef.current.scrollTop = containerRef.current.scrollHeight
    }, [activeChat?.id, activeChat?.message])

    if (!(activeChat?.message.length)) {
        return <div className='flex items-center justify-center h-full'>
            <div className='font-normal text-3xl'>What can I help with?</div>
        </div>
    }

    return (
        <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeChat && activeChat.message.map((message) => {
                return <ChatMessage key={message.id} role={message.role}>{message.content}</ChatMessage>
            })}

            {/* Đây là điểm đánh dấu để scroll tới */}
            <div ref={messagesEndRef} />
        </div>
    )
}
