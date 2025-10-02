import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <header className="">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;
