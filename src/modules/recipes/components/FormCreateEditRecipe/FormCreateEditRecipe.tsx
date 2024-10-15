import { InputFile, InputWithLabel, MultipleInput, SelectWithLabel } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { AddEditSteps } from "../AddEditSteps";
import { TextArea } from "@/modules/core/components/TextArea";

interface IProps{
    isAdd:boolean
}

export const FormCreateEditRecipe = ({isAdd = true } : IProps) => {
    const {
        goldenYellow: { size, type },
      } = BUTTON;
    return (
        <form className="flex flex-col gap-4 items-center  mx-auto mt-8">
            <InputWithLabel
                label="Nombre de Receta*"
                name=""
                type="text"
                placeholder="Ingresa tu nombre de receta"
            />
            <InputFile
                name=""
                label="Imagen Principal*"
                placeholder="Subir Receta Principal"
            />
            <SelectWithLabel
                label="Tipo de Receta*"
                name=""
                placeholder="Selecciona tipo de receta"
                required
                options={[]}
            />
            <InputFile
                name=""
                label="[1] Imagen Secundaria (opcional)"
                placeholder="Subir Receta Secundaria"
            />
            <InputFile
                name=""
                label="[2] Imagen Secundaria (opcional)"
                placeholder="Subir Receta Secundaria"
            />
            <InputFile
                name=""
                label="[3] Imagen Secundaria (opcional)"
                placeholder="Subir Receta Secundaria"
            />

            <TextArea
                label="Descripción de Receta (opcional)"
                placeholder="Ingresa tu descripción de receta"
                name=""
                required
            />

            <AddEditSteps />

            <MultipleInput label="Tiempo de preparación*">
                <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="col-span-1">
                        <InputWithLabel
                            label=""
                            name=""
                            type="text"
                            placeholder="Ingresa Tiempo"
                        />
                    </div>
                    <div className="col-span-2">
                        <SelectWithLabel
                            label=""
                            name=""
                            required
                            options={[]}
                            placeholder="Selecciona unidad "
                        />
                    </div>
                </div>
            </MultipleInput>

            <button
                    className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left`}
                >
                    Agregar Receta
                </button>
        </form>
    )
}