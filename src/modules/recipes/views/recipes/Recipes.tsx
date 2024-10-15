import { Banner } from "@/modules/auth/components";
import { Recipes } from "@/modules/recipes/components";
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
    </>
  );
};
