import { ShoppingCart, Mail, Phone, User, Heart } from "lucide-react";
import { Link } from "react-router";

const TopBar = () => {
  return (
    <div className="topBar bg-headerViolet text-headerwhite font-josefin font-semibold py-2">
      <div className="container flex items-center justify-between text-base">
        <div className="left flex items-center gap-6 lg:gap-12">
          <div className="email flex items-center gap-x-2.5">
            <Mail />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="phone flex items-center gap-x-2.5">
            <Phone />
            <span>(12345)67890</span>
          </div>
        </div>
        <div className="right">
          <ul className="flex items-center gap-6">
            <li>
              <Link to={"/login"} className="flex items-center gap-1">
                <span>Login</span>
                <User size={20} />
              </Link>
            </li>
            <li>
              <Link to={"/wishlist"} className="flex items-center gap-1">
                <span>Wishlist</span>
                <Heart size={20} />
              </Link>
            </li>
            <li className="ml-2">
              <Link
                to={"/cart"}
                className="bg-headerwhite flex items-center justify-center p-1.5 rounded-full"
              >
                <ShoppingCart className="text-headerViolet" size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
