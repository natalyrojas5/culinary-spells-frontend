import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { GiPodiumWinner } from "react-icons/gi";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { RecipeCreatorSmall } from "../RecipeCreatorSmall";

export const FeaturedRecipe = () => {
  const {
    purple: { size, type },
  } = BUTTON;
  return (
    <section className="flex gap-8 items-center mt-10 p-8 border-4 bg-orange rounded-lg c-border-orange">
      <Image
        src={empty}
        width={900}
        height={200}
        alt="Recipe"
        className="rounded-lg w-[740px] h-[300px] object-cover"
      />
      <div className="w-full">
        <header
          className={`text-black text-center ${fontMonomaniacOne.className}`}
        >
          <div className="flex gap-2 justify-center items-center">
            <GiPodiumWinner size={35} />
            <h2 className="text-4xl font-semibold">Receta Destacada</h2>
          </div>
          <h3 className="text-center leading-6 text-2xl mb-2">Votos: 2000</h3>
        </header>
        <div className="text-black text-md flex gap-2 flex-col mt-6">
          <p>[Nombre de Receta]</p>
          <p>[Descripción de Receta]</p>
        </div>
        <RecipeCreatorSmall name="Puddito" country="Perú" />
        <div className="flex justify-end">
          <button
            className={`${size.medium} ${type.base} ${fontJollyLodger.className} mt-3`}
          >
            Ver detalle
          </button>
        </div>
      </div>
    </section>
  );
};
