import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProp {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}
const Button = ({
  onClick,
  type = "button",
  className,
  children,
}: ButtonProp) => {
  return (
    <motion.button
      className={`rounded-md bg-secondary px-6 py-2 capitalize text-white transition-all duration-200 ease-linear hover:bg-hover ${className ? className : ""}`}
      onClick={onClick}
      type={type}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
