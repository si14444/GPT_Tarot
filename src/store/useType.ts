import create from "zustand";

interface TypeStoreState {
  type: string;
  setType: (newType: string) => void;
}

const useType = create<TypeStoreState>((set) => ({
  type: "",
  setType: (newType: string) => set({ type: newType }),
}));

export default useType;
