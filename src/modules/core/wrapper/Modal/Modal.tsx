"use client";

import { IoCloseSharp } from "react-icons/io5";

import { useModalStore } from "@/modules/core/stores";
import { fontMonomaniacOne } from "@/modules/core/utils";

interface Props {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  name: string;
}
export const Modal = ({ title, subtitle, children, name }: Props) => {
  const toggle = useModalStore((state) => state.toggle);
  const modalName = useModalStore((state) => state.name);
  const isOpen = useModalStore((state) => state.isOpen);

  if (modalName === name && isOpen) {
    return (
      <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <div className="rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full text-white">
          <div className="bg-purple-linear px-8 py-4 flex flex-col gap-8">
            <div className="ml-auto">
              <IoCloseSharp
                className="cursor-pointer c-txt-orange"
                size={50}
                onClick={() => toggle({ isOpen: false, name: "" })}
              />
            </div>
            {title && (
              <div className={`${!subtitle ? "mb-2" : ""} text-center`}>
                <h3
                  className={`text-4xl leading-6 font-bold ${fontMonomaniacOne.className}`}
                >
                  {title}
                </h3>
                {subtitle && (
                  <p className="mb-4 mt-5 text-2xl font-bold ">{subtitle}</p>
                )}
              </div>
            )}
            <div className="mx-4 mb-8">{children}</div>
          </div>
        </div>
      </div>
    );
  }
};
