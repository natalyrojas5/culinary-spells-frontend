import Image from "next/image";
import pumpkin from "@/modules/auth/assets/pumpkin.svg";

import {
  fontJollyLodger,
  fontMali,
  fontMonomaniacOne,
} from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";

export const Banner = () => {
  const {
    orange: { size, type },
  } = BUTTON;

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
        <button
          className={`
          ${size.big} ${type.base} ${fontJollyLodger.className}`}
        >
          Conocer recetas destacadas
        </button>
      </div>
    </section>
  );
};
