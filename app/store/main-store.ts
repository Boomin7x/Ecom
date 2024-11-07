import { create } from "zustand";

export type IInitialState = {
  name: string;
  category?: string;
  description: string;
  image:string;
  price: number;
  count?: number;
};

const InitialState: IInitialState[] = [];

type TStoreState = {
  product: IInitialState[];
  addProduct: (product: IInitialState) => void;
  removeProduct: () => void;
  updateProduct: (product: IInitialState) => void;
  createModal: boolean;
  toggleModal: () => void;
};

const useStore = create<TStoreState>((set) => ({
  product: InitialState,
  addProduct: (product: IInitialState) =>
    set((state) => ({ product: [...state.product, product] })),
  removeProduct: () => set({ product: InitialState }),
  updateProduct: (product: IInitialState) =>
    set((state) => ({
      product: state.product.map((item) =>
        item.name === product.name ? product : item
      ),
    })),

    createModal: false,
    toggleModal: () => set((state) => ({ createModal: !state.createModal })),
}));



export default useStore;
