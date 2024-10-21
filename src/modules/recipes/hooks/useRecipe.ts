'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@/modules/core/hooks";
import { formatErrors } from "@/modules/core/utils";
import { SchemaCreateEditRecipe } from "../schemas";
import { getCldImageUrl } from "next-cloudinary";
import { CreateRecipe } from "../actions";
import { useRouter } from "next/navigation";
import { PATH } from "../constants";
// import { IRegisterUser } from "../interfaces";

interface Step {
  name: string;
  detail: string;
  orderNum: string;
}

export const useRecipe = () => {
  const router = useRouter()
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
    majorImageIndex: string;
    images: Array<Blob>;

  }

  let dataForm: IData = {
    recipe: {
      name: "",
      detail: "",
      recipeTypes: "",
      cookingTime: "",
      steps: [],
    },
    images:[],
    majorImageIndex:""
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
    const images = Object.values(imagesPreview).filter((image) => {
      return image.id !== "" && image.imageUrl !== "";
    });

    const imagesBlob: Blob[] = [];
    for (let i = 0; i < images.length; i++) {
      const img = document.getElementById(images[i].name) as HTMLImageElement
      const canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
      const ctx: CanvasRenderingContext2D = canvas.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      console.log(images[i])
      console.log(img)
      if (img.complete) {
        const imgRect = img.getBoundingClientRect()
        canvas.width = imgRect.width;
        canvas.height = imgRect.height;
        // Dibujar la imagen en el canvas
        ctx?.drawImage(img, 0, 0, imgRect.width, imgRect.height);
        // Convertir el contenido del canvas a un Blob
        const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/png');
        });

        if (blob) {
            const imageUrl = URL.createObjectURL(blob);
            console.log(imageUrl)
            imagesBlob.push(blob)
            
        } else {
            console.error("No se pudo convertir la imagen a Blob");
        }
      } else {
          console.error("La imagen aún no se ha cargado completamente.");
      } 
    }
    return imagesBlob;
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
      images: await getImagesBlob(),
      majorImageIndex: "0",
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
  setIsLoading(true);
  const formData = new FormData();
  formData.append("recipe", new Blob([JSON.stringify(dataForm.recipe)] , { type: "application/json" }));
 
  dataForm.images.forEach((image) => {
      formData.append("images", image);
  });

  formData.append("majorImageIndex", dataForm.majorImageIndex.toString());
  try{
    const { isOk  } = await CreateRecipe(formData);
    if (isOk) {
      toast.success("Receta creado correctamente, automaticamente se redirigira a la vista de sus recetas", {
        position: "top-right",
      });
      router.push(`/${PATH.myRecipes}`);
    } else {
      toast.error("No se pudo crear su receta correctamente", {
        position: "top-right",
      });
    }
  }catch(error){
    console.log(error)
    toast.error("No se pudo crear su receta correctamente", {
      position: "top-right",
    });
  }

  setIsLoading(false);
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

  const getImagePromt = (prompt: string, idImage: string , name :string) => {
    const urlNewPhoto = getCldImageUrl({
      src: idImage,
      replaceBackground: prompt,
    });

    const updatedItems = Object.values(imagesPreview).map((image) =>
      image.id === idImage ? { id: idImage, imageUrl: urlNewPhoto , name: name} : image
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
