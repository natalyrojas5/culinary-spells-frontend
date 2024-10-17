import { InputWithLabel, MultipleInput } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";


interface IProps{
    isAdd: boolean;
    steps:Array<object>
}

export const AddEditSteps = ({
    isAdd = true,
    steps = []
} : IProps) => {
    const {
        goldenYellow: { size, type },
      } = BUTTON;
    return (
        <>  
            <MultipleInput label="Pasos de preparación*" isAdd={isAdd}>
                <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="col-span-1">
                        <h3 className="text-white text-4xl">
                            [Orden]
                        </h3>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-white text-4xl">
                            [Descripción]
                        </h3>
                    </div>
                    {(steps.length > 0 || !isAdd) &&
                        <div className="col-span-3 flex justify-end gap-2">
                            <button
                                className={`text-center btn bg-golden-yellow  text-black rounded-2xl px-8 py-3 my-4 text-2xl ${size.medium}`}
                            >
                                Editar Paso
                            </button>
                            <button
                                className={`text-center btn bg-golden-yellow  text-black rounded-2xl px-8 py-3 my-4 text-2xl ${size.medium}`}
                            >
                                Eliminar Paso
                            </button>
                        </div>
                    }
                    <div className="col-span-1">
                        <InputWithLabel
                            isAdd={isAdd}
                            label=""
                            name=""
                            type="text"
                            placeholder="Ingresa Orden"
                        />
                    </div>
                    <div className="col-span-2">
                        <InputWithLabel
                            label=""
                            isAdd={isAdd}
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