import clsx from "clsx";
import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  isHighlighted?: boolean;
}

export const Recipe = ({ isHighlighted = false }: Props) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <aside
      className={clsx(
        "rounded-lg overflow-auto p-6 border-4 bg-purple-700 text-center",
        {
          "border-white": !isHighlighted,
          "c-border-golden-yellow": isHighlighted,
        }
      )}
    >
      <div className="relative">
        <Image
          src={empty}
          width={800}
          height={50}
          alt=""
          className="rounded-lg w-[500px] h-[200px] object-cover"
        />
        <button
          className={clsx("absolute bottom-4 right-3 p-2 rounded-md", {
            "bg-white hover:bg-gray-200": !isHighlighted,
            "bg-golden-yellow hover:bg-yellow-600": isHighlighted,
          })}
        >
          <FaRegHeart size={30} />
        </button>
      </div>
      <div
        className={`mt-4 flex flex-col gap-1 text-white ${fontMali.className}`}
      >
        <p className="text-center font-semibold text-2xl mb-2 c-txt-golden-yellow">
          Votos: 2000
        </p>
        <p className="text-lg">[Nombre de Receta]</p>
        <p className="text-lg">[Descripción de Receta]</p>
      </div>
      <button
        className={`
          ${size.medium} ${type.base} ${fontJollyLodger.className} mt-6`}
      >
        Ver detalle
      </button>
    </aside>
  );
};
