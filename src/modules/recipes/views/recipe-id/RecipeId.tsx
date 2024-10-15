import { GoBack } from "@/modules/core/components";
import { DetailRecipe } from "@/modules/recipes/components";

export const ViewRecipeId = () => {
  return (
    <>
      <GoBack />
      <DetailRecipe />
    </>
  );
};
