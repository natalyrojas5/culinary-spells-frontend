import { InputWithLabel, MultipleInput } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { useRecipeStep } from "../../hooks";
import { Step } from "./Step";

interface IProps {
  isAdd: boolean;
}

export const FormStep = ({ isAdd = true }: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const { handleChange, currentStep, steps, addStep, resetSteps } =
    useRecipeStep();
  const hasSteps = steps.length > 0;
  return (
    <>
      <MultipleInput label="Pasos de preparación*" isAdd={isAdd}>
        {hasSteps &&
          steps.map((step) => <Step {...step} key={crypto.randomUUID()} />)}

        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="col-span-1">
            <InputWithLabel
              isTextWhite={isAdd}
              label=""
              name="orderNum"
              onChange={handleChange}
              value={
                currentStep.orderNum
                  ? currentStep.orderNum
                  : String(steps.length + 1)
              }
              type="text"
              placeholder="Ingresa Orden"
              disabled
            />
          </div>
          <div className="col-span-2">
            <InputWithLabel
              label=""
              isTextWhite={isAdd}
              name="detail"
              type="text"
              onChange={handleChange}
              value={currentStep?.detail}
              placeholder="Ingresa descripción"
            />
          </div>
        </div>
      </MultipleInput>

      <div className="flex gap-4 justify-end w-full">
        <button
          type="button"
          onClick={addStep}
          className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-2 text-left`}
        >
          Agregar Paso
        </button>
        {hasSteps && (
          <button
            type="button"
            onClick={resetSteps}
            className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-2 text-left`}
          >
            Resetear Pasos
          </button>
        )}
      </div>
    </>
  );
};
