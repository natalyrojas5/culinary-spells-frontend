import { fontJollyLodger } from "@/modules/core/utils";

export const Footer = () => {
  return (
    <div
      className={`${fontJollyLodger.className} bg-purple-700 p-6 text-center flex gap-2 flex-col  justify-center border-t-8 c-border-golden-yellow`}
    >
      <p className="c-txt-golden-yellow text-3xl">
        Desarrollador con 💜 para Hackathon Cloudinary
      </p>
      <p className="text-white text-2xl">Spellbound Coders</p>
    </div>
  );
};
