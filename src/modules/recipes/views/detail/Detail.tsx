import { GoBack } from "@/modules/core/components";
import { DetailRecipe } from "@/modules/recipes/components";

export const ViewRecipeDetail = () => {
  return (
    <>
      <GoBack  description="Agregar Receta"/>
      <DetailRecipe />
    </>
  );
};
