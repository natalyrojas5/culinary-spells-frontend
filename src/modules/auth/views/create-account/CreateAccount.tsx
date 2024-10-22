import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormCreateAccount } from "@/modules/auth/components";

import { PATH } from "@/modules/auth/constants";
import Link from "next/link";
import { getCountriesService } from "@/modules/core/actions";

export const ViewCreateAccount = async () => {
  const { data } = await getCountriesService();

  const countries = data?.map(({ idCountry, niceName }) => ({
    value: idCountry,
    text: niceName,
  }));

  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Registro de Cuenta </h1>
        <Link
          href={`/${PATH.login}`}
          className="c-txt-golden-yellow text-3xl underline"
        >
          Iniciar Sesión
        </Link>
      </header>

      <FormCreateAccount countries={countries} />
    </section>
  );
};
