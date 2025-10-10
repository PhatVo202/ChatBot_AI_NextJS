"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { Input } from './ui/input'
import { useChatStore } from '@/store/chat-store'

export default function ChatInput() {
    const addChat = useChatStore((s) => s.addChat)
    const [value, setValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const text = value.trim()
        if (!text) return

        //add store
        addChat(value, 'user')
        setValue("")
        setIsLoading(true)
        //add store chat gemini
        const res = await fetch('api/chat', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: text })
        })
        const data = await res.json()
        addChat(data.message, 'bot')
        setIsLoading(false)
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <Input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="flex-1" placeholder="Type your message..." aria-label='Chat message' disabled={isLoading} />
            <Button type='submit' disabled={isLoading}><Send />Send</Button>
        </form>
    )
}
