import AppBar from "../components/appbar";
import AppBarItem from "../components/appbar-item";
import Banner from "../components/banner";
import { FaFish } from "react-icons/fa";
import { GiBackboneShell } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <Banner />
      <AppBar logoSrc="/logo.jpg">
        <AppBarItem href="/pescados">
          <FaFish className="mr-1" />
          Pescados
        </AppBarItem>
        <AppBarItem href="/mariscos">
          <GiBackboneShell className="mr-1" />
          Mariscos
        </AppBarItem>
        <AppBarItem href="/nosotros">Nosotros</AppBarItem>
      </AppBar>
    </header>
  );
};

export default Header;
