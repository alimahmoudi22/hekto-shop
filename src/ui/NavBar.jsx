import { Search } from "lucide-react";
import { NavLink } from "react-router";
import HektoLogo from "../assets/Hekto.svg";

const NavBar = () => {
  return (
    <div className="mt-5 container">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-x-6 text-sm lg:text-base lg:gap-x-9">
          <li className="mr-2 lg:mr-13">
            <NavLink to={"/"}>
              <img src={HektoLogo} alt="hekto" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-headerPink"
                  : "hover:text-headerPink transition-colors "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive
                  ? "text-headerPink"
                  : "hover:text-headerPink transition-colors"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-headerPink"
                  : "hover:text-headerPink transition-colors"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive
                  ? "text-headerPink"
                  : "hover:text-headerPink transition-colors"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contactus"}
              className={({ isActive }) =>
                isActive
                  ? "text-headerPink"
                  : "hover:text-headerPink transition-colors"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <form className="relative">
          <input
            type="text"
            className="outline-none border-2 border-headerStroke h-10 w-60 lg:w-79 pl-3"
            placeholder="Search..."
          />
          <button
            type="submit"
            aria-label="Search"
            className="bg-headerPink py-2 px-3 cursor-pointer absolute right-0 top-0"
          >
            <Search className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
