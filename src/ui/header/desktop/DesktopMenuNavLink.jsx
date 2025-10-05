import { NavLink } from "react-router";

const DesktopMenuNavLink = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-headerPink"
            : "hover:text-headerPink transition-colors "
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default DesktopMenuNavLink;
