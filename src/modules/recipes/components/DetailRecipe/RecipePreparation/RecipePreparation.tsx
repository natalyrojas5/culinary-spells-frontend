import { fontMali, fontMonomaniacOne } from "@/modules/core/utils";
interface IStep {
  detail: string;
  orderNum: number;
}
interface IProps {
  steps: IStep[];
}

export const RecipePreparation = ({ steps }: IProps) => {
  const sortedSteps = steps?.sort((a, b) => a.orderNum - b.orderNum);
  const hasSteps = sortedSteps?.length > 0;

  if (!hasSteps) {
    return null;
  }
  return (
    <section className="p-4">
      <h1
        className={`
        text-4xl c-txt-golden-yellow leading-6 font-bold ${fontMonomaniacOne.className} mb-6`}
      >
        ¡A cocinar!
      </h1>
      <ol
        className={`${fontMali.className} text-xl text-white flex flex-col gap-3`}
      >
        {sortedSteps.map((step) => (
          <li key={step.orderNum} className="flex items-start gap-3">
            <span className="text-2xl c-txt-golden-yellow">
              {step.orderNum}.
            </span>
            <span className="text-white">{step.detail}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
