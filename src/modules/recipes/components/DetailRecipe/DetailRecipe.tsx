import { RecipeBanner } from ".";
import { RecipeCreator } from "./RecipeCreator";
import { RecipeDescription } from "./RecipeDescription";
import { RecipePreparation } from "./RecipePreparation";
import { RecipeSummary } from "./RecipeSummary";

export const DetailRecipe = () => {
  return (
    <main className="flex flex-col gap-12 mt-8">
      <RecipeBanner />
      <RecipeSummary />
      <RecipeDescription />
      <RecipePreparation />
      <RecipeCreator/>
    </main>
  );
};
