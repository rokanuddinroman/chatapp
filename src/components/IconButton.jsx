import React from "react";
import { cva } from "class-variance-authority";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        contained:
          "bg-indigo-600 text-white border-transparent hover:bg-indigo-700",
        outlined:
          "bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50",
        neutral:
          "bg-white text-indigo-600 border border-[#E2E4E9] hover:bg-gray-50",
        ghost:
          "bg-transparent text-indigo-600 border border-transparent hover:bg-gray-50",
      },
      size: {
        small: "w-8 h-8 p-1", // 32px
        medium: "w-9 h-9 p-2", // 36px
        large: "w-10 h-10 p-3", // 40px
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "medium",
    },
  }
);

export const IconButton = ({
  icon,
  tooltip,
  className,
  variant,
  size,
  style,
  disabled,
  ...props
}) => {
  const variantClass = iconButtonVariants({ variant, size });

  return (
    <div
      className={`${variantClass} ${className}`}
      style={style}
      disabled={disabled}
      aria-label={tooltip}
      {...props}
    >
      <span className="flex items-center">{icon}</span>
    </div>
  );
};

IconButton.defaultProps = {
  variant: "contained",
  size: "medium",
  className: "",
  style: {},
  disabled: false,
  tooltip: "",
};

export default IconButton;
