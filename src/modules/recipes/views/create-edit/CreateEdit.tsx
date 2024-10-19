import { GoBack } from "@/modules/core/components";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormCreateEditRecipe, ModalRecipeTypes } from "@/modules/recipes/components";
import { RECIPE_FORM_TITLES } from "../../constants";

interface IProps {
  isAdd: boolean;
}

export const ViewCreateEdit = ({ isAdd }: IProps) => {
  return (
    <>
      <GoBack />
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="font-extrabold text-5xl c-txt-golden-yellow">
          {isAdd ? RECIPE_FORM_TITLES.CREATE : RECIPE_FORM_TITLES.EDIT}
        </h1>
      </header>
      <FormCreateEditRecipe isAdd />
      <ModalRecipeTypes />
    </>
  );
};
