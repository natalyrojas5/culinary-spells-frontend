/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@/modules/core/hooks";
import { formatErrors } from "@/modules/core/utils";
import { SchemaCreateEditRecipe } from "../schemas";
import { getCldImageUrl } from "next-cloudinary";
import { CreateRecipe } from "../actions";
// import { IRegisterUser } from "../interfaces";

interface Step {
  name: string;
  detail: string;
  orderNum: string;
}

export const useRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange } = useForm({
    name: "",
    detail: "",
    cookingTime: "",
    recipeTypes: "",
    detailStep: "",
    orderStep: ""
  });

  interface IRecipe {
    name: string;
    detail: string;
    recipeTypes: string;
    cookingTime: string;
    steps: Array<Step>;
  }
  interface IData {
    recipe: IRecipe;
    majorImageIndex?: string;
    // images?: Array<Blob>;

  }

  let dataForm: IData = {
    recipe: {
      name: "",
      detail: "",
      recipeTypes: "",
      cookingTime: "",
      steps: [],
    }
  };

  const [imagesPreview, setImagesPreview] = useState([
    { id: "", imageUrl: "", name: "" },
    { id: "", imageUrl: "", name: "" },
    { id: "", imageUrl: "", name: "" },
    { id: "", imageUrl: "", name: "" },
  ]);

  const [steps, setSteps] = useState(Array<Step>);

  const [images, setImages] = useState([]);

  const getImagesBlob = async () => {
    // const images = Object.values(imagesPreview).filter((image) => {
    //   return image.id !== "" && image.imageUrl !== "";
    // });

    // const imagesBlob: Blob[] = [];
    // for (let i = 0; i < images.length; i++) {
    //   const canvas: HTMLCanvasElement = document.createElement("canvas");
    //   const ctx: CanvasRenderingContext2D = canvas.getContext(
    //     "2d"
    //   ) as CanvasRenderingContext2D;
    //   const img = document.getElementById(images[i].name) as HTMLImageElement;
    //   ctx.drawImage(img, 0, 0);
    //   canvas.width = img.width;
    //   canvas.height = img.height;
    //   const blob: Blob = await new Promise((resolve, reject) => {
    //     canvas.toBlob((blob) => {
    //       if (blob) {
    //         resolve(blob);
    //       } else {
    //         reject(new Error("No se pudo convertir la imagen a Blob"));
    //       }
    //     }, "image/jpeg"); // Puedes cambiar el tipo de imagen si es necesario
    //   });
    //   imagesBlob.push(blob);
    // }
    // return imagesBlob;
  };

  const getValuesRecipeForm = async () => {
    const infoData = {
      recipe: {
        name: values.name,
        detail: values.detail,
        recipeTypes: values.recipeTypes,
        cookingTime: values.cookingTime,
        steps: steps
      },
      // images: await getImagesBlob(),
      // majorImageIndex: "0",
    };
    return infoData;
  };

  const isFormValid = async () => {
    const infoData = await getValuesRecipeForm();
    const infoValidate = SchemaCreateEditRecipe.safeParse(infoData);
    dataForm = infoData;
    if (!infoValidate.success) {
      const formattedErrors = formatErrors(infoValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return false;
    }

    return true;
  };

  const createEdit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const isValid = await isFormValid();

  if (!isValid) return;
  console.log(dataForm)
  // setIsLoading(true);
  const formData = new FormData();
  formData.append("recipe", '"'+JSON.stringify(dataForm.recipe)+'"');
  // formData.append("recipe[detail]", dataForm.recipe.detail);
  // formData.append("recipe[recipeTypes]", dataForm.recipe.recipeTypes.toString());
  // formData.append("recipe[cookingTime]", dataForm.recipe.cookingTime.toString());

  // dataForm.recipe.steps.forEach((step, index) => {
  //     formData.append(`recipe[steps][${index}][name]`, step.name);
  //     formData.append(`recipe[steps][${index}][detail]`, step.detail);
  //     formData.append(`recipe[steps][${index}][orderNum]`, step.orderNum);
  // });
  // dataForm.recipe.images.forEach((image, index) => {
  //     formData.append(`images[${index}]`, image);
  // });

  // formData.append("majorImageIndex", dataForm.majorImageIndex.toString());
    const { isOk, data } = await CreateRecipe();
    // resetForm()
  };

  const cleanFormStep = () => {
    values.orderStep = "";
    values.detailStep = "";
  };

  const deleteStep = (orderNum: string) => {
    setSteps((steps) => {
      return steps.filter((step) => step.orderNum !== orderNum);
    });
  };

  const getImagePromt = (prompt: string, idImage: string) => {
    const urlNewPhoto = getCldImageUrl({
      src: idImage,
      replaceBackground: prompt,
    });

    const updatedItems = Object.values(imagesPreview).map((image) =>
      image.id === idImage ? { id: idImage, imageUrl: urlNewPhoto } : image
    ) as any;

    setImagesPreview(updatedItems);
    toast.success(
      "Imagen subida para modificar espere un momento a que cargue la nueva imagen generada",
      {
        position: "top-right",
      }
    );
  };

  const addStep = () => {
    const newSteps = [
      ...steps,
      {
        name: "test" + steps.length,
        detail: values.detailStep,
        orderNum: values.orderStep,
      },
    ];
    setSteps(newSteps as any);
    cleanFormStep();
  };

  return {
    createEdit,
    isFormValid,
    values,
    isLoading,
    handleChange,
    images,
    setImages,
    setIsLoading,
    addStep,
    imagesPreview,
    setImagesPreview,
    steps,
    setSteps,
    deleteStep,
    getImagePromt,
  };
};
