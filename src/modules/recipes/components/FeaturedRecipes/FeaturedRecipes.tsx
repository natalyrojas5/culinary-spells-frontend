import { Recipe } from "@/modules/recipes/components";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { getRecipesFeatured } from "../../actions";
import { IGetRecipesFeaturedResponse } from "../../interfaces";
import { NotFound } from "@/modules/core/components";

export const FeaturedRecipes = async () => {
  try {
    const responseRecipes: IGetRecipesFeaturedResponse =
      await getRecipesFeatured();

    const isOk = responseRecipes?.isOk;
    const recipes = responseRecipes?.data || [];
    const hasRecipes = recipes.length > 0;

    if (isOk && hasRecipes) {
      return (
        <section className="mt-10">
          <h2
            className={`text-3xl c-txt-golden-yellow ${fontMonomaniacOne.className} mb-6`}
          >
            Recetas Destacadas
          </h2>
          <section className="grid grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Recipe isHighlighted {...recipe} />
            ))}
          </section>
        </section>
      );
    } else {
      return <NotFound className="mt-10" />;
    }
  } catch (error) {
    console.error(error);
  }
};
