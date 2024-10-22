import { StateStep } from "../../stores";

export const Step = ({ orderNum, detail }: StateStep) => {
  return (
    <div className="flex gap-5 w-full">
      <div>
        <h3 className="text-white text-4xl">#{orderNum}</h3>
      </div>
      <div>
        <h3 className="text-white text-4xl">{detail}</h3>
      </div>
    </div>
  );
};
