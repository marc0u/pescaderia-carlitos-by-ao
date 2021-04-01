import { func } from "prop-types";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Banner() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=56945874538"
      className="p-2 bg-green-400 flex justify-center items-center flex-wrap"
      target="_blank"
    >
      <span>DESPACHO GRATIS CIUDAD DEL SOL</span>
      <div className="flex items-center">
        <span className="px-2">PIDE AQUÍ:</span>
        <IoLogoWhatsapp className="h-6 w-6 pr-1" />
        <span>+56945874538</span>
      </div>
    </a>
  );
}
