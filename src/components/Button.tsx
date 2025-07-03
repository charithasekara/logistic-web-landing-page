"use client";

const Button = ({ children, variant = "solid", className = "", ...props }) => {
  const baseClasses = "px-6 py-2 rounded-md transition flex items-center font-oxanium";

  const solidStyles = "bg-yellow-500 text-white hover:bg-yellow-600";
  const outlinedStyles = "border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-600";

  const variantStyles = variant === "outlined" ? outlinedStyles : solidStyles;

  return (
    <button
      className={`${baseClasses} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
