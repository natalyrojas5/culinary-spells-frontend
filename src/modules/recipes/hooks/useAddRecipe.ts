"use client";

import { useRecipeStore } from "../stores";
import { ChangeEvent, useState } from "react";

export const useAddRecipe = () => {
  const { name, description, recipeType, setRecipe } = useRecipeStore();
  const [timeNum, setTimeNum] = useState("");
  const [timeUnit, setTimeUnit] = useState("");

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

  return { name, description, recipeType, timeNum, timeUnit, handleChange };
};
