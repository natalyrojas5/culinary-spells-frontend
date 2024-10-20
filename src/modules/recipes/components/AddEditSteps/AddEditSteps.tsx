/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputWithLabel, MultipleInput } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";

interface Step{
  name: string;
  detail: string;
  orderNum: string
}

interface IProps {
  isAdd: boolean;
  addStep?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStep: (orderNum:string , e: React.ChangeEvent<HTMLInputElement>) => void;
  steps: Array<Step>;
  orderStep: string;
  deleteStep: (orderNum: string) => void
  detailStep: string;
}

export const AddEditSteps = ({ isAdd = true, steps, orderStep, detailStep, onChange, addStep , onChangeStep , deleteStep }: IProps) => {
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
            steps.map((step) => {
              return (
                <div key={step.orderNum} className="col-span-3 grid grid-cols-3 gap-2 w-full">
                  <div className="col-span-1">
                    <InputWithLabel
                      isTextWhite={isAdd}
                      label=""
                      name="orderNum"
                      value={step.orderNum}
                      onChange={(e) => onChangeStep(step.orderNum , e)}
                      type="number"
                      placeholder="Ingresa Orden"
                    />
                  </div>
                  <div className="col-span-2">
                    <InputWithLabel
                      label=""
                      isTextWhite={isAdd}
                      name="detail"
                      onChange={(e) => onChangeStep(step.orderNum,e)}
                      value={step.detail}
                      type="text"
                      placeholder="Ingresa descripción"
                    />
                  </div>
                  <div className="col-span-3 flex justify-end items-center gap-4 my-2">
                    {/* <button
                      type="button"
                      className={`${size.medium} ${type.base} ${fontJollyLodger.className}`}
                    >
                      Editar
                    </button> */}
                    <button
                      type="button"
                      className={`${size.medium} ${type.base} ${fontJollyLodger.className}`}
                      onClick={() =>deleteStep(step.orderNum)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              )
            })
          )}
          <div className="col-span-1">
            <InputWithLabel
              isTextWhite={isAdd}
              label=""
              name="orderStep"
              value={orderStep}
              onChange={onChange}
              type="number"
              placeholder="Ingresa Orden"
            />
          </div>
          <div className="col-span-2">
            <InputWithLabel
              label=""
              isTextWhite={isAdd}
              name="detailStep"
              onChange={onChange}
              value={detailStep}
              type="text"
              placeholder="Ingresa descripción"
            />
          </div>
        </div>
      </MultipleInput>

      <div className="flex justify-end w-full">
        <button
          onClick={addStep}
          type="button"
          className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-2 text-left`}
        >
          Agregar Paso
        </button>
      </div>
    </>
  );
};
