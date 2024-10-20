import { authConfig, fontMonomaniacOne } from "@/modules/core/utils";
import { Recipe } from "../Recipe";
import { IGetRecipesResponse } from "@/modules/recipes/interfaces";
import { getServerSession } from "next-auth";
import { getRecipes } from "../../actions";

export const Recipes = async () => {
  try {
    const session = await getServerSession(authConfig);
    const isLogged = !!session?.user;

    const responseRecipes: IGetRecipesResponse = await getRecipes();
    const isOk = responseRecipes?.isOk;

    const recipesForLogged = responseRecipes?.data || [];
    const recipesForNotLogged = responseRecipes?.data?.slice(0, 3);
    const recipes = isLogged ? recipesForLogged : recipesForNotLogged;
    const hasRecipes = recipes?.length > 0;

    if (isOk && hasRecipes) {
      return (
        <section className="mt-10">
          <h2
            className={`text-3xl text-white ${fontMonomaniacOne.className} mb-6`}
          >
            Todas las Recetas
          </h2>
          <section className="grid grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Recipe {...recipe} key={crypto.randomUUID()} />
            ))}
          </section>
        </section>
      );
    }
  } catch (error) {
    console.error(error);
  }
};
