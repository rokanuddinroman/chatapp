import React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "font-semibold shadow-sm flex items-center justify-center",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        secondary:
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        soft: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
      },
      size: {
        xs: "rounded px-2 py-1 text-xs",
        sm: "rounded px-2 py-1 text-sm",
        md: "rounded-md px-2.5 py-1.5 text-sm",
        lg: "rounded-md px-3 py-2 text-sm",
        xl: "rounded-md px-3.5 py-2.5 text-sm",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export const Button = ({
  startIcon,
  endIcon,
  loading,
  className,
  fullWidth,
  variant,
  size,
  color,
  children,
  style,
  disabled,
  ...props
}) => {
  const variantClass = buttonVariants({ variant, size, fullWidth });

  const renderIcon = (icon) => (
    <span className="flex items-center mr-2">
      {loading ? <Loader /> : icon}
    </span>
  );

  return (
    <button
      className={`${variantClass} ${className}`}
      style={style}
      disabled={disabled || loading}
      {...props}
    >
      {startIcon && !loading && renderIcon(startIcon)}
      {loading && renderIcon()}
      <span className="select-none">{children}</span>
      {endIcon && <span className="flex items-center ml-2">{endIcon}</span>}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  fullWidth: false,
  className: "",
  style: {},
  disabled: false,
};

const Loader = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export default Button;
