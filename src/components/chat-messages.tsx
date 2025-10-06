"use client"
import { useChatStore } from '@/store/chat-store'
import ChatMessage from './chat-message'

export default function ChatMessages() {
    const { chats, activeChatId } = useChatStore()

    const activeChat = chats.find((chat) => chat.id === activeChatId)
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeChat && activeChat.message.map((message) => {
                return <ChatMessage role={message.role}>{message.content}</ChatMessage>
            })}
        </div>
    )
}
