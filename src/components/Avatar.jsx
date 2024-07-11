import React from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva("relative inline-block overflow-hidden", {
  variants: {
    variant: {
      rounded: "rounded",
      circle: "rounded-full",
      square: "rounded-none",
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
    },
  },
  defaultVariants: {
    variant: "circle",
    size: "md",
  },
});

const PlaceholderSVG = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className={`h-full w-full text-gray-300 ${className}`}
  >
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Avatar = ({
  src,
  alt,
  variant,
  size,
  className,
  imgProps,
  fallback,
  initial,
}) => {
  const variantClass = avatarVariants({ variant, size });
  const sizeClass = avatarVariants({ size });

  return (
    <div className={`${variantClass} ${className}`}>
      {src ? (
        <img
          alt={alt || ""}
          src={src}
          className="h-full w-full object-cover"
          {...imgProps}
        />
      ) : initial ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-600">
          {initial.toUpperCase()}
        </div>
      ) : (
        <div
          className={`inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100 ${sizeClass}`}
        >
          {fallback}
        </div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  variant: "circle",
  size: "md",
  className: "",
  imgProps: {},
  fallback: <PlaceholderSVG />,
};

export default Avatar;
