import { Banner, ModalAccessRecipe } from "@/modules/auth/components";
import { Recipes } from "@/modules/core/components";
import {
  AddRecipe,
  FeaturedRecipe,
  FeaturedRecipes,
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
