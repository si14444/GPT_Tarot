import { create } from "zustand";

interface TypeStoreState {
  tarot: number[];
  addTarot: (newTarot: number) => void;
  resetTarot: () => void;
}

const useTarot = create<TypeStoreState>((set) => ({
  tarot: [],

  addTarot: (newTarot: number) =>
    set((state) => ({ tarot: [...state.tarot, newTarot] })),

  resetTarot: () => set(() => ({ tarot: [] })),
}));

export default useTarot;
