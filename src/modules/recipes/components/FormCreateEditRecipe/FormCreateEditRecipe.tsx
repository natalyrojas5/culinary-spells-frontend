"use client";
import { useEffect } from "react";
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
import { MODAL } from "../../constants";
import { useModalStore } from "@/modules/core/stores";
import { IRecipeType } from "../../interfaces";
import { useAddRecipe } from "../../hooks";
import { CloudinaryUploadWidgetInfo } from "next-cloudinary";
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

  const { name, description, recipeType, timeUnit, timeNum, handleChange , imagesPreview , getImagePromt , setImagesPreview , createRecipe , isLoading , setIsAddView} =
    useAddRecipe();


  useEffect(() => {
    setIsAddView(isAdd)
    // if(!isAdd)
    //   getInfoRecipe()
  },[])
  
  return (
    <form className="flex flex-col gap-4 items-center  mx-auto mt-8" onSubmit={createRecipe}>
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
        labelBtnUpload={imagesPreview[0].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}        isAdd={isAdd}
        imageInfo={imagesPreview[0]}
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage,"image1")}
        name="image1"
        saveImage={(value: CloudinaryUploadWidgetInfo ,name: string) => {
          imagesPreview[0].id = value.public_id
          imagesPreview[0].imageUrl = value.url
          imagesPreview[0].name = name
          setImagesPreview((prevState) => {
            return prevState.map((image) => image.name === name ? { id : value.public_id , imageUrl : value.url , name : name } : image  );
          })
        }}
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
        labelBtnUpload={imagesPreview[1].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}        isAdd={isAdd}
        name="image2"
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage, "image2")}
        imageInfo={imagesPreview[1]}
        saveImage={(value: CloudinaryUploadWidgetInfo , name:string) => {
          imagesPreview[1].id = value.public_id
          imagesPreview[1].imageUrl = value.url
          imagesPreview[1].name = name
          setImagesPreview((prevState) => {
            return prevState.map((image) => image.name === name ? { id : value.public_id , imageUrl : value.url , name : name } : image);
          })
        }}
  
      />
      <UploadImage
        label="[2] Imagen Secundaria (opcional)"
        labelBtnUpload={imagesPreview[2].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}        isAdd={isAdd}
        name="image3"
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage, "image3")}
        imageInfo={imagesPreview[2]}
        saveImage={(value: CloudinaryUploadWidgetInfo , name:string) => {
          imagesPreview[2].id = value.public_id
          imagesPreview[2].imageUrl = value.url
          imagesPreview[2].name = name
          setImagesPreview((prevState) => {
            return prevState.map((image) => image.name === name ? { id : value.public_id , imageUrl : value.url , name : name } : image);
          })
        }}
      />
      <UploadImage
        label="[3] Imagen Secundaria (opcional)"
        labelBtnUpload={imagesPreview[3].imageUrl === "" ? "Subir Foto" : "Cambiar Foto"}        isAdd={isAdd}
        name="image4"
        getImagePrompt={(prompt,idImage) => getImagePromt(prompt,idImage, "image4")}
        imageInfo={imagesPreview[3]}
        saveImage={(value: CloudinaryUploadWidgetInfo , name:string) => {
          imagesPreview[3].id = value.public_id
          imagesPreview[3].imageUrl = value.url
          imagesPreview[3].name = name
          setImagesPreview((prevState) => {
            return prevState.map((image) => image.name === name ? { id : value.public_id , imageUrl : value.url , name : name } : image);
          })
        }}
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
        type="submit"
        disabled={isLoading}
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-6 text-left ${isLoading ? 'opacity-50' : ''}`}
      >
        {isAdd ? 'Agregar Receta' : 'Editar Receta'}
      </button>
    </form>
  );
};
