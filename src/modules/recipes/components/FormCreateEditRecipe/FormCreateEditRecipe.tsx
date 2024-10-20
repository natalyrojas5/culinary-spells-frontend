"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  InputWithLabel,
  MultipleInput,
  SelectWithLabel,
} from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { AddEditSteps } from "../AddEditSteps";
import { TextArea } from "@/modules/core/components/TextArea";
import { UploadImage } from "../UploadImage";
import { MODAL, RECIPE_FORM_FILTERS } from "../../constants";
import { useModalStore } from "@/modules/core/stores";
import { useRecipe } from "../../hooks";
interface IProps {
  isAdd: boolean;
  typesRecipes : Array<Options>
}

interface Options {
  value: number | string;
  text: string;
}

export const FormCreateEditRecipe = ({ isAdd = true , typesRecipes}: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const { toggle } = useModalStore();
  const { createEdit, handleChange, values , imagesPreview , setImagesPreview , isLoading  , addStep , steps , setSteps , deleteStep , getImagePromt } = useRecipe();

  const openModalTypes = () => {
    toggle({ name: MODAL.recipeTypes, isOpen: true });
  };

  return (
    <form className="flex flex-col gap-4 items-center  mx-auto mt-8" onSubmit={createEdit}>
      <InputWithLabel
        isTextWhite={isAdd}
        label="Nombre de Receta*"
        name="name"
        type="text"
        onChange={handleChange}
        placeholder="Ingresa tu nombre de receta"
        value={values.name}
      />

      <UploadImage
        label="Imagen Principal *"
        labelBtnUpload={imagesPreview[0].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        name="image1"
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage)}
        imageInfo={imagesPreview[0]}
        saveImage={(value: any,name: string) => {
          imagesPreview[0].id = value.public_id
          imagesPreview[0].imageUrl = value.url
          imagesPreview[0].name = name
          setImagesPreview({
            ...imagesPreview,
          })
        }}
      />

      <SelectWithLabel
        linkClick={openModalTypes}
        withLink={true}
        linkText="Conocer tipos de Receta"
        label="Tipo de Receta*"
        name="recipeTypes"
        value={values.recipeTypes}
        onChange={handleChange}
        isTextWhite={isAdd}
        placeholder="Selecciona tipo de receta"
        // required
        options={typesRecipes}

      />
      <UploadImage
        label="[1] Imagen Secundaria (opcional)"
        labelBtnUpload={imagesPreview[1].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        name="image2"
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage)}
        imageInfo={imagesPreview[1]}
        saveImage={(value: any , name:string) => {
          imagesPreview[1].id = value.public_id
          imagesPreview[1].imageUrl = value.url
          imagesPreview[1].name = name
          setImagesPreview({
            ...imagesPreview,
          })
        }}
      />
      <UploadImage
        label="[2] Imagen Secundaria (opcional)"
        labelBtnUpload={imagesPreview[2].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage)}
        name="image3" 
        imageInfo={imagesPreview[2]}
        saveImage={(value: any,name : string) => {
          imagesPreview[2].id = value.public_id
          imagesPreview[2].imageUrl = value.url
          imagesPreview[2].name = name
          setImagesPreview({
            ...imagesPreview,
          })
        }}
      />
      <UploadImage
        label="[3] Imagen Secundaria (opcional)"
        labelBtnUpload={imagesPreview[3].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}
        isAdd={isAdd}
        filters={RECIPE_FORM_FILTERS}
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage)}
        name="image4"
        imageInfo={imagesPreview[3]}
        saveImage={(value: any , name: string) => {
          imagesPreview[3].id = value.public_id
          imagesPreview[3].imageUrl = value.url
          imagesPreview[3].name = name
          setImagesPreview({
            ...imagesPreview,
          })
        }}
      />

      <TextArea
        isTextWhite={isAdd}
        label="Descripción de Receta*"
        placeholder="Ingresa tu descripción de receta"
        name="detail"
        onChange={handleChange}
        value={values.detail}
        required
      />

      <AddEditSteps isAdd={isAdd} steps={steps} orderStep={values.orderStep} detailStep={values.detailStep} onChange={(e) => {
        handleChange(e)
      }}
      deleteStep={(orderNum) => deleteStep(orderNum)}
      onChangeStep={(orderNum,e) =>{
        const { name  , value} = e.target
        setSteps((prevState) => {
          return prevState.map((step) => step.orderNum === orderNum ? { ...step, [name]: value } : step);
        })
      }}
      addStep={addStep}
      />

      <MultipleInput label="Tiempo de preparación*" isAdd={isAdd}>
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="col-span-1">
            <InputWithLabel
              isTextWhite={isAdd}
              label=""
              name="cookingTime"
              type="text"
              onChange={handleChange}
              value={values.cookingTime}
              placeholder="Ingresa Tiempo"
            />
          </div>
          <div className="col-span-2">
            <SelectWithLabel
              label=""
              name=""
              isTextWhite={isAdd}
              required
              options={[
                { text: "Minutos", value: "min" },
                { text: "Horas", value: "hour" },
              ]}
              placeholder="Selecciona unidad "
            />
          </div>
        </div>
      </MultipleInput>

      <button
        type="submit"
        disabled={isLoading}
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left ${isLoading ? 'opacity-50' : ''}`}
      >
        {isAdd ? 'Agregar Receta' : 'Editar Receta'}
      </button>
    </form>
  );
};
