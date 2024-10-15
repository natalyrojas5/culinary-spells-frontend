'use client'
import { fontMonomaniacOne } from "@/modules/core/utils";
import { CldUploadWidget } from "next-cloudinary";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
}

export const InputFile = ({
  label,
  placeholder,
  name,
}: IProps) => {
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label htmlFor={name} className="text-white text-2xl">
        {label}
      </label>
      <CldUploadWidget
        uploadPreset="test-ia"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 1,
          language: "es",
          text: {
            es: {
              or: "O",
              actions:{
                upload:placeholder
              },
              menu: {
                files: "Subir desde tu dispositivo",
              },
              local: {
                browse: "Seleccionar",
                dd_title_single: "Arrastra tu imagen aquí",
              }
            },
          },
        }}
      >
        {({ open }) => {
          return (
            <button className="text-left btn bg-golden-yellow text-black rounded-md p-3 mb-4 w-full text-2xl" onClick={() => open()}>
              {placeholder}
            </button>
          );
        }}
      </CldUploadWidget>
    </fieldset>
  );
};
