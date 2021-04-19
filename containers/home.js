import Category from "../components/category";
import {
  TextSm,
  TextBase,
  TextLg,
  Title,
  TitleUnderlined,
} from "../components/text";
import Feature from "../components/feature";
import { GiAppleSeeds } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

const HomeContainer = () => (
  <div>
    <div
      style={{
        height: "40vh",
        backgroundImage: `url("https://media.gq.com.mx/photos/5cb3de7b34cf1d4d52d62253/16:9/w_1920,c_limit/GettyImages-916591460.jpg")`,
      }}
      className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center"
    >
      <div className="bg-gray-800 bg-opacity-30 w-2/3 rounded-xl max-w-lg">
        <Title className="text-center text-white">
          DISFRUTE DE LOS MEJORES PESCADOS Y MARISCOS
        </Title>
      </div>
    </div>
    <TitleUnderlined>CATEGORIAS</TitleUnderlined>
    <div className=" py-4 flex flex-col items-center md:flex-row justify-evenly">
      <Category imgSrc="http://eltitular.do/et/wp-content/uploads/2016/09/El-Remedio-Natural-pescados-ricos-en-omega-3-compressor1.jpg">
        PESCADOS
      </Category>
      <Category imgSrc="https://womenshealth.obgyn.msu.edu/sites/womenshealth/files/styles/medium_embed/public/Shellfish-and-Crustaceans-Cookery-Course.jpg">
        MARISCOS
      </Category>
    </div>
    <div>
      <TitleUnderlined>DESPACHO Y PAGO</TitleUnderlined>
    </div>
    <div>
      <TitleUnderlined>NOSOTROS</TitleUnderlined>
      <div className="flex items-center py-4 flex-col md:flex-row md:justify-arround">
        <Feature
          text="Elegimos los mejores productos de nuestro mar al trabajar con
        productores locales certificados, todo para superar siempre tu
        expectativa."
        >
          <img src="/quality.svg" alt="quality" className="h-12 w-12" />
        </Feature>
        <Feature text="Cuidamos de manera especial la cadena de frío de nuestros productos, desde la adquisición hasta la entrega, con altos estándares de refrigeración e higiene.">
          <GiAppleSeeds className="h-10 w-10" />
        </Feature>
        <Feature text="Promovemos una vida saludable mediante el consumo de productos del mar, promovemos la calidad de vida con una dieta balanceada.">
          <FaHeartbeat className="h-10 w-10" />
        </Feature>
      </div>
    </div>
  </div>
);

export default HomeContainer;
