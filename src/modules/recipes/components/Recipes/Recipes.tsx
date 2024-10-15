import { fontMonomaniacOne } from "@/modules/core/utils";
import { Recipe } from "../Recipe";
import { IRecipe } from "@/modules/recipes/interfaces";

interface Props {
  recipes: IRecipe[];
}

export const Recipes = ({ recipes }: Props) => {
  const hasRecipes = recipes.length > 0;

  return (
    <section className="mt-10">
      <h2 className={`text-3xl text-white ${fontMonomaniacOne.className} mb-6`}>
        Todas las Recetas
      </h2>

      {hasRecipes && (
        <section className="grid grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Recipe {...recipe} />
          ))}
        </section>
      )}
    </section>
  );
};
