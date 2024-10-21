import { toast } from "react-toastify";
import { addRecipeLikeService } from "../actions";

export const useAddRecipeLike = () => {
  const addLike = async (id: number) => {
    try {
      const { isOk, message } = await addRecipeLikeService(id);
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
  return { addLike };
};
