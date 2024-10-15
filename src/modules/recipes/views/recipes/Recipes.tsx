import { Banner, ModalAccessRecipe } from "@/modules/auth/components";

import {
  AddRecipe,
  FeaturedRecipe,
  FeaturedRecipes,
  Recipes,
} from "@/modules/recipes/components";

export const ViewRecipes = () => {
  return (
    <>
      <Banner />
      <FeaturedRecipe />
      <FeaturedRecipes />
      <Recipes />
      <AddRecipe />
      <ModalAccessRecipe />
    </>
  );
};
