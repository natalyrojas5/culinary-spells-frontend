/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@/modules/core/hooks";
import { formatErrors } from "@/modules/core/utils";
import { SchemaAddStepRecipe, SchemaCreateEditRecipe } from "../schemas";
import { getCldImageUrl } from "next-cloudinary";
// import { registerUserService } from "../actions";
// import { IRegisterUser } from "../interfaces";

interface Step{
  name: string;
  detail: string;
  orderNum: string
}

export const useRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    name: "",
    detail: "",
    cookingTime: "",
    recipeTypes: "",
    detailStep: "",
    orderStep:""
  });

  let dataForm = { }
  const [imagesPreview, setImagesPreview] = useState([
    { id:  ""  , imageUrl: "" , name : ""},
    { id : "" ,imageUrl: "" , name : ""},
    { id : "", imageUrl: "" , name : ""},
    { id: "" ,imageUrl: "" , name : ""}
  ])


  const [steps , setSteps] = useState(Array<Step>)

  const [images , setImages] = useState([])

  const getImagesBlob = () => {
    const images = Object.values(imagesPreview).filter((image) => {
      return image.id !== "" && image.imageUrl !== ""
    })

    return []
  }

  const getValuesRecipeForm = () =>{
    const infoData = {
      recipe : {
        name:values.name,
        detail:values.detail,
        recipeTypes: values.recipeTypes,
        cookingTime: values.cookingTime,
        steps:[...steps],
        images: getImagesBlob()
      },
      majorImageIndex:"0"
    }
    dataForm = infoData
    return infoData
  }

  const isFormValid = (type:string) => {
    const infoValidate = type === "step" ? SchemaAddStepRecipe.safeParse({
      detailStep : values.detailStep,
      orderStep: values.orderStep
    }) : SchemaCreateEditRecipe.safeParse(getValuesRecipeForm())

    console.log(dataForm)
    console.log(infoValidate)

    if (!infoValidate.success) {
      const formattedErrors = formatErrors(infoValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return false;
    }

    return true;
  };


  const createEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = isFormValid("recipe")

    if(!isValid) return

    setIsLoading(true);
    // resetForm()
  }

  const cleanFormStep = () =>{
    values.orderStep = ""
    values.detailStep = ""
  }

  const deleteStep = (orderNum:string) =>{
    setSteps(steps => {
        return steps.filter((step) => step.orderNum !== orderNum)
    })
  }

  const getImagePromt = (prompt:string,idImage:string) => {
    const urlNewPhoto = getCldImageUrl({
      src:idImage,
      replaceBackground: prompt,
    })

    const updatedItems = Object.values(imagesPreview).map(image => image.id === idImage ? { id: idImage , imageUrl : urlNewPhoto } : image)

    setImagesPreview(updatedItems)
    toast.success("Imagen subida para modificar espere un momento a que cargue la nueva imagen generada", {
      position: "top-right",
    });
  }

  const addStep = () =>{
    const isValid = isFormValid("step")
    if(!isValid) return

    const newSteps = [...steps , {
      name: "test"+steps.length,
      detail:values.detailStep,
      orderNum: values.orderStep
    }]
    setSteps(newSteps as any)
    cleanFormStep()
  }

  return { createEdit, isFormValid, values, isLoading, handleChange, images, setImages , setIsLoading , addStep , imagesPreview , setImagesPreview , steps , setSteps , deleteStep , getImagePromt };
};
