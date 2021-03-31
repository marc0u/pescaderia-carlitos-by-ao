import { AiFillInstagram } from "react-icons/ai";
import FooterItem from "../components/footer-item";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-blue-100">
      <div className="flex justify-evenly flex-wrap m-6">
        <FooterItem title="Entregas">
          <p>
            Entregamos de lunes a domingo <br />
          </p>
        </FooterItem>
        <FooterItem title="Siguenos">
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
