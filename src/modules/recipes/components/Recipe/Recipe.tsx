"use client";

import clsx from "clsx";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import empty from "@/modules/core/assets/empty.jpg";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { PATH } from "@/modules/recipes/constants";
import { IRecipe } from "@/modules/recipes/interfaces";
import { useAuthenticated } from "@/modules/core/hooks";
import { useModalStore } from "@/modules/core/stores";
import { MODAL } from "@/modules/auth/constants";

interface Props extends IRecipe {
  isHighlighted?: boolean;
}

export const Recipe = ({
  isHighlighted = false,
  name,
  detail = "",
  score = 0,
  images = [],
}: Props) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const { isAuthenticated } = useAuthenticated();
  const router = useRouter();
  const modalToggle = useModalStore((state) => state.toggle);

  const firtImage = images[0]?.link;
  const hasImage = firtImage?.startsWith("http");

  const goDetail = () => {
    if (isAuthenticated) {
      router.push(`/${PATH.recipeDetail}`);
    } else {
      modalToggle({ isOpen: true, name: MODAL.accessRecipe });
    }
  };

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
          src={hasImage ? firtImage : empty}
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
          Votos: {score === 0 ? "-" : score}
        </p>
        <p className="text-lg">{name}</p>
        <p className="text-lg">{detail ? "Sin descripción" : detail}</p>
      </div>
      <button
        className={`
          ${size.medium} ${type.base} ${fontJollyLodger.className} mt-6`}
        onClick={goDetail}
      >
        Ver detalle
      </button>
    </aside>
  );
};
