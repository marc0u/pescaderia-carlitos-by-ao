import { func } from "prop-types";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Banner() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=56945874538"
      className="p-2 bg-blue-700 text-white font-bold flex justify-center items-center flex-wrap"
      target="_blank"
    >
      <span>Despacho gratis Ciudad del Sol</span>
      <div className="flex items-center">
        <span className="px-2">Pide aqui:</span>
        <IoLogoWhatsapp className="text-green-400" />
        <span>+56945874538</span>
      </div>
    </a>
  );
}
