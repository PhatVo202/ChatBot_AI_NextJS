import { create } from "zustand";

interface IMessage {
  role: "user" | "bot";
  content: string;
}

interface IChatState {
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
}

export const useChatStore = create<IChatState>((set) => ({
  messages: [],
  addMessage: (message: IMessage) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
