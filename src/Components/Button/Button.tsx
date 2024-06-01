import React, { FC, ReactNode } from "react";
//import classes from "Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
