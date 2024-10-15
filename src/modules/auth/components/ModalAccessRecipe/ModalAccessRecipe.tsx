import { Modal } from "@/modules/core/wrapper";
import { MODAL } from "@/modules/auth/constants";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import Link from "next/link";

export const ModalAccessRecipe = () => {
  const {
    orange: { size, type },
  } = BUTTON;
  return (
    <Modal name={MODAL.accessRecipe} title="Accede a Recetas Exclusivas">
      <aside className="text-center">
        <p className={`text-xl ${fontMali.className} mb-8`}>
        Regístrate ahora para descubrir más recetas deliciosas y acceder a todos los detalles que necesitas para cocinar como un chef.
        </p>
        <Link
          href={PATH.login}
          className={`
          ${size.medium} ${type.base} ${fontJollyLodger.className} mx-auto `}
        >
          Registrarme
        </Link>
      </aside>
    </Modal>
  );
};
