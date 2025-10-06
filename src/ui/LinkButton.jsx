import { Link } from "react-router";

const styles = {
  primary: `py-4 w-28 md:w-41 text-white flex items-center justify-center font-josefin font-semibold`,
};

const LinkButton = ({ type, to, color = "bg-headerPink", children }) => {
  if (to)
    return (
      <Link className={`${color} ${styles[type]}`} to={to}>
        {children}
      </Link>
    );
};

export default LinkButton;
