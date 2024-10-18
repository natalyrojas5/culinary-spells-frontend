import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";

interface IProps {
  name: string;
  score: number;
}

export const RecipeBanner = ({ name, score }: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <aside className="flex gap-4 items-center">
      <Image
        src={empty}
        width={800}
        height={50}
        alt=""
        className="rounded-lg w-[800px] h-[260px] object-cover"
      />
      <div
        className={`flex flex-col items-center gap-3 w-full ${fontMali.className}`}
      >
        <h1 className="font-extrabold text-4xl c-txt-golden-yellow">
          {name}
        </h1>
        <p className="font-semibold text-2xl leading-4 text-white">
          Cantidad de votos: {score}
        </p>
        <button
          className={`
          ${size.big} ${type.base} ${fontJollyLodger.className} mt-6`}
        >
          Destacar Receta
        </button>
      </div>
    </aside>
  );
};
