import { create } from "zustand";

type MobileSidebarStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}; // this is the interface defining the shape of the store


export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
    //this syntax will immediately return an object 
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))