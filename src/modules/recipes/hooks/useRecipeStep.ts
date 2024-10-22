import { ChangeEvent } from "react";
import { StateStep, useRecipeStore } from "../stores";
import { SchemaStep } from "../schemas";
import { formatErrors } from "@/modules/core/utils";
import { toast } from "react-toastify";

const initialStateStep = {
  order: "",
  description: "",
  id: "",
};

export const useRecipeStep = () => {
  const { currentStep, steps, setRecipe } = useRecipeStore((state) => state);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setRecipe({ currentStep: { ...currentStep, description: value } });
  };

  const isFormValid = () => {
    const step = {
      name: currentStep.id,
      description: currentStep.description,
      orderNum: currentStep.order,
    };
    const stepValidate = SchemaStep.safeParse(step);

    if (!stepValidate.success) {
      const formattedErrors = formatErrors(stepValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return false;
    }

    return true;
  };

  const addStep = () => {
    const isValid = isFormValid();
    if (!isValid) return;

    const newStep: StateStep = {
      order: String(steps.length + 1) || "",
      description: currentStep?.description || "",
      id: crypto.randomUUID(),
    };

    setRecipe({ steps: [...steps, newStep] });
    setRecipe({ currentStep: initialStateStep });
  };

  const resetSteps = () => {
    setRecipe({ steps: [] });
  };

  return { handleChange, currentStep, steps, addStep, resetSteps };
};
