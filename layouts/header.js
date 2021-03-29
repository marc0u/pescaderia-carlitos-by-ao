import AppBar from "../components/appbar";
import AppBarItem from "../components/appbar-item";

const Header = () => {
  return (
    <AppBar logoSrc="/logo.jpg">
      <AppBarItem href="/pescados">Pescados</AppBarItem>
      <AppBarItem href="/mariscos">Mariscos</AppBarItem>
      <AppBarItem href="/nosotros">Nosotros</AppBarItem>
    </AppBar>
  );
};

export default Header;
