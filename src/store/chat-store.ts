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
  addChat: (content: string, role: MessageRole) => void;

  activeChatId: string | null;
  createChat: () => void;
  setActiveChat: (id: string) => void;
};

const id = () => Math.random().toString(36).slice(2, 10);

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],

  addChat: (content: string, role: MessageRole) => {
    const { chats, activeChatId } = get();
    if (!activeChatId) {
      const newChatId = id();
      const newChat: Chat = {
        id: newChatId,
        title: content.slice(0, 20) || "New Chat",
        message: [
          {
            id: id(),
            role,
            content,
          },
        ],
      };

      set({
        chats: [newChat, ...chats],
        activeChatId: newChatId,
      });
      return;
    }

    const updateChat = chats.map((chat) => {
      if (chat.id !== activeChatId) return chat;

      const message: Message = {
        id: id(),
        role,
        content,
      };

      return {
        ...chat,
        message: [...chat.message, message],
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
