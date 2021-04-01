import AppBar from "../components/appbar";
import AppBarItem from "../components/appbar-item";
import Banner from "../components/banner";
import { FaFish } from "react-icons/fa";
import { GiBackboneShell } from "react-icons/gi";
import { TextBase } from "../components/text";

const Header = () => {
  return (
    <header>
      <Banner />
      <AppBar logoSrc="/logo.jpg">
        <AppBarItem href="/pescados">
          <FaFish className="mr-1" />
          <TextBase>PESCADOS</TextBase>
        </AppBarItem>
        <AppBarItem href="/mariscos">
          <GiBackboneShell className="mr-1" />
          <TextBase>MARISCOS</TextBase>
        </AppBarItem>
      </AppBar>
    </header>
  );
};

export default Header;
