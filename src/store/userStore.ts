import { create } from "zustand";
import type { user } from "../types/User";

interface UserStore {
  activeUser: user | null;

  setActiveUser: (user: user) => void;
  signOut: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  activeUser: JSON.parse(
    localStorage.getItem("activeUser") || "null"
  ),

  setActiveUser: (user) => {
    localStorage.setItem(
      "activeUser",
      JSON.stringify(user)
    );

    set({ activeUser: user });
  },

  signOut: () => {
    localStorage.setItem("activeUser", "null");

    set({ activeUser: null });
  },
}));

