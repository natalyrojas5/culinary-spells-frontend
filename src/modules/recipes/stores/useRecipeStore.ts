import { create } from "zustand";

export interface StateStep {
  order: string;
  description: string;
  id: string;
}

interface StateRecipe {
  name: string;
  recipeType: string;
  description?: string;
  time: string;
  steps: StateStep[];
  currentStep: Partial<StateStep>;
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
    order: "",
    description: "",
    id: "",
  },
  setRecipe: (recipe) => set((state) => ({ ...state, ...recipe })),
}));
