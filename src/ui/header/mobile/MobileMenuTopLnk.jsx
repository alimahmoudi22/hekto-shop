import { Link } from "react-router";

const MobileMenuTopLnk = ({ children, icon, to }) => {
  return (
    <li>
      <Link to={to} className="flex items-center gap-1">
        <span>{children}</span>
        {icon}
      </Link>
    </li>
  );
};

export default MobileMenuTopLnk;
