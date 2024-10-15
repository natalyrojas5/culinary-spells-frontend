import { InputWithLabel, MultipleInput } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";


export const AddEditSteps = () => {
    const {
        goldenYellow: { size, type },
      } = BUTTON;
    return (
        <>
            <MultipleInput label="Pasos de preparación*">
                <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="col-span-1">
                        <InputWithLabel
                            label=""
                            name=""
                            type="text"
                            placeholder="Ingresa Orden"
                        />
                    </div>
                    <div className="col-span-2">
                        <InputWithLabel
                            label=""
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
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left`}
                >
                    Agregar Paso
                </button>
            </div>
        </>
    )
}