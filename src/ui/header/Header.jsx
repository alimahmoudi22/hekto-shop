import MobileMenu from "./mobile/MobileMenu";
import DesktopMenu from "./desktop/DesktopMenu";

const Header = () => {
  return (
    <header>
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;
