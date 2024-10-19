import { fontMali } from "@/modules/core/utils";
import { Modal } from "@/modules/core/wrapper";
import { MODAL } from "../../constants";
import { getRecipeTypes } from "../../actions";

export const ModalRecipeTypes = async () => {
  try {
    const response = await getRecipeTypes();
    const isOk = response?.isOk;
    const types = response?.data;

    if (isOk) {
      return (
        <Modal name={MODAL.recipeTypes} title="Tipos de Recetas">
          {types.map(({ name, detail = "Sin descripción", idRecipeType }) => (
            <aside
              className={`text-xl ${fontMali.className} mb-3`}
              key={idRecipeType}
            >
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-base">{detail}</p>
            </aside>
          ))}
        </Modal>
      );
    } else {
      return (
        <Modal name={MODAL.recipeTypes} title="Tipos de Recetas">
          <p className={`text-xl ${fontMali.className}`}>
            No se encontro tipos de recetas
          </p>
          <pre>{JSON.stringify(types, null, 3)}</pre>
        </Modal>
      );
    }
  } catch (error) {
    console.error(error);
    return (
      <Modal name={MODAL.recipeTypes} title="Tipos de Recetas">
        <p className={`text-xl ${fontMali.className}`}>
          No se pueden cargar los detalles de la receta en este momento.
        </p>
      </Modal>
    );
  }
};
