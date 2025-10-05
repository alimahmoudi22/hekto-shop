import NavBar from "./NavBar";
import TopBar from "./TopBar";

const DesktopMenu = () => {
  return (
    <div className="desktopMenu hidden md:block">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default DesktopMenu;
