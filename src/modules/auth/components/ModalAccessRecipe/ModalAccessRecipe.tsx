"use client";

import { Modal } from "@/modules/core/wrapper";
import { MODAL } from "@/modules/auth/constants";
import { fontJollyLodger, fontMali } from "@/modules/core/utils";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/modules/core/stores";

export const ModalAccessRecipe = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const router = useRouter();
  const modalToggle = useModalStore((state) => state.toggle);

  const onRegister = () => {
    router.push(`/${PATH.createAccount}`);
    modalToggle({ isOpen: false, name: "" });
  };

  return (
    <Modal name={MODAL.accessRecipe} title="Accede a Recetas Exclusivas">
      <aside className="text-center">
        <p className={`text-xl ${fontMali.className} mb-8`}>
          Regístrate ahora para descubrir más recetas deliciosas y acceder a
          todos los detalles que necesitas para cocinar como un chef.
        </p>
        <button
          onClick={onRegister}
          className={`
          ${size.big} ${type.base} ${fontJollyLodger.className} mx-auto `}
        >
          Registrarme
        </button>
      </aside>
    </Modal>
  );
};
