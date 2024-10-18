import { GoBack } from "@/modules/core/components";
import { DetailRecipe } from "@/modules/recipes/components";


export const ViewDetail = () => {
  return (
    <>
      <GoBack description="Agregar Receta" />
      <DetailRecipe  />
    </>
  );
};
