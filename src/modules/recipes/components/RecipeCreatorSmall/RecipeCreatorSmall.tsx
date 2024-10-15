import empty from "@/modules/core/assets/empty.jpg";

import { fontMali } from "@/modules/core/utils";
import Image from "next/image";

interface Props {
  name: string;
  country: string;
  image?: string;
}

export const RecipeCreatorSmall = ({ name, country, image }: Props) => {
  return (
    <div
      className={`shadow-md border-2 bg-[#2f036712] border-black text-black p-3 rounded-lg mt-4 flex gap-4 items-center ${fontMali.className}`}
    >
      <Image
        src={image ? image : empty}
        width={200}
        height={160}
        alt="Recipe Creator"
        className="rounded-lg w-[80px] h-[80px] object-cover"
      />
      <div>
        <p className="font-bold">Autor:</p>
        <p className="text-sm">Nombre: {name}</p>
        <p className="text-sm">País: {country}</p>
      </div>
    </div>
  );
};
