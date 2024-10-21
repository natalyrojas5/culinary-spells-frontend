import { create } from "zustand";

interface State {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useNavigationStore = create<State>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
