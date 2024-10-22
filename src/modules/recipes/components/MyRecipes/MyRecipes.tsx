import { MyRecipe } from "..";
import { getMyRecipesService } from "../../actions";
import { IGetRecipesResponse } from "../../interfaces";
import { NotFound } from "@/modules/core/components";

export const MyRecipes = async () => {
  try {
    const responseRecipes: IGetRecipesResponse = await getMyRecipesService();
    const isOk = responseRecipes?.isOk;

    const recipes = responseRecipes?.data || [];
    const hasRecipes = recipes.length > 0;
    if (isOk && hasRecipes) {
      return (
        <section className="grid grid-cols-3 gap-6 mt-8">
          {recipes.map((recipe) => (
            <MyRecipe {...recipe} key={crypto.randomUUID()} />
          ))}
        </section>
      );
    } else {
      return <NotFound />;
    }
  } catch (error) {
    console.error(error);
  }
};
