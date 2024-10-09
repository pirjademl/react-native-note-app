import { create } from "zustand";
import { Inote } from "../../types/types";

export interface INoteStore {
    notes: Inote[];
    addNote: (note: Inote) => void;
    removeNote: (note: Inote) => void;
}

export const useNoteStore = create<INoteStore>((set, get) => ({
    notes: [],
    addNote: (newnote: Inote) =>
        set((state) => ({ notes: [...state.notes, newnote] })),

    removeNote: (notetoremove: Inote) =>
        set((state) => ({
            notes: state.notes.filter(
                (item) => item.note !== notetoremove.note,
            ),
        })),
}));
