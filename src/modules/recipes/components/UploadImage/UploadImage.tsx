/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { CldUploadWidget  } from "next-cloudinary";
import { BUTTONCLOUDINARY } from "@/modules/core/constants";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { toast } from "react-toastify";
import Image, { StaticImageData } from "next/image";
import { BUTTON } from "@/modules/core/constants";
import empty from "@/modules/core/assets/empty.jpg"
interface Filters {
  label: string;
  propmt: string;
  ref: StaticImageData
}

interface IProps {
  label: string;
  labelBtnUpload: string;
  filters: Array<Filters>;
  name: string;
  imageInfo: {
    id: string;
    imageUrl:string
  };
  isAdd: boolean;
  saveImage: (imageInfo: any,name:string) => void
  getImagePrompt: (prompt: string,idImage:string) => void
}

export const UploadImage = ({
  label,
  imageInfo,
  labelBtnUpload = "Subir Foto",
  filters = [],
  name,
  isAdd,
  saveImage,
  getImagePrompt
}: IProps) => {
  const { goldenYellow } = BUTTON;
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label
        htmlFor={name}
        className={`${isAdd ? "text-white" : "c-txt-golden-yellow"}  text-2xl`}
      >
        {label}
      </label>
      <div className="grid grid-cols-3 w-full gap-10">
        <div className="col-span-2 text-center">
          <Image
            src={imageInfo?.imageUrl === "" ? empty : imageInfo?.imageUrl}
            height={300}
            width={400}
            id={name}
            crossOrigin="anonymous"
            alt="Image Subida Cloudinary"
            className="rounded-lg w-full h-[400px] object-contain"
          />
          <CldUploadWidget
            uploadPreset="test-ia"
            options={BUTTONCLOUDINARY.options}
            onSuccess={async (result) => {
              toast.success("Imagen subida para modificar", {
                position: "top-right",
              });
              saveImage(result.info,name)
            }}
            onClose={() => {
              document.body.style.overflow = 'auto';
            }}
          >
            {({ open }) => {
              return (
                <button
                  type="button"
                  className={`text-center btn bg-golden-yellow  text-black rounded-md px-5 py-3 my-4 text-2xl ${goldenYellow.size.medium}`}
                  onClick={() => open()}
                >
                  {labelBtnUpload}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className={`col-span-1 grid grid-cols-3 gap-3 h-fit ${imageInfo.imageUrl === "" ? 'opacity-50 pointer-events-none' : ''}`}>
          {filters.map((filter, i) => {
            return (
              <div 
                onClick={() => getImagePrompt(filter.propmt,imageInfo.id)}
                className="filter col-span-1 relative h-[120px] cursor-pointer overflow-hidden rounded-lg" key={i} data-promt={filter.propmt}>
                <Image
                  className="absolute object-cover h-full"
                  alt="filter"
                  src={filter.ref}
                />
                <span className="bg-white w-full absolute bottom-0 text-black text-center text-sm">
                  {filter.label}
                </span>
              </div>
              // <button
              //   key={i}
              //   data-prompt={filter.propmt}
              //   className={`w-full ${orange.type.base} ${orange.size.medium}`}
              // >
              //   {filter.label}
              // </button>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
};
