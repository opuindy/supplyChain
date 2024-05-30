import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface LinkButtonProp {
  to: string;
  children: ReactNode;
}

const LinkButton = ({ to, children }: LinkButtonProp) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(to);

  return (
    <motion.button
      className="rounded-md bg-secondary px-6 py-2 text-white transition-all duration-200 ease-linear hover:bg-hover"
      onClick={handleNavigate}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.button>
  );
};

export default LinkButton;
