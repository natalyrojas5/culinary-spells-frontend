import { ChangeEvent } from "react";
import { StateStep, useRecipeStore } from "../stores";
import { SchemaStep } from "../schemas";
import { formatErrors } from "@/modules/core/utils";
import { toast } from "react-toastify";

const initialStateStep = {
  orderNum: "",
  detail: "",
  id: "",
};

export const useRecipeStep = () => {
  const { currentStep, steps, setRecipe } = useRecipeStore((state) => state);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setRecipe({ currentStep: { ...currentStep, detail: value } });
  };

  const isFormValid = () => {
    const step = {
      name: "step" + steps.length,
      detail: currentStep.detail,
      orderNum: (steps.length + 1).toString(),
    };
    const stepValidate = SchemaStep.safeParse(step);

    console.log(stepValidate)

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
      orderNum: String(steps.length + 1) || "",
      detail: currentStep?.detail || "",
      name: "step" + steps.length,
    };

    setRecipe({ steps: [...steps, newStep] });
    setRecipe({ currentStep: initialStateStep });
  };

  const resetSteps = () => {
    setRecipe({ steps: [] });
  };

  return { handleChange, currentStep, steps, addStep, resetSteps };
};
