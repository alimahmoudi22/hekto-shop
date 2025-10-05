import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import MobileNavBarToggle from "./MobileNavBarToggle";
import { Link } from "react-router";

const MobileMenu = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <div className="mobileMenu bg-headerViolet text-headerwhite">
      <nav className="flex items-center justify-between px-4 h-11 text-headerwhite md:hidden">
        <button onClick={() => setMobileMenuStatus((prev) => !prev)}>
          <Menu className="cursor-pointer text-headerwhite" />
        </button>
        <Link to={"/cart"}>
          <ShoppingCart className="cursor-pointer text-headerwhite" />
        </Link>
      </nav>

      <MobileNavBarToggle
        mobileMenuStatus={mobileMenuStatus}
        setMobileMenuStatus={setMobileMenuStatus}
      />
    </div>
  );
};

export default MobileMenu;
