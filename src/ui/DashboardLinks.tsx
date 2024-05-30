import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { motion } from "framer-motion";

interface DashboardLinksProp extends NavLinkProps {
  to: string;

  children: ReactNode;
}
const DashboardLinks = ({ to, children }: DashboardLinksProp) => {
  return (
    <motion.li className="w-full rounded-md" whileTap={{ scale: 0.9 }}>
      <NavLink
        to={to}
        className="bg-linkBackground flex w-full items-center justify-start gap-x-2 rounded-md px-6 py-2 font-medium text-text transition-all duration-200 ease-linear hover:bg-secondary hover:text-white"
      >
        {children}
      </NavLink>
    </motion.li>
  );
};

export default DashboardLinks;
