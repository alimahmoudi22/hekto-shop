import { NavLink } from "react-router";

const MobileMenuNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-headerPink" : "")}
    >
      {children}
    </NavLink>
  );
};

export default MobileMenuNavLink;
