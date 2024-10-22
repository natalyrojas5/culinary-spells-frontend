import { StateStep } from "../../stores";

export const Step = ({ order, description, id }: StateStep) => {
  return (
    <div className="flex gap-5 w-full">
      <div>
        <h3 className="text-white text-4xl">#{order}</h3>
      </div>
      <div>
        <h3 className="text-white text-4xl">{description}</h3>
      </div>
    </div>
  );
};
