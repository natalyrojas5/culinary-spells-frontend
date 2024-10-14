const baseType = "rounded-lg shadow-lg ";
const sizeStyles = {
  big: "py-2 px-6 text-3xl",
  medium: "py-2 px-4 text-2xl",
};

export const BUTTON = {
  orange: {
    type: {
      base: `${baseType} text-black bg-orange hover:bg-yellow-600`,
    },
    size: sizeStyles,
  },
  white: {
    type: {
      base: `${baseType} text-black bg-white hover:bg-gray-200`,
    },
    size: sizeStyles,
  },
  purple: {
    type: {
      base: `${baseType} text-white bg-purple-600 hover:bg-purple-900`,
    },
    size: sizeStyles,
  },
};
