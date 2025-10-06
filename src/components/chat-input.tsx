"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { Input } from './ui/input'
import { useChatStore } from '@/store/chat-store'

export default function ChatInput() {
    const addChat = useChatStore((s) => s.addChat)
    const [value, setValue] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = value.trim()
        if (!text) return

        //add store
        addChat(value)

        setValue("")
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <Input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="flex-1" placeholder="Type your message..." aria-label='Chat message' />
            <Button type='submit'><Send />Send</Button>
        </form>
    )
}
