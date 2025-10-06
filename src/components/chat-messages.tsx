import React from 'react'
import ChatMessage from './chat-message'

export default function ChatMessages() {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <ChatMessage role='user'>hello</ChatMessage>
            <ChatMessage role='bot'>How can I help you today?</ChatMessage>
            <ChatMessage role='user'>What can you do?</ChatMessage>
            <ChatMessage role='bot'>I can answer question and help you build this app tiktok</ChatMessage>
        </div>
    )
}
