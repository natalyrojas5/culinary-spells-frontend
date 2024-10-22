import { create } from "zustand";

export interface StateStep {
  orderNum: string;
  detail: string;
  name: string;
}

interface StateRecipe {
  name: string;
  recipeType: string;
  description?: string;
  time: string;
  steps: StateStep[];
  currentStep: Partial<StateStep>;
  resetForm: () => void;
}
interface StateStore extends StateRecipe {
  setRecipe: (recipe: Partial<StateRecipe>) => void;
}

export const useRecipeStore = create<StateStore>()((set) => ({
  name: "",
  recipeType: "",
  description: "",
  time: "",

  steps: [],
  currentStep: {
    orderNum: "",
    detail: "",
    name: "",
  },
  setRecipe: (recipe) => set((state) => ({ ...state, ...recipe })),
  resetForm: () => set({
    name: '',
    description: '',
    recipeType: '',
    time: '',
    steps: [],
    currentStep: { orderNum: '', detail: '', name: '' },
  }),
}));
