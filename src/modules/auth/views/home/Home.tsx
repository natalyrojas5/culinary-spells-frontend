import Image from "next/image";
import Link from "next/link";
import {
  fontJollyLodger,
  fontMali,
  fontMonomaniacOne,
} from "@/modules/core/utils";
import mr_pumpkin from "@/modules/auth/assets/mr_pumpkin.svg";
import pumpkins from "@/modules/auth/assets/pumpkins.svg";
import { BUTTON } from "@/modules/core/constants";
import { PATH } from "@/modules/auth/constants";

export const ViewHome = () => {
  const {
    orange: { size, type },
  } = BUTTON;
  return (
    <section className="text-white flex gap-4 items-center">
      <div>
        <h1 className={`text-4xl ${fontMonomaniacOne.className} mb-4`}>
          Recetas que Encantan y Aterrorizan
        </h1>
        <p className={`text-md ${fontMali.className} mb-4`}>
          Descubre las recetas más espeluznantes y deliciosas para Halloween.
          <br />
          Desde postres embrujados hasta bebidas macabras, encuentra platos
          <br /> únicos que harán de tu mesa un verdadero festín de terror.
        </p>
        <Link
          className={`
          ${size.medium} ${type.base} ${fontJollyLodger.className}`}
          href={PATH.recipes}
        >
          Conocer recetas
        </Link>
        <Image src={pumpkins} width={620} height={200} alt="Pumpkins" />
      </div>
      <Image src={mr_pumpkin} width={320} height={200} alt="Mr. Pumpkin" />
    </section>
  );
};
