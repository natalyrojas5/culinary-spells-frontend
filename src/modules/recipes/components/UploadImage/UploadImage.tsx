import { CldUploadWidget } from "next-cloudinary";
import { BUTTONCLOUDINARY } from "@/modules/core/constants";
import { fontMonomaniacOne } from "@/modules/core/utils";
import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { BUTTON } from "@/modules/core/constants";
import { RECIPE_IMAGE_FILTERS } from "../../constants";

interface Filters {
  label: string;
  propmt: string;
}

interface IProps {
  label: string;
  urlImagePreview: string;
  labelBtnUpload: string;
  name?: string;
  isAdd: boolean;
}

export const UploadImage = ({
  label,
  urlImagePreview = "",
  labelBtnUpload = "Subir Foto",
  name,
  isAdd,
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
            src={urlImagePreview === "" ? empty : urlImagePreview}
            height={300}
            width={400}
            alt="Image Subida Cloudinary"
            className="rounded-lg w-full h-[400px] object-cover"
          />
          <CldUploadWidget
            uploadPreset="test-ia"
            options={BUTTONCLOUDINARY.options}
            onSuccess={async (result) => {
              // toast.success("Imagen subida para modificar", {
              //   position: "top-right",
              // });
              // saveImage(result.info, name);
            }}
            onClose={() => {
              document.body.style.overflow = "auto";
            }}
            onError={() => {
              // toast.error(
              //   "Hubo un error subiendo la imagen porfavor vuelva a intentarlo",
              //   {
              //     position: "top-right",
              //   }
              // );
            }}
          >
            {({ open }) => {
              return (
                <button
                  className={`text-center btn bg-golden-yellow  text-black rounded-md px-5 py-3 my-4 text-2xl ${goldenYellow.size.medium}`}
                  onClick={() => open()}
                >
                  {labelBtnUpload}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className="col-span-1 flex gap-5 flex-col">
          {RECIPE_IMAGE_FILTERS.map(({ label, ref }, i) => (
            <div
              className="filter col-span-1 relative h-[120px] w-[120px] cursor-pointer overflow-hidden rounded-lg"
              key={i}
            >
              <Image
                src={ref}
                className="absolute object-cover h-full"
                alt="filter"
              />
              <span className="bg-white w-full absolute bottom-0 text-black text-center text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
};
