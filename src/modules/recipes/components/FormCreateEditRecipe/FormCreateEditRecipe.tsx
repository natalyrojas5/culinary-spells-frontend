"use client";

import {
  InputWithLabel,
  MultipleInput,
  SelectWithLabel,
} from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { FormStep } from "../FormStep";
import { TextArea } from "@/modules/core/components/TextArea";
import { UploadImage } from "../UploadImage";
import { MODAL, RECIPE_FORM_FILTERS } from "../../constants";
import { useModalStore } from "@/modules/core/stores";
import { IRecipeType } from "../../interfaces";
import { useAddRecipe } from "../../hooks";
interface IProps {
  isAdd: boolean;
  typesRecipes: IRecipeType[];
}

export const FormCreateEditRecipe = ({
  isAdd = true,
  typesRecipes,
}: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const { toggle } = useModalStore();

  const formatRecipeTypes = typesRecipes?.map((type) => ({
    text: type.name,
    value: String(type.idRecipeType),
  }));

  const openModalTypes = () => {
    toggle({ name: MODAL.recipeTypes, isOpen: true });
  };

  const { name, description, recipeType, timeUnit, timeNum, handleChange } =
    useAddRecipe();

  return (
    <form className="flex flex-col gap-4 items-center  mx-auto mt-8">
      <InputWithLabel
        isTextWhite={isAdd}
        label="Nombre de Receta*"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
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
        linkClick={openModalTypes}
        withLink={true}
        linkText="Conocer tipos de Receta"
        label="Tipo de Receta*"
        name="recipeType"
        value={recipeType}
        isTextWhite={isAdd}
        placeholder="Selecciona tipo de receta"
        required
        options={formatRecipeTypes}
        onChange={handleChange}
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
        isTextWhite={isAdd}
        label="Descripción de Receta*"
        placeholder="Ingresa tu descripción de receta"
        name="description"
        value={description}
        required
        onChange={handleChange}
      />

      <FormStep isAdd={isAdd} />

      <MultipleInput label="Tiempo de preparación*" isAdd={isAdd}>
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="col-span-1">
            <InputWithLabel
              isTextWhite={isAdd}
              label=""
              name="timeNum"
              type="text"
              placeholder="Ingresa Tiempo"
              value={timeNum}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <SelectWithLabel
              label=""
              name="timeUnit"
              isTextWhite={isAdd}
              required
              options={[
                { text: "Minutos", value: "min" },
                { text: "Horas", value: "hour" },
              ]}
              placeholder="Selecciona unidad "
              value={timeUnit}
              onChange={handleChange}
            />
          </div>
        </div>
      </MultipleInput>

      <button
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left`}
      >
        Agregar Receta
      </button>
    </form>
  );
};
