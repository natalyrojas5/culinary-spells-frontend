import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { IoIosAdd } from "react-icons/io";
import { PATH } from "@/modules/recipes/constants";
import  Link from "next/link"
export const AddRecipe = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <Link
      href={PATH.createRecipe}
      className={`
      ${size.big} ${type.base} ${fontJollyLodger.className} mt-8 fixed bottom-40 right-20 border-4 border-black flex gap-2 items-center`}
    >
      <IoIosAdd size={50} />
      Agregar Receta
    </Link>
  );
};
