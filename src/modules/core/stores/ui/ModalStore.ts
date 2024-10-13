import { create } from "zustand";

interface StateToggle {
  isOpen: boolean;
  name: string;
}

interface State extends StateToggle {
  toggle: ({ isOpen, name }: StateToggle) => void;
}

export const useModalStore = create<State>()((set) => ({
  isOpen: true,
  name: "",
  toggle: ({ isOpen, name }: StateToggle) => set({ isOpen, name }),
}));
