"use client";

import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { MdDelete } from "react-icons/md";
import { IRecipe } from "../../interfaces";
import { useRouter } from "next/navigation";
import { PATH } from "../../constants";
import { useRemoveRecipe } from "../../hooks";

export const MyRecipe = ({
  name,
  detail = "",
  idRecipe,
  images = [],
}: IRecipe) => {
  const { goldenYellow, orange } = BUTTON;
  const { deleteRecipe } = useRemoveRecipe();
  const buttonClass = `${fontJollyLodger.className} w-full flex justify-center gap-1 items-center`;

  const firtImage = images[0]?.link;
  const hasImage = firtImage?.startsWith("http");
  const router = useRouter();

  const goDetail = () => {
    router.push(`/${PATH.recipeDetail}/${idRecipe}`);
  };

  return (
    <aside className="rounded-lg overflow-auto p-6 border-4 bg-purple-700 text-center border-white">
      <Image
        src={hasImage ? firtImage : empty}
        width={800}
        height={50}
        alt={name}
        className="rounded-lg w-[500px] h-[200px] object-cover"
      />

      <div
        className={`mt-4 mb-6 flex flex-col gap-1 text-white ${fontMali.className}`}
      >
        <p className="text-lg">{name}</p>
        <p className="text-lg">{detail}</p>
      </div>

      <div className="flex gap-4 flex-col">
        <button
          onClick={goDetail}
          className={`${goldenYellow.size.medium} ${goldenYellow.type.base} ${fontJollyLodger.className}`}
        >
          Ver detalle
        </button>

        <div className="flex gap-2">
          <button
            className={`${orange.size.medium} ${orange.type.base} ${buttonClass}`}
            onClick={() => deleteRecipe(idRecipe)}
          >
            <MdDelete />
            Eliminar
          </button>
        </div>
      </div>
    </aside>
  );
};
