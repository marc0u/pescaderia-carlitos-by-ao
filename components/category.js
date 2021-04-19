import Link from "next/link";
import { withRouter } from "next/router";
import { TextBase, TextLg, Title } from "./text";
import { parseCurrency } from "../utils/prices";

function Product({ imgSrc, children }) {
  return (
    <Link href={`/${children.toLowerCase()}`}>
      <a className="p-2">
        <div
          style={{
            height: "40vh",
            backgroundImage: `url(${imgSrc})`,
          }}
          className="transform transition ease-in-out duration-500 hover:scale-105 w-80 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center max-w-sm"
        >
          <div className="bg-gray-800 bg-opacity-30 w-1/3 rounded-xl hover:bg-green-400">
            <Title className="text-center text-white">{children}</Title>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Product;
