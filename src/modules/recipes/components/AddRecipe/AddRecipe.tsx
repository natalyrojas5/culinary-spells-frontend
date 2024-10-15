'use client'
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { IoIosAdd } from "react-icons/io";
import { useRouter } from "next/navigation";
import { PATH } from "@/modules/recipes/constants";
export const AddRecipe = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => router.push(PATH.createRecipe)}
      className={`
      ${size.big} ${type.base} ${fontJollyLodger.className} mt-8 fixed bottom-40 right-20 border-4 border-black flex gap-2 items-center`}
    >
      <IoIosAdd size={50} />
      Agregar Receta
    </button>
  );
};
