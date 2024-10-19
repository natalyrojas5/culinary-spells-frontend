import { RecipeBanner } from ".";
import { getRecipe } from "../../actions";
import { IGetRecipeResponse } from "../../interfaces";
import { RecipeCreator } from "./RecipeCreator";
import { RecipeDescription } from "./RecipeDescription";
import { RecipePreparation } from "./RecipePreparation";
import { RecipeSummary } from "./RecipeSummary";

export const DetailRecipe = async ({ id }: { id: string }) => {
  try {
    const responseRecipe: IGetRecipeResponse = await getRecipe(Number(id));
    const isOk = responseRecipe?.isOk;
    const recipe = responseRecipe?.data[0];

    if (isOk && recipe) {
      const {
        name = "Nombre de receta no disponible",
        count = 0,
        recipeTypeName = "Tipo no especificado",
        cookingTime = "Tiempo no disponible",
        detail = "Descripción no disponible",
        steps = [],
        user: {
          name: userName = "Desconocido",
          lastname: userLastname = "Usuario",
          email = "Correo no disponible",
          countryName = "País no especificado",
          gender = 0,
        } = {},
      } = recipe;

      return (
        <main className="flex flex-col gap-12 mt-8">
          <RecipeBanner name={name} score={count} />
          <RecipeSummary
            recipeTypeName={recipeTypeName}
            cookingTime={cookingTime}
          />
          <RecipeDescription description={detail} />
          <RecipePreparation steps={steps} />
          <RecipeCreator
            names={`${userName} ${userLastname}`}
            email={email}
            countryName={countryName}
            gender={gender}
          />
        </main>
      );
    } else {
      return (
        <p className="font-extrabold text-4xl c-txt-golden-yellow">
          Receta no encontrada o ocurrió un error.
        </p>
      );
    }
  } catch (error) {
    console.error("Error al obtener la receta:", error);
    return (
      <p className="font-extrabold text-4xl c-txt-golden-yellow">
        No se pueden cargar los detalles de la receta en este momento.
      </p>
    );
  }
};
