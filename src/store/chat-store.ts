import { create } from "zustand";

export type MessageRole = "user" | "bot";

export type Message = {
  id: string;
  role: MessageRole;
  content: string;
};

export type Chat = {
  id: string;
  title: string;
  message: Message[];
};

export type ChatState = {
  chats: Chat[];
  addChat: (content: string) => void;

  activeChatId: string | null;
  createChat: () => void;
  setActiveChat: (id: string) => void;
};

const id = () => Math.random().toString(36).slice(2, 10);

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],

  addChat: (content: string) => {
    const { chats, activeChatId } = get();
    if (!activeChatId) return;

    const updateChat = chats.map((chat) => {
      if (chat.id !== activeChatId) return chat;

      const userMessage: Message = {
        id: id(),
        role: "user",
        content,
      };

      const botMessage: Message = {
        id: id(),
        role: "bot",
        content: `You said: "${content}" (gemini will reply later`,
      };

      return {
        ...chat,
        message: [...chat.message, userMessage, botMessage],
        title: chat.message.length === 0 ? content : chat.title,
      };
    });

    set({ chats: updateChat });
  },

  activeChatId: null,

  createChat: () => {
    const newChat: Chat = {
      id: id(),
      title: "New Chat",
      message: [],
    };

    set((state) => ({
      chats: [newChat, ...state.chats],
      activeChatId: newChat.id,
    }));
  },

  setActiveChat: (id: string) => {
    set({ activeChatId: id });
  },
}));
