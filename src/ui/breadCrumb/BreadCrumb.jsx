import { NavLink } from "react-router";

const BreadCrumb = () => {
  return (
    <section className="breadCrumb bg-breadCrumbBG h-71.5 pt-24 ">
      <div className="container">
        <h2 className="font-josefin font-bold text-4xl text-breadCrumbTitle">
          Shop
        </h2>
        <ul className="flex items-center font-medium gap-x-1 mt-2">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-headerPink" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <span>.</span>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) => (isActive ? "text-headerPink" : "")}
            >
              Store
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumb;
