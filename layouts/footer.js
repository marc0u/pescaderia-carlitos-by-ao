import { AiFillInstagram } from "react-icons/ai";
import FooterItem from "../components/footer-item";
import { TextBase } from "../components/text";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-blue-100">
      <div className="flex justify-evenly flex-wrap flex-col md:flex-row px-4 py-6">
        <FooterItem title="NOSOTROS">
          <TextBase>
            Encuantra los mejores pescados y mariscos congelados.
          </TextBase>
        </FooterItem>
        <FooterItem title="ENTREGAS">
          <TextBase>Entregamos de lunes a domingo.</TextBase>
        </FooterItem>
        <FooterItem title="CONTACTO">
          <a href="#">
            <AiFillInstagram className="h-6 w-6" />
          </a>
        </FooterItem>
      </div>
      <div className="text-sm p-2 m-auto w-1/2 text-center">
        2021 Desarrollado por
      </div>
    </footer>
  );
}
