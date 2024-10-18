import { fontMali, fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  description: string;
}

export const RecipeDescription = ({ description }: IProps) => {
  return (
    <section className="p-4">
      <h1
        className={`text-4xl c-txt-golden-yellow leading-6 font-bold ${fontMonomaniacOne.className} mb-6`}
      >
        Descripción de Receta
      </h1>
      <p className={`${fontMali.className} text-xl text-white`}>{description}</p>
    </section>
  );
};
