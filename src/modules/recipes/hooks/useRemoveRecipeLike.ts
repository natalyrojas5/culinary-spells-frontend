import { toast } from "react-toastify";
import { removeRecipeLikeService } from "../actions";

export const useRemoveRecipeLike = () => {
  const deleteLike = async (id: number) => {
    try {
      const { isOk, message } = await removeRecipeLikeService(id);
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
  return { deleteLike };
};
