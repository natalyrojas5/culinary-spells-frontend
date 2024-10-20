import { Banner, ModalAccessRecipe } from "@/modules/auth/components";

import {
  AddRecipe,
  FeaturedRecipe,
  FeaturedRecipes,
  Recipes,
} from "@/modules/recipes/components";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/modules/core/utils";

export const ViewRecipes = async () => {
  const session = await getServerSession(authConfig);
  const isLogged = !!session?.user;


  return (
    <>
      <Banner />
      {isLogged && (
        <>
          <FeaturedRecipe />
          <FeaturedRecipes />
        </>
      )}
      <Recipes />
      {isLogged ? <AddRecipe /> : <ModalAccessRecipe />}
    </>
  );
};
