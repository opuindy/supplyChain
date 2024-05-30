import { NavLink, NavLinkProps } from "react-router-dom";

interface CustomNavLinkProps extends NavLinkProps {
  to: string;
  className?: string;
  title: string;
}

const CustomNavLink = ({ to, className = "", title }: CustomNavLinkProps) => {
  return (
    <li className="px-3 py-2">
      <NavLink
        to={to}
        className={`navLink  font-medium capitalize ${className ? className : ""}`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
