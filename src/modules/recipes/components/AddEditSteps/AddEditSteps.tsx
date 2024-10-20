import { InputWithLabel, MultipleInput } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";

interface IProps {
  isAdd: boolean;
  steps: Array<object>;
}

export const AddEditSteps = ({ isAdd = true, steps = [] }: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <>
      <MultipleInput label="Pasos de preparación*" isAdd={isAdd}>
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="col-span-1">
            <h3 className="text-white text-4xl">[Orden]</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-4xl">[Descripción]</h3>
          </div>
          {(steps.length > 0 || !isAdd) && (
            <div className="col-span-3 flex justify-end items-center gap-4 mb-4">
              <button
                className={`${size.medium} ${type.base} ${fontJollyLodger.className}`}
              >
                Editar
              </button>
              <button
                className={`${size.medium} ${type.base} ${fontJollyLodger.className}`}
              >
                Eliminar 
              </button>
            </div>
          )}
          <div className="col-span-1">
            <InputWithLabel
              isTextWhite={isAdd}
              label=""
              name=""
              type="text"
              placeholder="Ingresa Orden"
            />
          </div>
          <div className="col-span-2">
            <InputWithLabel
              label=""
              isTextWhite={isAdd}
              name=""
              type="text"
              placeholder="Ingresa descripción"
            />
          </div>
        </div>
      </MultipleInput>

      <div className="flex justify-end w-full">
        <button
          className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-2 text-left`}
        >
          Agregar Paso
        </button>
      </div>
    </>
  );
};
