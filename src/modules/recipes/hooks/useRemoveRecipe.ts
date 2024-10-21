import { toast } from "react-toastify";
import { removeRecipeService } from "../actions";

export const useRemoveRecipe = () => {
  const deleteRecipe = async (id: number) => {
    try {
      const { isOk, message } = await removeRecipeService(id);
      if (isOk) {
        toast.success(message, {
          position: "top-right",
        });
      } else {
        toast.error(message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al procesar la solicitud.", {
        position: "top-right",
      });
    }
  };
  return { deleteRecipe };
};
