import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { IoIosAdd } from "react-icons/io";

export const AddRecipe = () => {
  const {
    orange: { size, type },
  } = BUTTON;
  return (
    <button
      type="button"
      className={`
      ${size.big} ${type.base} ${fontJollyLodger.className} mt-8 fixed bottom-40 right-20 border-4 border-black flex gap-2 items-center`}
    >
      <IoIosAdd size={50} />
      Agregar Receta
    </button>
  );
};
