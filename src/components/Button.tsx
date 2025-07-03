"use client";
import { IconArrowRight } from "@tabler/icons-react";

const Button = ({ label, icon, ...props }) => {
  return (
    <button
      className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition flex items-center font-oxanium"
      {...props}
    >
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;