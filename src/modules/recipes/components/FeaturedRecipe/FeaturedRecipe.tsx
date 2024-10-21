import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { GiPodiumWinner } from "react-icons/gi";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { RecipeCreatorSmall } from "../RecipeCreatorSmall";
import { getRecipeFeaturedService } from "../../actions";
import { IGetRecipeFeaturedResponse } from "../../interfaces";
import Link from "next/link";
import { PATH } from "../../constants";

export const FeaturedRecipe = async () => {
  const {
    purple: { size, type },
  } = BUTTON;
  try {
    const responseRecipeFeatured: IGetRecipeFeaturedResponse =
      await getRecipeFeaturedService();

    const isOk = responseRecipeFeatured?.isOk;
    const recipeFeatured = responseRecipeFeatured?.data[0] || {};

    if (isOk && recipeFeatured) {
      const firtImage = recipeFeatured.images[0]?.link;
      const hasImage = firtImage?.startsWith("http");

      const {
        name = "Nombre de receta no disponible",
        count = 0,
        detail = "Descripción no disponible",
        idRecipe,
        user: {
          name: userName = "Desconocido",
          lastname: userLastname = "Usuario",
          countryName = "País no especificado",
        } = {},
      } = recipeFeatured;
      return (
        <section className="flex gap-8 items-center mt-10 p-8 border-4 bg-golden-yellow rounded-lg c-border-golden-yellow">
          <Image
            src={hasImage ? firtImage : empty}
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
              <h3 className="text-center leading-6 text-2xl mb-2">
                Votos: {count}
              </h3>
            </header>
            <div className="text-black text-md flex gap-2 flex-col mt-6">
              <p className="font-bold text-2xl">{name}</p>
              <p>{detail}</p>
            </div>
            <RecipeCreatorSmall
              name={`${userName} ${userLastname}`}
              country={countryName}
            />
            <div className="flex justify-end">
              <Link
                href={`${PATH.recipeDetail}/${idRecipe}`}
                className={`${size.medium} ${type.base} ${fontJollyLodger.className} mt-3`}
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </section>
      );
    }
  } catch (error) {
    console.error(error);
  }
};
