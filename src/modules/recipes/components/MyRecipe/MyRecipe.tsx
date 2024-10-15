import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { MdEdit, MdDelete } from "react-icons/md";

export const MyRecipe = () => {
  const { goldenYellow, orange } = BUTTON;
  const buttonClass = `${fontJollyLodger.className} w-full flex gap-1 items-center`;

  return (
    <aside className="rounded-lg overflow-auto p-6 border-4 bg-purple-700 text-center border-white">
      <Image
        src={empty}
        width={800}
        height={50}
        alt="Imagen de receta vacía"
        className="rounded-lg w-[500px] h-[200px] object-cover"
      />

      <div
        className={`mt-4 mb-6 flex flex-col gap-1 text-white ${fontMali.className}`}
      >
        <p className="text-lg">[Nombre de Receta]</p>
        <p className="text-lg">[Descripción de Receta]</p>
      </div>

      <div className="flex gap-4 flex-col">
        <button
          className={`${goldenYellow.size.medium} ${goldenYellow.type.base} ${fontJollyLodger.className}`}
        >
          Ver detalle
        </button>

        <div className="flex gap-2">
          <button
            className={`${orange.size.medium} ${orange.type.base} ${buttonClass}`}
          >
            <MdEdit />
            Editar
          </button>

          <button
            className={`${orange.size.medium} ${orange.type.base} ${buttonClass}`}
          >
            <MdDelete />
            Eliminar
          </button>
        </div>
      </div>
    </aside>
  );
};
