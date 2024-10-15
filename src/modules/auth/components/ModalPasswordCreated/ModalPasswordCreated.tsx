import { Modal } from "@/modules/core/wrapper";
import { MODAL } from "@/modules/auth/constants";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import Link from "next/link";

export const ModalPasswordCreated = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <Modal name={MODAL.passwordCreated} title="Contraseña creada">
      <aside className="text-center">
        <p className={`text-xl ${fontMali.className} mb-8`}>
          Tu contraseña se creó correctamente.
        </p>
        <Link
          href={PATH.login}
          className={`
          ${size.medium} ${type.base} ${fontJollyLodger.className} mx-auto `}
        >
          Ir a Inicio de Sesión
        </Link>
      </aside>
    </Modal>
  );
};
