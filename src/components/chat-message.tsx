
import { cn } from '@/lib/utils';
import React from 'react'

type TChatMessageProps = {
    role: "user" | "bot";
    children: React.ReactNode;
}

export default function ChatMessage({ role, children }: TChatMessageProps) {
    const isUser = role === "user"

    const containerClasses = cn("flex", isUser ? "justify-end" : "justify-start")

    const bubbleClasses = cn("rounded-4xl px-4 py-2", isUser ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800")
    return (
        <div className={containerClasses}>
            <div className={bubbleClasses}>{children}</div>
        </div>
    )
}