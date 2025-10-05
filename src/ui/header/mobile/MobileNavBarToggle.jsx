import {
  X,
  Search,
  Mail,
  Phone,
  User,
  Heart,
  ShoppingCart,
} from "lucide-react";

import { Link, NavLink } from "react-router";

import HektoLogo from "../../../assets/Hekto.svg";

import MobileMenuNavLink from "./MobileMenuNavLink";
import MobileMenuTopLink from "./MobileMenuTopLnk";

const MobileNavBarToggle = ({ mobileMenuStatus, setMobileMenuStatus }) => {
  return (
    <div
      className={`ToggleMenu fixed z-20 overflow-y-auto inset-0 px-6 pt-4 bg-heroBannerBG w-full text-black transition-all duration-250 min-h-screen ${
        mobileMenuStatus ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex items-center justify-between pb-6.5 border-b-1 border-b-heroBannerSubText/50">
        <NavLink to={"/"}>
          <img src={HektoLogo} alt="hekto" />
        </NavLink>
        <button
          className="cursor-pointer"
          onClick={() => setMobileMenuStatus((prev) => !prev)}
        >
          <X />
        </button>
      </div>

      <nav className="Nav flex flex-col items-start mt-6.5 gap-y-6">
        <MobileMenuNavLink to={"/"}>Home</MobileMenuNavLink>
        <MobileMenuNavLink to={"/shop"}>Shop</MobileMenuNavLink>
        <MobileMenuNavLink to={"/blog"}>Blog</MobileMenuNavLink>
        <MobileMenuNavLink to={"/aboutus"}>About Us</MobileMenuNavLink>
        <MobileMenuNavLink to={"/contactus"}>Contact Us</MobileMenuNavLink>
      </nav>

      <div className="Search flex items-center relative my-8">
        <input
          type="text"
          className="w-full bg-white h-10 outline-none pl-3.5 placeholder:text-sm placeholder:text-heroBannerSubText "
          placeholder="Search..."
        />
        <button className="absolute right-0 bg-headerPink transition-colors text-white h-full w-12.5 flex items-center justify-center cursor-pointer">
          <Search size={26} />
        </button>
      </div>

      <ul className="flex items-center gap-6 justify-center">
        <MobileMenuTopLink icon={<User size={20} />} to={"/login"}>
          Login
        </MobileMenuTopLink>
        <MobileMenuTopLink icon={<Heart size={20} />} to={"/wishlist"}>
          Wishlist
        </MobileMenuTopLink>
        <MobileMenuTopLink icon={<ShoppingCart size={20} />} to={"shop"}>
          Shop
        </MobileMenuTopLink>
      </ul>

      <div className="Infos flex flex-col items-start px-2 mt-8 mb-6.5 gap-y-6">
        <div className="email flex gap-x-4">
          <Mail className="text-headerPink" />
          <p>alimahmoudi@gmail.com</p>
        </div>
        <div className="phone flex gap-x-4">
          <Phone className="text-headerPink" />
          <p>021-4586-521</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBarToggle;
