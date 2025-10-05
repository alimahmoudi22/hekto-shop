import { Search } from "lucide-react";
import { NavLink } from "react-router";
import HektoLogo from "../../../assets/Hekto.svg";
import DesktopMenuNavLink from "./DesktopMenuNavLink";

const NavBar = () => {
  return (
    <div className="navBar my-5 container">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-x-6 text-base lg:gap-x-9">
          <li className="mr-2 lg:mr-13">
            <NavLink to={"/"}>
              <img src={HektoLogo} alt="hekto" className="w-20 lg:w-auto" />
            </NavLink>
          </li>
          <DesktopMenuNavLink to={"/"}>Home</DesktopMenuNavLink>
          <DesktopMenuNavLink to={"/shop"}>Shop</DesktopMenuNavLink>
          <DesktopMenuNavLink to={"/blog"}>Blog</DesktopMenuNavLink>
          <DesktopMenuNavLink to={"/aboutus"}>About Us</DesktopMenuNavLink>
          <DesktopMenuNavLink to={"/contactus"}>Contact Us</DesktopMenuNavLink>
        </ul>

        <form className="relative">
          <input
            type="text"
            className="outline-none border-2 border-headerStroke h-10 w-54 lg:w-79 pl-3"
            placeholder="Search..."
          />
          <button
            type="submit"
            aria-label="Search"
            className="bg-headerPink py-2 px-2 lg:px-3 cursor-pointer absolute right-0 top-0"
          >
            <Search className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
