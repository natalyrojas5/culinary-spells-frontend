import { Banner, ModalAccessRecipe } from "@/modules/auth/components";

import {
  AddRecipe,
  FeaturedRecipe,
  FeaturedRecipes,
  Recipes,
} from "@/modules/recipes/components";
import { getRecipes } from "@/modules/recipes/actions";

export const ViewRecipes = async () => {
  const { data } = (await getRecipes()) || { data: [] };

  return (
    <>
      <Banner />
      <FeaturedRecipe />
      <FeaturedRecipes />
      <Recipes recipes={data} />
      <AddRecipe />
      <ModalAccessRecipe />
    </>
  );
};
