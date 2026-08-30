import { create } from "zustand";

interface TableStore {
  openCreateTable: boolean;
  setOpenCreateTable: (open: boolean) => void;

  tables: string[];
  addTable: (name: string) => void;
  removeTable: (name: string) => void;
}

export const useTableStore = create<TableStore>((set) => ({
  openCreateTable: false,

  setOpenCreateTable: (open) =>
    set({ openCreateTable: open }),

  tables: Object.keys(localStorage),

  addTable: (name) => {
    localStorage.setItem(name, JSON.stringify([]));

    set({
      tables: Object.keys(localStorage),
    });
  },

  removeTable: (name) => {
    localStorage.removeItem(name);

    set({
      tables: Object.keys(localStorage),
    });
  },
}));

