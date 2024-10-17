import {
  InputWithLabel,
  MultipleInput,
  SelectWithLabel,
} from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { AddEditSteps } from "../AddEditSteps";
import { TextArea } from "@/modules/core/components/TextArea";
import { Label } from "@/modules/core/components/Label";
import { UploadImage } from "../UploadImage";
import { RECIPE_FORM_FILTERS } from "../../constants";
interface IProps {
  isAdd: boolean;
}

export const FormCreateEditRecipe = ({ isAdd = true }: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <form className="flex flex-col gap-4 items-center  mx-auto mt-8">
      <InputWithLabel
        isAdd={isAdd}
        label="Nombre de Receta*"
        name=""
        type="text"
        placeholder="Ingresa tu nombre de receta"
      />

      <UploadImage
        label="Imagen Principal *"
        labelBtnUpload={isAdd ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        urlImagePreview=""
        name=""
      />

      <SelectWithLabel
        click={() => console.log("Click")}
        withLink={true}
        linkText="Conocer tipos de Receta"
        label="Tipo de Receta*"
        name=""
        isAdd={isAdd}
        placeholder="Selecciona tipo de receta"
        required
        options={[]}
      />
      <UploadImage
        label="[1] Imagen Secundaria (opcional)"
        labelBtnUpload={isAdd ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        urlImagePreview=""
        name=""
      />
      <UploadImage
        label="[2] Imagen Secundaria (opcional)"
        labelBtnUpload={isAdd ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        urlImagePreview=""
        name=""
      />
      <UploadImage
        label="[3] Imagen Secundaria (opcional)"
        labelBtnUpload={isAdd ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        urlImagePreview=""
        name=""
      />

      <TextArea
        isAdd={isAdd}
        label="Descripción de Receta*"
        placeholder="Ingresa tu descripción de receta"
        name=""
        required
      />

      <AddEditSteps isAdd={isAdd} steps={[]} />

      {isAdd ? (
        <MultipleInput label="Tiempo de preparación*" isAdd={isAdd}>
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="col-span-1">
              <InputWithLabel
                isAdd={isAdd}
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
                isAdd={isAdd}
                required
                options={[]}
                placeholder="Selecciona unidad "
              />
            </div>
          </div>
        </MultipleInput>
      ) : (
        <Label
          name="time_prepare"
          value="[1] [Hora]"
          label="Tiempo de Preparación*"
        />
      )}

      <button
        className={`
                    ${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left`}
      >
        Agregar Receta
      </button>
    </form>
  );
};
