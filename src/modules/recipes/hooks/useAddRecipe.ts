"use client";

import { getCldImageUrl } from "next-cloudinary";
import { useRecipeStore } from "../stores";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { SchemaCreateEditRecipe } from "../schemas";
import { formatErrors } from "@/modules/core/utils";
import { PATH } from "../constants";
import { useRouter } from "next/navigation";
import { CreateRecipe } from "../actions";

export const useAddRecipe = () => {
  const router = useRouter()
  const { name, description, recipeType, setRecipe , steps } = useRecipeStore();
  const [timeNum, setTimeNum] = useState("");
  const [timeUnit, setTimeUnit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAddView, setIsAddView] = useState(true)
  const [imagesPreview, setImagesPreview] = useState([
    { id: "", imageUrl: "", name: ""},
    { id: "", imageUrl: "", name: ""},
    { id: "", imageUrl: "", name: ""},
    { id: "", imageUrl: "", name: ""}
  ]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "timeNum") {
      setTimeNum(value);
    } else if (name === "timeUnit") {
      setTimeUnit(value);
    } else {
      setRecipe({ [name]: value });
    }
  };

  const getImagePromt = async (prompt: string, idImage: string, name: string) => {
    const toastLoader = toast.loading(
      "Generando imagen",
      {
        position: "top-right",
      }
    );
    const urlNewPhoto = getCldImageUrl({
      src: idImage,
      replaceBackground: prompt,
    });
    
    const responseFetch =  await fetch(urlNewPhoto)
    
    toast.done(toastLoader)

    if(responseFetch.ok){
      const updatedItems = Object.values(imagesPreview).map((image) =>
        image.id === idImage
          ? { id: idImage, imageUrl: urlNewPhoto, name: name }
          : image
      );
  
      setImagesPreview(updatedItems);
      toast.success(
        "Imagen subida para modificar espere un momento a que cargue la nueva imagen generada",
        {
          position: "top-right",
        }
      );
    }else{
      toast.error(
        "Ha ocurrido un error porfavor cambie de foto o reintente de nuevo",
        {
          position: "top-right",
        }
      );
    }
  }

  const getImagesBlob = async () => {
    const images = Object.values(imagesPreview).filter((image) => {
      return image.id !== "" && image.imageUrl !== "";
    });

    const imagesBlob: Blob[] = [];
    for (let i = 0; i < images.length; i++) {
      const img = document.getElementById(images[i].name) as HTMLImageElement;
      const canvas: HTMLCanvasElement = document.createElement(
        "canvas"
      ) as HTMLCanvasElement;
      const ctx: CanvasRenderingContext2D = canvas.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      if (img.complete) {
        const imgRect = img.getBoundingClientRect();
        canvas.width = imgRect.width;
        canvas.height = imgRect.height;
        ctx?.drawImage(img, 0, 0, imgRect.width, imgRect.height);
        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((blob) => {
            resolve(blob);
          }, "image/png");
        });

        if (blob) {
          const url = URL.createObjectURL(blob)
          console.log(url)
          imagesBlob.push(blob);
        } else {
          toast.error("No se pudo convertir la imagen a Blob");
        }
      } else {
        toast.error("La imagen aún no se ha cargado completamente.");
      }
    }
    return imagesBlob;
  };

  const getValuesRecipeForm = async () => {
    const infoData = {
      recipe: {
        name: name,
        detail: description,
        recipeTypes: recipeType,
        cookingTime: timeUnit === "min" ?  (parseInt(timeNum) * 60).toString() : ((parseInt(timeNum)* 60)*60).toString(),
        steps: steps,
      },
      images: await getImagesBlob(),
      majorImageIndex: "0",
    };
    return infoData;
  };

  const isFormValid = async () => {
    const infoData = await getValuesRecipeForm();
    console.log(infoData)
    const infoValidate = SchemaCreateEditRecipe.safeParse(infoData);
    console.log(infoValidate)
    if (!infoValidate.success) {
      const formattedErrors = formatErrors(infoValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return  { status : false , data : infoData};
    }
    return  { status : true , data : infoData};
    
  };


  const createRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status , data } = await isFormValid();

    if (!status) return;
    setIsLoading(true);
    const toastLoader = toast.loading(
      "Creando Imagen",
      {
        position: "top-right",
      }
    );
    const formData = new FormData();
    formData.append(
      "recipe",
      new Blob([JSON.stringify(data.recipe)], { type: "application/json" })
    );

    data.images.forEach((image) => {
      formData.append("images", image);
    });

    formData.append("majorImageIndex", data.majorImageIndex.toString());
    try {
      const { isOk } = isAddView  ? await CreateRecipe(formData) : await CreateRecipe(formData);
      if (isOk) {
        toast.success(
          "Receta creado correctamente, automaticamente se redirigira a la vista de sus recetas",
          {
            position: "top-right",
          }
        );
        router.push(`/${PATH.myRecipes}`);
      } else {
        toast.error("No se pudo crear su receta correctamente", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("No se pudo crear su receta correctamente", {
        position: "top-right",
      });
    }
    setIsLoading(false);
    toast.done(toastLoader)
  };
  return { name, description, recipeType, timeNum, timeUnit, handleChange , imagesPreview , setImagesPreview  , getImagePromt , createRecipe  , isLoading , setIsAddView};
};
