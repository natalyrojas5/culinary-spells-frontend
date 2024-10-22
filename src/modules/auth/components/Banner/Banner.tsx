"use client";

import Image from "next/image";
import pumpkin from "@/modules/auth/assets/pumpkin.svg";

import {
  fontJollyLodger,
  fontMali,
  fontMonomaniacOne,
} from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { useModalStore } from "@/modules/core/stores";
import { useAuthenticated } from "@/modules/core/hooks";
import { MODAL } from "@/modules/auth/constants";

export const Banner = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const { isAuthenticated, user } = useAuthenticated();
  const modalToggle = useModalStore((state) => state.toggle);

  const goFeaturedRecipes = () => {
    if (isAuthenticated) {
      const recipesFeatured =
        document.getElementById("recipesFeatured")?.offsetTop;
      window.scrollTo({
        top: recipesFeatured,
        behavior: "smooth",
      });
    } else {
      modalToggle({ isOpen: true, name: MODAL.accessRecipe });
    }
  };

  return (
    <section className="flex gap-8 items-center text-white">
      <Image width={240} height={80} src={pumpkin} alt="Pumpkin" />
      <div>
        <h1
          className={`text-4xl leading-6 font-bold ${fontMonomaniacOne.className} mb-6`}
        >
          Sabor y Magia: Recetas Hechizantes
        </h1>
        <p className={`text-xl leading-7 ${fontMali.className} mb-8`}>
          Descubre recetas embrujadas y delicias espeluznantes para hechizar tu
          cocina en esta noche de Halloween.
        </p>
        {(user?.featuredRecipesExist || !isAuthenticated) && (
          <button
            className={`
          ${size.big} ${type.base} ${fontJollyLodger.className}`}
            onClick={goFeaturedRecipes}
          >
            Conocer recetas destacadas
          </button>
        )}
      </div>
    </section>
  );
};
