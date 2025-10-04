import NavBar from "./NavBar";
import TopBar from "./TopBar";

const DesktopMenu = () => {
  return (
    <div className="hidden md:block">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default DesktopMenu;
