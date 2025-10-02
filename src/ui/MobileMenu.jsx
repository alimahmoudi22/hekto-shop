import { Menu, ShoppingCart, Mail, Phone, User, Heart } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="bg-headerViolet text-headerwhite">
      <div className="flex items-center justify-between px-4 h-11 text-headerwhite md:hidden">
        <Menu className="cursor-pointer text-headerwhite" />
        <ShoppingCart className="cursor-pointer text-headerwhite" />
      </div>
    </div>
  );
};

export default MobileMenu;
