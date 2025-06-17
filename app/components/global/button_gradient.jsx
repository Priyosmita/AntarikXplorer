import React from "react";
import "./global_components.css";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={`button_gradient text-white text-lg py-2 px-6 rounded-full ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
