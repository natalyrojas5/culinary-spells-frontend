import { GoBack } from "@/modules/core/components";
import { DetailRecipe } from "@/modules/recipes/components";

export const ViewDetail = ({ id }: { id: string }) => {
  return (
    <>
      <GoBack />
      <DetailRecipe id={id} />
    </>
  );
};
