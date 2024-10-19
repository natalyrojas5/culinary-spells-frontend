import { Banner, ModalAccessRecipe } from "@/modules/auth/components";

import {
  AddRecipe,
  FeaturedRecipe,
  FeaturedRecipes,
  Recipes,
} from "@/modules/recipes/components";
import { getRecipes } from "@/modules/recipes/actions";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/modules/core/utils";

export const ViewRecipes = async () => {
  const session = await getServerSession(authConfig);
  const isLogged = !!session?.user;
  const { data } = (await getRecipes()) || { data: [] };

  return (
    <>
      <Banner />
      {isLogged && (
        <>
          <FeaturedRecipe />
          <FeaturedRecipes />
        </>
      )}
      <Recipes recipes={isLogged ? data : data.slice(0, 3)} />
      {isLogged ? <AddRecipe /> : <ModalAccessRecipe />}
    </>
  );
};
