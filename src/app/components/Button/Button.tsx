import { cva } from "class-variance-authority";
import { FC } from "react";

const buttonStyles = cva("text-white px-4 py-2 focus:outline-none transition", {
  variants: {
    size: {
      Small: "text-sm py-2 px-4 !important",
      Medium: "text-base py-3 px-6 !important",
      Large: "text-lg py-4 px-8 !important",
      "Extra Large": "text-xl py-5 px-10 !important",
    },
    flavours: {
      Primary: "bg-blue-500",
      Success: "bg-green-500",
      Warning: "bg-yellow-500",
      Danger: "bg-red-500",
      Inverse: "bg-gray-500",
      Purple: "bg-violet-900",
    },
    roundness: {
      Square: "rounded-none",
      Small: "rounded-sm",
      Base: "rounded",
      Medium: "rounded-md",
      Large: "rounded-lg",
      XL: "rounded-xl",
      "2XL": "rounded-2xl",
      Circular: "rounded-full",
    },
  },
  defaultVariants: {
    size: "Medium",
    flavours: "Primary",
    roundness: "Base",
  },
});

export interface ButtonProps {
  children: React.ReactNode;
  size: "Small" | "Medium" | "Large" | "Extra Large";
  flavours: "Primary" | "Success" | "Warning" | "Danger" | "Inverse" | "Purple";
  roundness:
    | "Square"
    | "Small"
    | "Base"
    | "Medium"
    | "Large"
    | "XL"
    | "2XL"
    | "Circular";
}

const Button: FC<ButtonProps> = ({ size, flavours, roundness, children }) => {
  return (
    <button className={buttonStyles({ size, flavours, roundness })}>
      {children}
    </button>
  );
};

export default Button;
